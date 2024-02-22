import express from "express"; // Import the Express.js framework
import Wishlist from "../models/wishlist.model.js"; // Import the Wishlist model
import addItems from "../controllers/wishList.addItems.js"; // Import controller function for adding items to the wishlist
import verifyUser from "../utils/verifyUser.js"; // Import middleware function for verifying user authentication
import getItems from "../controllers/wishList.getItems.js"; // Import controller function for getting items from the wishlist
import deleteItem from "../controllers/wishList.deleteItems.js"; // Import controller function for deleting items from the wishlist

const router = express.Router(); // Create an instance of Express Router

//----------------------------------------ADDING ITEM TO WISHLIST-------------------------------------//

router.post("/wishlists", addItems); // Define a route for adding items to the wishlist and associate it with the addItems controller function

router.get("/wishlists/:userId", verifyUser, getItems); // Define a route for getting items from the wishlist and associate it with the getItems controller function.
// The verifyUser middleware is used to verify user authentication before accessing the wishlist items.

router.delete("/wishlists/:userId/:itemId", verifyUser, deleteItem); // Define a route for deleting an item from the wishlist and associate it with the deleteItem controller function.

export default router; // Export the router for use in other parts of the application
