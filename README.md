# Backend Tutorial

A simple REST API built with Node.js, Express, and MongoDB for managing users and posts.

## How to run

```bash
npm install
```

Add a `.env` file in the root with:
```
MONGODB_URI=your_mongodb_connection_string
PORT=8000
```

```bash
npm start
```

## API Routes

### Users
| Method | Route | Description |
|--------|-------|-------------|
| POST | /api/v1/users/register | Register a new user |
| POST | /api/v1/users/login | Login with email and password |
| GET | /api/v1/users | Get all users |

### Posts
| Method | Route | Description |
|--------|-------|-------------|
| POST | /api/v1/posts | Create a new post |
| GET | /api/v1/posts | Get all posts |
| GET | /api/v1/posts/:id | Get a single post by ID |
| PUT | /api/v1/posts/:id | Update a post |
| DELETE | /api/v1/posts/:id | Delete a post |
