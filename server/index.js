// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");

// Create an Express application
const app = express();

// Enable CORS middleware to allow cross-origin requests
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB database
mongoose.connect("mongodb://localhost:27017/FSCrud");

// Route to fetch all users
app.get("/", (req, res) => {
  // Query the UserModel to find all users
  UserModel.find({})
    .then((users) => res.json(users)) // Send the list of users as JSON response
    .catch((err) => res.json(err)); // Send any error as JSON response
});

// Route to fetch a single user by ID
app.get("/getUser/:id", (req, res) => {
  const _id = req.params.id; // Get the user ID from the request parameters
  // Query the UserModel to find a user by ID
  UserModel.findById({ _id })
    .then((user) => res.json(user)) // Send the user as JSON response
    .catch((err) => res.json(err)); // Send any error as JSON response
});

// Route to update a user by ID
app.get("/updateUser/:id", (req, res) => {
  const _id = req.params.id; // Get the user ID from the request parameters
  const input = req.body.input; // Get the updated user data from the request body
  // Query the UserModel to find and update a user by ID
  UserModel.findByIdAndUpdate({ _id }, { input })
    .then((user) => res.json(user)) // Send the updated user as JSON response
    .catch((err) => res.json(err)); // Send any error as JSON response
});

// Route to delete a user by ID
app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id; // Get the user ID from the request parameters
  // Query the UserModel to find and delete a user by ID
  UserModel.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result)) // Send the deletion result as JSON response
    .catch((err) => res.json(err)); // Send any error as JSON response
});

// Route to create a new user
app.post("/createUser", (req, res) => {
  // Create a new user using data from the request body
  UserModel.create(req.body)
    .then((user) => res.json(user)) // Send the created user as JSON response
    .catch((err) => res.json(err)); // Send any error as JSON response
});

// Define the port the server will listen on
const port = 3000;
// Start the server and listen for incoming requests
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
