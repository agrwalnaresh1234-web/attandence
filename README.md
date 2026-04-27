# Advanced Attendance Management System

Advanced Attendance Management System built with FastAPI, MongoDB, and a responsive HTML/CSS/JavaScript frontend.

## Features

- Admin login and dashboard
- Student add, edit, delete, and Excel import
- Daily attendance marking
- Branch and semester attendance reports
- Student attendance status lookup
- HOD and teacher account management
- Teacher class assignment workflow
- Student login portal
- Public attendance link for parent and student viewing
- WhatsApp-ready notification integration using Twilio environment variables

## Current Project Structure

```text
attendance_system/
|-- main.py
|-- database.py
|-- index.html
|-- login.html
|-- dashboard.html
|-- admin_management.html
|-- settings.html
|-- add_student.html
|-- attendance.html
|-- student_status.html
|-- report.html
|-- hod_login.html
|-- hod_dashboard.html
|-- teacher_login.html
|-- teacher_dashboard.html
|-- student_login.html
|-- student_dashboard.html
|-- attendance_link.html
|-- style.css
|-- requirements.txt
|-- render.yaml
|-- netlify.toml
|-- _redirects
`-- README.md
```

## Tech Stack

- Backend: FastAPI
- Database: MongoDB with `pymongo`
- Frontend: HTML, CSS, JavaScript

## Requirements

- Python 3.10+
- MongoDB running locally or MongoDB Atlas

## Local Setup

1. Create a virtual environment:

```powershell
python -m venv venv
```

2. Activate it:

```powershell
.\venv\Scripts\Activate.ps1
```

3. Install dependencies:

```powershell
python -m pip install -r requirements.txt
```

4. Set MongoDB connection if needed:

```powershell
$env:MONGO_URI="mongodb://localhost:27017/"
```

5. Run the project:

```powershell
python -m uvicorn main:app --reload
```

## Open the App

- App: `http://127.0.0.1:8000`
- API docs: `http://127.0.0.1:8000/docs`
- Student login: `http://127.0.0.1:8000/student_login.html`
- Teacher login: `http://127.0.0.1:8000/teacher_login.html`
- HOD login: `http://127.0.0.1:8000/hod_login.html`

## Admin Credentials

```text
Username: admin
Password: admin123
```

## MongoDB Environment Variable

The backend uses:

```text
MONGO_URI
```

Default fallback:

```text
mongodb://localhost:27017/
```

## WhatsApp Configuration

Set these before starting the backend:

```powershell
$env:TWILIO_ACCOUNT_SID="your_sid"
$env:TWILIO_AUTH_TOKEN="your_token"
$env:TWILIO_WHATSAPP_FROM="whatsapp:+917024899669"
$env:PUBLIC_ATTENDANCE_URL="http://127.0.0.1:8000/attendance_link.html"
$env:STUDENT_PORTAL_URL="http://127.0.0.1:8000/student_login.html"
python -m uvicorn main:app --reload
```

## GitHub Push

This folder already contains a Git repository. To publish the latest version:

```powershell
git add .
git commit -m "Prepare project for GitHub and deployment"
git push origin master
```

If you want to rename the branch to `main`:

```powershell
git branch -M main
git push -u origin main
```

## Render Deployment

This project is ready for a simple Render web service deployment.

Required environment variables:

```text
MONGO_URI=<your-mongodb-atlas-uri>
TWILIO_ACCOUNT_SID=<optional>
TWILIO_AUTH_TOKEN=<optional>
TWILIO_WHATSAPP_FROM=<optional>
PUBLIC_ATTENDANCE_URL=https://<your-render-service>.onrender.com/attendance_link.html
STUDENT_PORTAL_URL=https://<your-render-service>.onrender.com/student_login.html
```

Render will run:

```text
uvicorn main:app --host 0.0.0.0 --port $PORT
```

## Notes

- Branches are limited to the configured engineering departments.
- Semesters are limited to `1` through `6`.
- Roll number format is validated like `25014C04010`.
- WhatsApp delivery depends on valid Twilio credentials and an approved WhatsApp sender.
