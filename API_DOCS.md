# NOLABETH Backend API Documentation

This document provides an overview of the REST API endpoints available in the NOLABETH backend application.

## Base URL
`http://localhost:3000/`

*Note: You can view the fully documented and interactive spec in the Swagger UI available at `http://localhost:3000/api/docs`.*

---

## Authentication & Authorization (`/api/v1/auth`)

All admin routes (except login/logout) are protected by a JWT authorization guard mapped to the `Bearer` token.

- **`POST /api/v1/auth/login`**
  - **Description**: Authenticates an Admin user and returns a token.
  - **Body Requirements**: `{ "email": "admin@example.com", "password": "password" }`
  - **Response**: `200 OK` Returns `{ "access_token": "..." }`

- **`POST /api/v1/auth/logout`**
  - **Description**: Logs out an Admin user (stateless, relies on client invalidating).
  - **Response**: `200 OK` Returns success message.

- **`POST /api/v1/auth/create-admin`** *(Protected: RolesGuard [SUPER_ADMIN])*
  - **Description**: Creates a new admin account.
  - **Body Requirements**: `CreateAdminDto` payload containing admin details.

- **`GET /api/v1/auth/admins`** *(Protected: RolesGuard [SUPER_ADMIN])*
  - **Description**: List all registered admin users.

---

## Admin Overview (`/api/v1/admin`)
- **`GET /api/v1/admin/overview`**
  - **Description**: Gets admin dashboard aggregate statistics (events, clients, blogs, and product counts).

---

## Standard App Modules (CRUD)
The following modules all adhere to a standard REST pattern under their respective bases.
*(All endpoints are protected by `JwtAuthGuard` unless specified otherwise)*

### Blogs (`/api/v1/admin/blogs`)
- `GET /` - List all blog posts (supports generic pagination & optional `category` filter).
- `GET /:id` - Get a specific blog post by its unique Mongo Database ID.
- `GET /slug/:slug` - Get a specific blog post using its URL slug.
- `POST /` - Create a new blog post. Body: `CreateBlogPostDto`.
- `PATCH /:id` - Update a piece of an existing blog post. Body: `UpdateBlogPostDto`.
- `DELETE /:id` - Remove a blog post.

### Clients (`/api/v1/admin/clients`)
- `GET /` - List all clients. Supports generic pagination and filtering by `status`.
- `GET /:id` - Detail view for a client.
- `POST /` - Register a new client. Body: `CreateClientDto`.
- `PATCH /:id` - Update client information. Body: `UpdateClientDto`.
- `DELETE /:id` - Delete a client.

### Events (`/api/v1/admin/events`)
- `GET /` - List all event timelines. Supports generic pagination.
- `GET /:id` - Retrieve singular event via ID.
- `POST /` - Book/schedule a new event. Body: `CreateEventDto`.
- `PATCH /:id` - Modify an existing event. Body: `UpdateEventDto`.
- `DELETE /:id` - End or delete an event.

### Products (`/api/v1/admin/products`)
- `GET /` - List products in inventory. Supports generic pagination and optional `category` filter.
- `GET /:id` - Fetch product specific details.
- `POST /` - Insert a new product listing. Body: `CreateProductDto`.
- `PATCH /:id` - Update product fields. Body: `UpdateProductDto`.
- `DELETE /:id` - Delete product.

### Resources (`/api/v1/admin/resources`)
- `GET /` - Display resources available. Supports pagination, `type`, and `category` filtering.
- `GET /:id` - Find a resource document.
- `POST /` - Upload/create new resource metadata. Body: `CreateResourceDto`.
- `PATCH /:id` - Update a resource item. Body: `UpdateResourceDto`.
- `DELETE /:id` - Remove a resource entry.

### Services (Therapy) (`/api/v1/admin/services`)
- `GET /` - List structured therapy services (supports pagination).
- `GET /:id` - Find a specific therapy offering.
- `POST /` - Launch a new service category. Body: `CreateTherapyServiceDto`.
- `POST /reorder` - Actionable endpoint to explicitly reorder services. Body: `{ "orderedIds": ["id1", "id2"] }`.
- `PATCH /:id` - Modify an existing service plan/description. Body: `UpdateTherapyServiceDto`.
- `DELETE /:id` - Erase a service from the DB.

---

### App Level (`/`)
- `GET /` - Ping/health check. Returns API Status (`getHello`). Without Auth.
