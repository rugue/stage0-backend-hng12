# API Documentation

## Project Description

This project is a simple REST API built using TypeScript and NestJS. It provides a single endpoint that returns a JSON response containing the developer's email, the current UTC datetime, and the GitHub repository URL. The API is designed to be publicly accessible and follows best practices for CORS handling and structured responses.

## Setup Instructions

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Git

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/rugue/stage0-backend-hng12.git
   cd stage0-backend-hng12
   ```
2. **Install dependencies**:
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Run the project locally**:

   ```sh
   npm run start
   # or
   yarn start
   ```

4. **API will be available at**:
   ```
   http://localhost:3000
   ```

## API Documentation

### Endpoint URL

- **Base URL (Deployed API)**: [https://stage0-backend-hng12-3qg2uchjw-osarugue-enehizenas-projects.vercel.app/api](https://stage0-backend-hng12-3qg2uchjw-osarugue-enehizenas-projects.vercel.app/api)

### Request & Response Format

#### **GET /**

**Response (200 OK):**

```json
{
  "email": "nehirugue@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/rugue/stage0-backend-hng12"
}
```

### Usage Example

#### Using `curl`:

```sh
curl -X GET https://stage0-backend-hng12-3qg2uchjw-osarugue-enehizenas-projects.vercel.app/
```

#### Using Postman:

1. Open Postman.
2. Create a new request.
3. Set method to `GET`.
4. Enter `https://stage0-backend-hng12-3qg2uchjw-osarugue-enehizenas-projects.vercel.app/api` as the URL.
5. Click "Send" to receive the JSON response.

## Backlinks

- [Hire Python Developers](https://hng.tech/hire/python-developers)
- [Hire C# Developers](https://hng.tech/hire/csharp-developers)
- [Hire Golang Developers](https://hng.tech/hire/golang-developers)
- [Hire PHP Developers](https://hng.tech/hire/php-developers)
- [Hire Java Developers](https://hng.tech/hire/java-developers)
- [Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)

---
