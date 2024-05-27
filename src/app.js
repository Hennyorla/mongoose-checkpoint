const express = require("express");
const app = express();
//import mongoose model
const port = 3000;
const User = require("./models/userModel");
const connectDB = require("./utils/dbConfig");

// redirect to home route
app.get("/", (req, res) => {
  res.send("Hello Wolrd");
});

// write database CRUD functions

const createNewUser = async () => {
  try {
    const user = {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
    };

    const newUser = await User.create(user);

    if (newUser) {
      console.log(newUser);
    }
  } catch (error) {
    console.log(error);
  }
};

const getNewUser = async () => {
  try {
    const user = await User.findOne({ firstName: "John" });
    if (user) {
      console.log("User successfully found");
    }
  } catch (error) {
    console.log(error);
  }
};

const updateNewUser = async () => {
  try {
    const user = await User.findOneAndUpdate(
      { firstName: "John" },
      { firstName: "Jane" },
      { new: true }
    );

    if (user) {
      console.log("User successfully updated");
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteNewUser = async () => {
  try {
    const user = await User.findOneAndDelete({ firstName: "Jane" });

    if (user) {
      console.log("User successfully deleted");
    }
  } catch (error) {
    console.log(error);
  }
};

//start the server
const startServer = async () => {
  await connectDB();

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();

createNewUser();
getNewUser();
updateNewUser();
deleteNewUser();
