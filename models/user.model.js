import { DataTypes } from "sequelize"; // Import DataTypes from Sequelize for defining data types
import sequelize from "../db/sequelize.js"; // Import the Sequelize instance for database connection

// Define the User model using sequelize.define
const User = sequelize.define("user", {
    // Define the 'username' column with STRING data type, unique constraint, and disallowing null values
    username: {
        type: DataTypes.STRING,
        unique: true, // Ensure usernames are unique
        allowNull: false // Disallow null values for username
    },
    // Define the 'email' column with STRING data type, unique constraint, and disallowing null values
    email: {
        type: DataTypes.STRING,
        unique: true, // Ensure emails are unique
        allowNull: false // Disallow null values for email
    },
    // Define the 'password' column with STRING data type and disallowing null values
    password: {
        type: DataTypes.STRING,
        allowNull: false // Disallow null values for password
    }
});

export default User; // Export the User model for use in other parts of the application
