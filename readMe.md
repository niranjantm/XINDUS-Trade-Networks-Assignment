# Wishlist Management System

This is a RESTful API for managing wishlists in a system. It provides endpoints for user authentication (signup and signin) and wishlist management (adding, retrieving, and deleting items).

## Technologies Used

- Node.js
- Express.js
- Sequelize (ORM for database management)
- JWT (JSON Web Tokens for authentication)
- bcrypt (for password hashing)
- PostgreSQL (as the database)

## API Documentation
- https://documenter.getpostman.com/view/30001255/2sA2rB13TD

## Installation

1. Clone the repository: git clone 

2. Install dependencies: npm install

3. Set up the database:
   - Make sure you have PostgreSQL installed and running.
   - Create a database named `XINDUS`.
   - Update the database configuration in `db/sequelize.js` if necessary.

5. Start the server: npm start

## Usage

- Signup: Use the `/api/user/signup` endpoint to register a new user by providing a username, email, and password.
- Signin: Use the `/api/user/signin` endpoint to authenticate a user by providing their email and password.
- Wishlist Management:
  - Add Item: Use the `/api/wishlists` endpoint to add an item to the user's wishlist.
  - Retrieve Items: Use the `/api/wishlists/:userId` endpoint to retrieve the wishlist items of a specific user.
  - Delete Item: Use the `/api/wishlists/:userId/:itemId` endpoint to delete a specific item from the user's wishlist.


