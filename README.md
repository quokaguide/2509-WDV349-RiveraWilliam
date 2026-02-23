# Springs Explorer — Final Project  
**Course:** WDV349 — Full Sail University  
**Author:** William Rivera  

Springs Explorer is a full-stack web application that allows users to browse, view details, and save Florida spring locations. The project demonstrates REST API integration, React front-end routing, backend data handling, and professional GitHub workflow practices.

**Current Status:** Beta (Staging) Release

---

## Features

- Browse list of Florida springs  
- View spring details by ID  
- Save favorite springs using local storage  
- Responsive UI layout  
- Backend API serving spring data  
- Loading and error state handling  

---

## Tech Stack

### Frontend
- React (Vite)  
- React Router  
- CSS  

### Backend
- Node.js  
- Express  

### Tools & Workflow
- GitHub Projects  
- Feature Branch Workflow  
- Pull Requests  
- ESLint  
- Markdown Documentation  

---

## Local Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/RiveraWilliamFS/2509-WDV349-RiveraWilliam.git
```

---

### 2. Install Dependencies — Client

```bash
cd client
npm install
npm run dev
```

Client runs at:

```
http://localhost:5173
```

---

### 3. Install Dependencies — Server

```bash
cd server
npm install
npm start
```

Server runs at:

```
http://localhost:3001
```

---

## API Endpoints

| Method | Endpoint | Description |
|-------|--------|-------------|
| GET | /api/springs | Returns all springs |
| GET | /api/springs/:id | Returns single spring by ID |

---

## GitHub Workflow

This project follows a multi-branch workflow:

- **main** → Production-ready code  
- **stage** → Beta staging environment  
- **dev** → Active development branch  
- **feature branches** → Isolated feature development  
- **cleanup branch** → Final beta polish and refactor  

All major changes are merged using Pull Requests to maintain clean version control history and reviewable progress.

---

## Milestone Tracking

Project progress is managed using:

- GitHub Issues  
- GitHub Project Board  
- Weekly Development Logs  
- Feature Branch Pull Requests  

---

## Current Milestone Status

### Milestone 4 — Beta Staging Release

- Core application features are functional  
- UI polish and layout improvements completed  
- Documentation and workflow cleanup finalized  
- Beta staging branch prepared for review  

---

## Author

**William Rivera**  
Full Sail University  
WDV349 — Final Project  
