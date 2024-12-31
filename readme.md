# CRUD API with Express.js and MongoDB

This project implements a RESTful API for managing products using Node.js, Express.js, and MongoDB. The API supports CRUD (Create, Read, Update, Delete) operations on product data stored in a MongoDB database.

## Features

- Fetch all products.
- Fetch a single product by ID.
- Create a new product.
- Update an existing product.
- Delete a product.

## Tech Stack

- **Node.js**: Runtime environment for building the API.
- **Express.js**: Framework for handling HTTP requests and routes.
- **MongoDB**: NoSQL database for storing product data.
- **Mongoose**: ODM library for MongoDB to interact with the database easily.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd CRUD_API
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up your MongoDB connection:
   - Replace the connection string in `index.js` with your MongoDB URI.
   ```javascript
   mongoose.connect('your_mongoDB_connection_string');
   ```
5. Start the server:
   ```bash
   node index.js
   ```
6. The server will run on `http://localhost:3000`.

## Endpoints

### Base URL: `/api/products`

| Method | Endpoint | Description                   |
| ------ | -------- | ----------------------------- |
| GET    | `/`      | Fetch all products.           |
| GET    | `/:id`   | Fetch a single product by ID. |
| POST   | `/`      | Create a new product.         |
| PUT    | `/:id`   | Update a product by ID.       |
| DELETE | `/:id`   | Delete a product by ID.       |

### Sample Product Data

```json
{
  "name": "Sample Product",
  "price": 100,
  "category": "Electronics"
}
```

## Project Structure

```
CRUD_API/
|-- controllers/
|   |-- product_controller.js
|-- models/
|   |-- product_model.js
|-- routes/
|   |-- product_route.js
|-- index.js
```

## Contributing

Feel free to fork this repository and submit pull requests to improve the functionality or add new features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

Thanks to the Node.js and MongoDB communities for their excellent documentation and support.

