import User from "../models/user.model.js"; // Import the User model
import jwt from "jsonwebtoken"; // Import JWT for token generation
import bcrypt from "bcrypt"; // Import bcrypt for password comparison
import errorHandler from "../utils/errorHandler.js"; // Import the error handler utility

export default async function userSignIn(req, res, next) {
    const { email, password } = req.body; // Extract email and password from the request body

    // Check if email or password is missing
    if (!email || !password) {
        return next(errorHandler(403, "Invalid Credentials")); // Return an error response with status code 403 (Forbidden) and message "Invalid Credentials"
    }

    try {
        // Find a user with the provided email in the database
        const isValidUser = await User.findOne({ where: { email } });

        // If no user with the provided email is found, return an error response
        if (!isValidUser) {
            return next(errorHandler(404, "Invalid Credentials")); // Return an error response with status code 404 (Not Found) and message "Invalid Credentials"
        }

        // Compare the provided password with the hashed password stored in the database
        const isValidPassword = bcrypt.compareSync(password, isValidUser.dataValues.password);

        // If the password is invalid, return an error response
        if (!isValidPassword) {
            return next(errorHandler(401, "Invalid Credentials")); // Return an error response with status code 401 (Unauthorized) and message "Invalid Credentials"
        }

        // If the email and password are valid, generate a JWT token
        const { password: pass, ...rest } = isValidUser.dataValues; // Exclude the password from the user data
        const token = jwt.sign({ id: rest.id }, "XINDUS"); // Sign the token with the user's ID and a secret key

        // Set the token as a cookie named "access_token"
        res.cookie("access_token", token)
            .status(200)
            .json(rest); // Respond with the user data (excluding the password)
    } catch (error) {
        // If an error occurs, pass it to the error handling middleware
        next(errorHandler(error.statusCode, error.errors[0].message));
    }
}
