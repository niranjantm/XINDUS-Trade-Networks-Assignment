// Define the errorHandler function
export default function errorHandler(statusCode, message) {
    // Create a new Error object
    const error = new Error();

    // Set the statusCode and message properties of the error object
    error.statusCode = statusCode;
    error.message = message;

    // Return the error object
    return error;
}
