const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/FSCrud");

app.get("/", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.get("/getUser/:id", (req, res) => {
  const _id = req.params.id;
  UserModel.findById({_id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.get("/updateUser/:id", (req, res) => {
  const _id = req.params.id;
  UserModel.findById({_id: id}, {input: req.body.input})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({_id: id})
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
