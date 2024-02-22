import Wishlist from "../models/wishlist.model.js"; // Import the Wishlist model
import errorHandler from "../utils/errorHandler.js"; // Import the errorHandler utility function

export default async function getItems(req, res, next) {
  // Check if the authenticated user's ID does not match the userId in the request params
  if (req.user.id !== Number(req.params.userId)) {
    return next(errorHandler(401, "Unauthorized")); // Return an error response with status code 401 (Unauthorized) and message "Unauthorized"
  }

  try {
    // Find all items in the Wishlist table where userRef matches the userId from the request params
    const wishlist = await Wishlist.findAll({
      where: { userRef: req.params.userId },
    });

    // Respond with the wishlist items
    res.status(200).json(wishlist);
  } catch (error) {
    // If an error occurs during fetching items, pass it to the error handling middleware
    next(error);
  }
}
