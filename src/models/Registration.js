// models/Registration.js
import mongoose from 'mongoose'

const RegistrationSchema = new mongoose.Schema(
  {
    type: { type: String, required: true }, // 'project' or 'contributor'
    fullName: { type: String, required: true },
    bitsId: { type: String, required: true },

    // Fields for project registration
    projectName: { type: String },
    projectDescription: { type: String },
    githubRepo: { type: String },

    // Fields for contributor registration
    githubProfile: { type: String },
    skills: { type: String },
  },
  { timestamps: true }
)

// This conditional prevents model overwrite errors in development
export default mongoose.models.Registration ||
  mongoose.model('Registration', RegistrationSchema)
