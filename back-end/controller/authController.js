import error from "../error/error.js";
import User from "../models/userModel.js";

export const signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Create a new user
    const newUser = await User.create({ email, password });

    res.status(201).json({
      message: "User signed up successfully!",
      user: { id: newUser._id, email: newUser.email },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check if the password is correct
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.status(200).json({ message: "Login successful", userId: user._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
