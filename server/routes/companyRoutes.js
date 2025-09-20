import express from 'express'
import { changeJobApplicationsStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'
import { protectCompany } from '../middlewares/authMiddleware.js'

const router = express.Router()

// Register a company
router.post('/register', upload.single("image"), registerCompany)
//Company Login
router.post('/login', loginCompany)
//GEt company data
router.get('/company', protectCompany, getCompanyData)
//Post a job
router.post('/post-job', protectCompany, postJob)
//Get applicants dataof company
router.get('/applicants', protectCompany, getCompanyJobApplicants)
// Get company job list
router.get('/list-jobs', protectCompany, getCompanyPostedJobs)
//Change Application status
router.post('/change-status', protectCompany, changeJobApplicationsStatus)
// Chnage application visibility
router.post('/change-visibility',protectCompany, changeVisibility)


export default router