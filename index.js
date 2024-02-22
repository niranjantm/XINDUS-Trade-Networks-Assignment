import express from "express"; // Import the Express.js framework
import cors from "cors"; // Import CORS middleware for handling Cross-Origin Resource Sharing
import sequelize from "./db/sequelize.js"; // Import the Sequelize instance for database connection
import userRouter from "./routes/user.routes.js"; // Import user routes
import wishListRouter from "./routes/wishList.routes.js"; // Import wishlist routes
import cookieParser from "cookie-parser"; // Import cookie-parser middleware for parsing cookies

const app = express(); // Create an instance of Express application

// Middleware setup
app.use(express.json()); // Middleware to parse JSON bodies of incoming requests
app.use(cors()); // Middleware to enable CORS (Cross-Origin Resource Sharing)
app.use(cookieParser()); // Middleware for parsing cookies

// Database synchronization
sequelize
  .sync()
  .then(() => {
    // Synchronize Sequelize with the database
    console.log("connected to DB"); // Log a message if database connection is successful
  })
  .catch((error) => {
    console.log(error); // Log any errors that occur during database connection
  });

// Routes setup
app.use("/api", userRouter); // Mount user routes under the "/api" prefix
app.use("/api", wishListRouter); // Mount wishlist routes under the "/api" prefix

// Error handling middleware
app.use((error, req, res, next) => {
  // Middleware to handle errors
  const statusCode = error.statusCode || 500; // Extract status code from the error, default to 500 if not provided
  const message = error.message || "Internal server error"; // Extract error message, default to "Internal server error" if not provided

  return res.status(statusCode).json({
    // Send JSON response with status code and error message
    message,
    success: false,
    statusCode,
  });
});
// Start the server
app.listen(5000, () => {
  // Start the server and listen on port 5000
  console.log("Server live on 5000"); // Log a message when the server starts successfully
});
