import Wishlist from "../models/wishlist.model.js"; // Import the Wishlist model
import errorHandler from "../utils/errorHandler.js"; // Import the errorHandler utility function

export default async function deleteItem(req, res, next) {
  const { userId, itemId } = req.params; // Extract userId and itemId from the request parameters
  
  // Check if the authenticated user's ID matches the userId in the request
  if (req.user.id !== Number(userId)) {
    return next(errorHandler(401, "Unauthorized")); // Return an error response with status code 401 (Unauthorized) and message "Unauthorized"
  }

  try {
    // Find the item in the Wishlist table by its itemId
    const item = await Wishlist.findOne({ where: { id: itemId } });
    
    // If the item is not found, return an error response
    if (!item) {
      return next(errorHandler(404, "Item not found")); // Return an error response with status code 404 (Not Found) and message "Item not found"
    }
    
    // Check if the userRef of the item matches the userId
    if (item.dataValues.userRef !== Number(userId)) {
      return next(errorHandler(401, "You can only delete your items in your wishlist")); // Return an error response with status code 401 (Unauthorized) and message "You can only delete your items in your wishlist"
    }
    
    // Delete the item from the Wishlist table
    await item.destroy();

    // Respond with a success message
    res.status(200).json("Item Deleted");
  } catch (error) {
    // If an error occurs during item deletion, pass it to the error handling middleware
    next(error);
  }
}
