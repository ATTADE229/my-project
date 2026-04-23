# API Documentation

## Introduction
This document provides a comprehensive overview of the API endpoints for `my-project`. Each endpoint will include details on request and response formats, including sample requests and expected responses.

## Endpoints

### 1. Get User Information
- **Endpoint:** `/api/users/{id}`
- **Method:** GET

#### Request Format
```json
{
  "id": "string"
}
```

#### Response Format
```json
{
  "id": "string",
  "name": "string",
  "email": "string"
}
```

### 2. Create User
- **Endpoint:** `/api/users`
- **Method:** POST

#### Request Format
```json
{
  "name": "string",
  "email": "string"
}
```

#### Response Format
```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "created_at": "string"
}
```

### 3. Update User Information
- **Endpoint:** `/api/users/{id}`
- **Method:** PUT

#### Request Format
```json
{
  "name": "string",
  "email": "string"
}
```

#### Response Format
```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "updated_at": "string"
}
```

### 4. Delete User
- **Endpoint:** `/api/users/{id}`
- **Method:** DELETE

#### Request Format
```json
{
  "id": "string"
}
```

#### Response Format
```json
{
  "message": "User deleted successfully"
}
```

## Conclusion
This document serves as a guide for developers to understand how to interact with the API. Please refer to this documentation for details on request/response structures and endpoint behaviors.