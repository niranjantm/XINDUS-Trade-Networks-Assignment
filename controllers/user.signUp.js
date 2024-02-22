import User from "../models/user.model.js"; // Import the User model
import errorHandler from "../utils/errorHandler.js"; // Import the error handler utility
import bcrypt from "bcrypt"; // Import bcrypt for password hashing


export default async function userSignUp(req, res, next) {
    const { username, password, email } = req.body; // Extract username, password, and email from the request body
    
    try {
        const hashedPassword = bcrypt.hashSync(password, 10); // Hash the password using bcrypt
        const user = await User.create({ username, password: hashedPassword, email }); // Create a new user in the database with the hashed password
        res.status(201).json("User Created"); // Respond with a success message indicating that the user was created
    } catch (error) {
        // If an error occurs during user creation, pass it to the error handling middleware
        next(errorHandler(400, error.errors[0].message));
    }
}