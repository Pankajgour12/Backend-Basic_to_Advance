import express from "express";
import User from "../model/user.model.js";

const router = express.Router();

// CRUD operations for User

// Create a new user

router.post("/users", async (req, res) => {
  try {
    // get the data req from the body

    const { name, age, email } = req.body;

    console.log(`${name} ,${age} ,${email}`);

    // create a new user in the database
    const newUser = new User({ name, age, email });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succese: false,
      message: error.message,
    });
  }
});

router.get("/users", async (req, res) => {
  try {
    // get all users from the database
    const users = await User.find();
    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succese: false,
      message: error.message,
    });
  }
});

// update user
router.put("/update-user/:id", async (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;

  try {
    // find the user by id and update it
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, age, email },
      { new: true, runValidators: true },
    );

    if (!updatedUser) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succese: false,
      message: error.message,
    });
  }
});

router.delete("/delete-user/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // find the user by id and delete it
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: deletedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succese: false,
      message: error.message,
    });
  }
});

export default router;
