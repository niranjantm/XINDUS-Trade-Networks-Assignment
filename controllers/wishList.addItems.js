import Wishlist from "../models/wishlist.model.js"; // Import the Wishlist model
import errorHandler from "../utils/errorHandler.js"; // Import the errorHandler utility function

export default async function addItems(req, res, next) {
  const { itemName, quantity, userRef } = req.body; // Extract itemName, quantity, and userRef from the request body

  try {
    // Create a new item in the Wishlist table with the provided itemName, quantity, and userRef
    const item = await Wishlist.create({ itemName, quantity, userRef });
    
    // Respond with the created item data
    res.json(item.dataValues);
  } catch (error) {
    // If an error occurs during item creation, pass it to the error handling middleware
    next(errorHandler(400, error.errors[0].message));
  }
}
