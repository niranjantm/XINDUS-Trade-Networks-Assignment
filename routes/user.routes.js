import express from "express"; // Import the Express.js framework

// Import controller functions for user sign-up and sign-in
import userSignUp from "../controllers/user.signUp.js";
import userSignIn from "../controllers/user.signIn.js";

const router = express.Router(); // Create an instance of Express Router

//-------------------------------------USER SIGN-UP-----------------------------------------------//

router.post("/user/signup", userSignUp); // Define a route for user sign-up and associate it with the userSignUp controller function

//-------------------------------------USER SIGN-IN-----------------------------------------------//

router.post("/user/signin", userSignIn); // Define a route for user sign-in and associate it with the userSignIn controller function

export default router; // Export the router for use in other parts of the applications