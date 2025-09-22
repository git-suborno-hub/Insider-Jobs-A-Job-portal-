# 🏢 Insider Jobs

A full-featured **Job Portal Application** built with the **MERN stack** 🚀  
This platform connects **recruiters** and **job hunters** in one place, making the hiring process smoother and more transparent.

<p align="center">
  <a href="https://insider-jobs-client-phi.vercel.app/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Live%20Demo-Insider%20Jobs-blueviolet?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo">
  </a>
</p>

---

## ✨ Features

### 👩‍💼 Recruiter Panel
- ➕ Publish new job circulars with details & requirements.
- 👀 Manage job visibility (show/hide circulars).
- 📑 View applicants’ profiles and resumes.
- ✅ Accept / ❌ Reject applications from the dashboard.

### 👨‍💻 Job Hunter Panel
- 📝 Apply for jobs with resume upload.
- 📋 Personal dashboard to track applied jobs.
- 🔔 See recruiter’s decision (accepted/rejected).
- 🔎 Filter jobs by **category** and **location**.

---

## 🛠️ Tech Stack

| Layer        | Technology |
|--------------|------------|
| **Frontend** | React, Tailwind CSS |
| **Backend**  | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **Auth**     | Clerk (for Job Hunter login) |
| **File Handling** | Cloudinary (resume & image uploads) |

---

## 📸 Screenshots

### Homepage
![Homepage](screenshots/homepage view.png)

### Recruiter Dashboard
![Recruiter Dashboard](screenshots/recruiter's view (add job).png)

### Recruiter Dashboard
![Recruiter Dashboard](screenshots/recruiter's view (manage jobs).png)

### Recruiter Dashboard
![Recruiter Dashboard](screenshots/recruiter's view (view applications).png)

### Applicant View (Resume)
![Applicant View](screenshots/job applications view.png)

### Job Description View
![Job Description View] (screenshots/job description view.png)

## ⚙️ Installation & Setup

Clone and run locally:

```bash
# Clone repo
git clone https://github.com/your-username/insider-jobs.git

# Go to folder
cd insider-jobs

# Install dependencies
npm install

# Add environment variables in `.env`

# Run development server
npm run dev
