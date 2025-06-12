# Todo App (Node.js, Express, MongoDB)

This is a simple **Todo App** built with **Node.js**, **Express**, and **MongoDB** to demonstrate backend flexibility beyond my usual .NET stack.

---

## 🌍 Live Demo

**▶️ [View Deployed Project on Railway](https://todo-appnodejsexpressmongodb-production.up.railway.app/)**

---

## 🚀 Purpose

The project was created to:
- Practice building backend apps using **Express.js** and **MongoDB**.
- Replace **ASP.NET + SQL Server** with a completely different stack.
- Explore deployment using **Docker**, **GitHub Actions**, **Railway**, and **MongoDB Atlas**.

---

## 🛠️ Tech Stack

| Layer       | Tech Used                                   |
|-------------|---------------------------------------------|
| Backend     | Node.js, Express                            |
| Database    | MongoDB (Atlas for cloud, Docker for local) |
| Auth        | Auth0                                       |
| CI/CD       | GitHub Actions, Docker Hub                  |
| Deployment  | Railway                                     |
| Dev Tools   | Docker, Docker Compose                      |

---

## 🔐 Environment Variables

- **`.env` is NOT pushed to GitHub** (it's ignored in `.gitignore`).
- A sample `.env.example` file is included to show the required environment variables for local setup.

---

## 🧪 Local vs Cloud

### ☁️ Cloud Deployment
- Hosted on **Railway**
- Uses **MongoDB Atlas**
- Auth handled via **Auth0**
- Automatically built and pushed to Docker Hub

### 🖥️ Local Development
- Uses Docker Compose to run MongoDB and the app
- MongoDB data is persisted using Docker volumes
- To run:
  ```bash
  docker compose up --build

---

## 📷 Screenshots

### 🔹 Docker Compose running locally  
![Docker Compose Running](https://github.com/Nourhan123Essam/todo-app_NodeJS_Express_MongoDB/blob/main/Screeshots/Docker-compose.png)

### 🔹 Auth0 Login Integration  
![Auth0 Login](https://github.com/Nourhan123Essam/todo-app_NodeJS_Express_MongoDB/blob/main/Screeshots/login.png)

### 🔹 Todo App Interface  
![Todo App](https://github.com/Nourhan123Essam/todo-app_NodeJS_Express_MongoDB/blob/main/Screeshots/todo-app.png)
