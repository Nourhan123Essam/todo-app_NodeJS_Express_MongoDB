# Todo App (Node.js, Express, MongoDB)

This is a *very* simple **Todo App**... that happens to use **Clean Architecture**, **Docker**, **GitHub Actions**, **Railway Deployments**, and **CI/CD pipelines**

---

## 🌍 Live Demo

**▶️ [View Deployed Project on Railway](https://todo-appnodejsexpressmongodb-production.up.railway.app/)**

---

## 🚀 Purpose

The project was created to:
- Practice building backend apps using **Express.js** and **MongoDB**.
- Learn end-to-end automation: **Docker**, **CI/CD**, **Railway**, and **MongoDB Atlas**.
- Explore using **Auth0** as a third-party authentication service instead of custom login.


---

## 🛠️ Tech Stack

| Layer       | Tech Used                                                   |
|-------------|-------------------------------------------------------------|
| Backend     | Node.js, Express                                            |
| Database    | MongoDB (Atlas for cloud, Docker for local)                 |
| Auth        | Auth0                                                       |
| Docker      | Docker, Docker Compose                                      |
| CI/CD       | GitHub Actions → (Docker Hub, Railway)                      |
| Deployment  | Railway (automated via CLI in CI/CD)                        |

---

## 🔐 Environment Variables

- **`.env` is NOT pushed to GitHub** (it's ignored in `.gitignore`).
- A sample `.env.example` file is included to show the required environment variables for local setup.

---

## 🧪 Local vs Cloud

### ☁️ Cloud Deployment
- Fully automated CI/CD via GitHub Actions
- App is built → pushed to Docker Hub → deployed to Railway
- Hosted on **Railway**
- Uses **MongoDB Atlas**
- Auth handled via **Auth0**

### 🖥️ Local Development
- Docker Compose spins up the app with MongoDB container
- MongoDB data is persisted using Docker volumes
- To run:
  ```bash
  docker compose up --build

---

## 🌀 CI/CD Pipeline

What happens when I push to `main`?

1. 🔍 GitHub Actions runs the pipeline
2. 🐳 Docker builds the app and pushes image to Docker Hub
3. ⚙️ Railway CLI deploys the new image automatically
4. 🏁 Your app is live in seconds... unless Railway goes on vacation ☁️🔥

---

## 📷 Screenshots

### 🔹 Docker Compose running locally  
![Docker Compose Running](https://github.com/Nourhan123Essam/todo-app_NodeJS_Express_MongoDB/blob/main/Screeshots/Docker-compose.png)

### 🔹 Auth0 Login Integration  
![Auth0 Login](https://github.com/Nourhan123Essam/todo-app_NodeJS_Express_MongoDB/blob/main/Screeshots/login.png)

### 🔹 Todo App Interface  
![Todo App](https://github.com/Nourhan123Essam/todo-app_NodeJS_Express_MongoDB/blob/main/Screeshots/todo-app.png)
