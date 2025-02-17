# 📚 Online Learning Website

## 📝 Project Description
The **Online Learning Website** is a platform that helps users study with flashcards, create classes, share study materials, comment, and make online payments. The project includes both frontend and backend development using **ReactJS** and **Spring Boot**, along with security and payment integrations.

## 🧑‍💻 Roles
- **Backend Developer**
- **Frontend Developer**

## 🚀 Responsibilities

### 🔐 User Authentication & Authorization
- Implemented login, registration, and forgot password functionalities using **JWT Token**.
- Managed user roles (**Student, Teacher, Admin**) using **Spring Security**.

### 💳 Online Payment
- Integrated **VNP** payment gateway for processing **teacher service payments**.

### 🛠️ CRUD Operations
- Developed CRUD functionality for managing **cards, card sets, groups, comments, and assignments** using **JPA (Java Persistence API)**.
- Implemented **card set cloning** using **JPA**.

### 🎨 Frontend Development
- Designed and implemented UI for **cards, card sets, classes, comments, exercises, and user profiles** using **ReactJS**.
- Managed application state with **React Context API**.

## 🏗️ Technologies
- **Frontend:** ReactJS, Tailwind CSS
- **Backend:** Spring Boot, Spring Security, JPA, JWT
- **Database:** MySQL
- **Containerization:** Docker
- **Payment Gateway:** VNP

---

## ⚙️ Setup Instructions

### ✅ Prerequisites
- **Java 11** or higher
- **Node.js** (for frontend)
- **MySQL** (for database)
- **Docker** (optional for containerization)
## 📜 API Documentation (Swagger)
The API is documented using Swagger for easy reference.

Start the backend, then visit:
http://localhost:8080/swagger-ui/
## 🔗 Example Endpoints:
POST /auth/login → Logs in a user and returns a JWT token.
POST /auth/register → Registers a new user.
GET /classes → Retrieves a list of available classes.
POST /payment → Processes payment for teacher services using VNP.
## 🐳 Dockerization (Optional)
- **Build Docker images:**
docker-compose build
- **Start the application with Docker:**

docker-compose up
- **The app will be available at:**

Backend: http://localhost:8080
Frontend: http://localhost:3000
