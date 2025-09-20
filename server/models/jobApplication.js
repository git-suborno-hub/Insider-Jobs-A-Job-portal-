import mongoose from "mongoose";

const jobApplicationSchema = new mongoose.Schema({
    userId: {type: String, ref: 'User', required: true},
    companyId: {type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true},
    jobId: {type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true},
    status: {type: String, default: 'Pending'},
    date: {type: String, required: true},
})

const JobApplications = mongoose.model('jobApplication', jobApplicationSchema)

export default JobApplications