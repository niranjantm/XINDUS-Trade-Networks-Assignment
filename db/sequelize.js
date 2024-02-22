import { Sequelize } from "sequelize"; // Import Sequelize module

// Create a new Sequelize instance with database connection parameters
const sequelize = new Sequelize("XINDUS", "postgres", "niranjan", {
    dialect: "postgres", // Specify the dialect (here, PostgreSQL)
    host: "localhost" // Specify the host (here, localhost)
});

export default sequelize; // Export the configured Sequelize instance for use in other parts of the application
