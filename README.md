# T2D_Protoype

T2D is a comprehensive learning management and quality monitoring platform that helps organizations track training effectiveness, monitor participant progress, and ensure quality outcomes. The application features user authentication, a dashboard for training analytics, and a chatbot interface for answer questions about HR informations.

## Features

- **User Authentication**: Secure registration and login with JWT token-based authentication
- **Dashboard**: Real-time analytics and quality metrics for training programs
- **Training Quality Monitoring**: Track participant satisfaction, performance metrics, and learning outcomes
- **Multi-Type Training Support**: Support for different training types (Anglais Business, IT, Langue)
- **RESTful API**: FastAPI backend with comprehensive endpoints

## Backend Setup

<h6>Install Python Dependencies</h6>
- cd ./Backend
- pip install -r requirements.txt

<!-- <h6>Configure Environment Variables</h6>
SECRET_KEY=your-secret-key-here-change-this-in-production
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
DATABASE_URL=postgresql://postgres:your_secure_password@localhost:5433/t2d_db -->

<h6>Start PostgreSQL with Docker</h6>
<p>cd ..</p>
<p>docker-compose up -d</p>
<p>docker-compose ps</p>

<h6>Create Database Tables</h6>
<p>docker-compose exec postgres psql -U postgres -d t2d_db

<h6>Start the Backend Server</h6>
<p>cd ./Backend</p>
<p>uvicorn app.main:app --reload</p>

<p> ---> The backend will be available at http://127.0.0.1:8000</p>

## Frontend Setup
<p>cd ./Frontend</p>
<p>npm install</p>
<p>npm run dev</p>

<p> ---> The frontend will be available at http://localhost:5173</p>

## Usage of the app

1. Access the Application
- Open your browser and navigate to http://localhost:5173

2. Create an Account
- Click Register
- Enter your email and password
- Click Register button
- You'll be redirected to login

3. Login
- Enter your credentials
- JWT token is stored in localStorage
- You'll be redirected to the Dashboard

4. Dashboard
View training quality metrics:
- Number of participants
- Quality scores
- Overall performance percentage
- Training type selector (Anglais Business, IT, Langue)
- Causes of dissatisfaction analysis

5.RH ChatBot
- Ask any question related to the Human Ressource domain
- This AI is trained with Data of the entreprise
- Each profil (HR, Director, normale worker) have his own responses, in other world this AI could not use the same to answer the question of every user, it will depends on the profil.

6. Logout
Click the Logout button in the header to:
- Clear authentication token
- Reset axios headers
- Return to login page

