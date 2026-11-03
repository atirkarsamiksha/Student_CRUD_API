# Student CRUD API – Assignment 6

Student database API built with Node.js, Express, MongoDB and Mongoose.

## Run locally
1. Install Node.js.
2. Open a terminal in this folder and run `npm install`.
3. Copy `.env.example` to `.env`.
4. Replace the sample `MONGO_URI` in `.env` with your MongoDB Atlas connection string.
5. Run `npm run dev`.
6. Open `http://localhost:5000`.

## API endpoints

| Operation | Method | Endpoint |
|---|---|---|
| Create | POST | `/api/students` |
| Read all | GET | `/api/students` |
| Read one | GET | `/api/students/:id` |
| Update | PUT | `/api/students/:id` |
| Delete | DELETE | `/api/students/:id` |

### Postman JSON body (POST)
Choose Body → raw → JSON:

```json
{
  "name": "Aarav Patil",
  "email": "aarav@example.com",
  "course": "Computer Engineering",
  "age": 20
}
```

Copy the `_id` returned by POST to test GET one, PUT and DELETE.

## MongoDB Atlas setup
1. Create a free Atlas cluster and a database user.
2. Configure Network Access to allow your development IP.
3. Select Connect → Drivers → Node.js and copy the connection string.
4. Put it in `.env`, replacing the username, password and cluster placeholders.
5. Keep `.env` private. It is excluded from Git by `.gitignore`.

## Deploy on Render
1. Push this project to GitHub without `.env` or `node_modules`.
2. Create a Render Web Service and connect the repository.
3. Build command: `npm install`
4. Start command: `npm start`
5. Add `MONGO_URI` under Render Environment variables.
6. Deploy and use the Render URL in Postman instead of localhost.

## Postman test sequence
- POST creates a student (expected HTTP 201).
- GET all lists students (HTTP 200).
- GET by ID retrieves the created student (HTTP 200).
- PUT updates the student (HTTP 200).
- DELETE removes the student (HTTP 200).
- GET by ID after deletion returns HTTP 404.

This is a backend API and needs a working MongoDB connection before it can start.
