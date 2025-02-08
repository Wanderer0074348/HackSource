// app/api/registration/route.js
import { NextResponse } from 'next/server'
import connectToDatabase from '../../../lib/mongoose'
import Registration from '../../../models/Registration'

// Rate limiting configuration
const RATE_LIMIT = {
  windowMs: 3 * 60 * 1000, // 5 minutes
  maxRequests: 5 // max requests per window
}

// Store IP addresses and their request counts
const requestCounts = new Map()

// Validate BITS ID format
const isValidBITSID = (bitsId) => {
  const bitsIdRegex = /^20\d{2}[A-Z0-9]{4}\d{4}[A-Z]$/
  return bitsIdRegex.test(bitsId)
}

// Validate GitHub URL
const isValidGithubUrl = (url) => {
  return url.startsWith('https://github.com/')
}

// Check rate limit
const checkRateLimit = (ip) => {
  const now = Date.now()
  const windowStart = now - RATE_LIMIT.windowMs

  // Clean up old entries
  for (const [storedIp, data] of requestCounts.entries()) {
    if (data.timestamp < windowStart) {
      requestCounts.delete(storedIp)
    }
  }

  // Check current IP
  const currentData = requestCounts.get(ip) || { count: 0, timestamp: now }
  if (currentData.count >= RATE_LIMIT.maxRequests) {
    return false
  }

  // Update count
  requestCounts.set(ip, {
    count: currentData.count + 1,
    timestamp: now
  })
  return true
}

export async function POST(request) {
  try {
    // Get client IP
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse and validate request data
    const data = await request.json()
    
    // Basic validation
    if (!data.fullName || !data.bitsId || !data.type) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate BITS ID
    if (!isValidBITSID(data.bitsId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid BITS ID format' },
        { status: 400 }
      )
    }

    // Type-specific validation
    if (data.type === 'project') {
      if (!data.projectName || !data.projectDescription || !data.githubRepo) {
        return NextResponse.json(
          { success: false, error: 'Missing required project fields' },
          { status: 400 }
        )
      }
      if (!isValidGithubUrl(data.githubRepo)) {
        return NextResponse.json(
          { success: false, error: 'Invalid GitHub repository URL' },
          { status: 400 }
        )
      }
    } else if (data.type === 'contributor') {
      if (!data.githubProfile || !data.skills) {
        return NextResponse.json(
          { success: false, error: 'Missing required contributor fields' },
          { status: 400 }
        )
      }
      if (!isValidGithubUrl(data.githubProfile)) {
        return NextResponse.json(
          { success: false, error: 'Invalid GitHub profile URL' },
          { status: 400 }
        )
      }
    } else {
      return NextResponse.json(
        { success: false, error: 'Invalid registration type' },
        { status: 400 }
      )
    }

    // Connect to database
    await connectToDatabase()

    // Check for existing registration
    const existingRegistration = await Registration.findOne({ bitsId: data.bitsId })
    if (existingRegistration) {
      return NextResponse.json(
        { success: false, error: 'BITS ID already registered' },
        { status: 409 }
      )
    }

    // Add metadata
    const registrationData = {
      ...data,
      registeredAt: new Date(),
      registrationIP: ip,
      lastModified: new Date()
    }

    // Create and save registration
    const registration = new Registration(registrationData)
    await registration.save()

    // Return success without sensitive data
    return NextResponse.json({ 
      success: true, 
      message: 'Registration successful',
      registrationId: registration._id 
    }, { 
      status: 201 
    })

  } catch (error) {
    console.error('Registration error:', error)
    
    // Handle duplicate key errors
    if (error.code === 11000) {
      return NextResponse.json(
        { success: false, error: 'This registration already exists' },
        { status: 409 }
      )
    }

    // Generic error response
    return NextResponse.json(
      { success: false, error: 'Registration failed. Please try again later.' },
      { status: 500 }
    )
  }
}
