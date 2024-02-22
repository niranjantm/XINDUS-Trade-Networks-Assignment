import { DataTypes, INTEGER } from "sequelize"; // Import DataTypes and INTEGER from Sequelize for defining data types
import sequelize from "../db/sequelize.js"; // Import the Sequelize instance for database connection

// Define the Wishlist model using sequelize.define
const Wishlist = sequelize.define("wishlist", {
    // Define the 'itemName' column with STRING data type and disallowing null values
    itemName: {
        type: DataTypes.STRING,
        allowNull: false // Disallow null values for itemName
    },
    // Define the 'userRef' column with INTEGER data type and disallowing null values
    userRef: {
        type: DataTypes.INTEGER,
        allowNull: false // Disallow null values for userRef
    },
    // Define the 'quantity' column with INTEGER data type and default value of 1
    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 1 // Default value for quantity is 1
    }
});

export default Wishlist; // Export the Wishlist model for use in other parts of the application
