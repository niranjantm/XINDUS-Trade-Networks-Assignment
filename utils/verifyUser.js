import errorHandler from "./errorHandler.js"; // Import the errorHandler utility function
import jwt from "jsonwebtoken"; // Import JWT for token verification

export default function verifyUser(req, res, next) {
    const token = req.cookies.access_token; // Extract the access token from the request cookies
    
    // If token is not provided, return an error response
    if (!token) {
        return next(errorHandler(401, "Unauthorized")); // Return an error response with status code 401 (Unauthorized) and message "Unauthorized"
    }

    try {
        // Verify the access token using JWT
        jwt.verify(token, "XINDUS", (error, user) => { // Verify the token using the secret key "XINDUS"
            if (error) {
                return next(errorHandler(403, "Forbidden")); // Return an error response with status code 403 (Forbidden) and message "Forbidden"
            }
            
            // If token is valid, attach the user object to the request object
            req.user = user;
            
            // Call the next middleware function
            next();
        });
    } catch (error) {
        // If an error occurs during token verification, pass it to the error handling middleware
        next(error);
    }
}
