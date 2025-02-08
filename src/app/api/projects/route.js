// src/app/api/projects/route.js
import { NextResponse } from 'next/server'
import connectToDatabase from '../../../lib/mongoose'
import Registration from '../../../models/Registration'

export async function GET() {
  try {
    await connectToDatabase()
    
    const projects = await Registration.find({ type: 'project' })
      .select('projectName projectDescription githubRepo fullName bitsId')
      .sort({ createdAt: -1 })
    
    return NextResponse.json({ success: true, projects }, { status: 200 })
  } catch (error) {
    console.error('Error fetching projects:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch projects' },
      { status: 500 }
    )
  }
}
