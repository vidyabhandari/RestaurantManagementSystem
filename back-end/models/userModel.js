import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: false,
    lowercase: false,
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"],
    select: false, // Ensures password is not returned by default in queries
  },
  confirmPassword: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      // Custom validator to check if passwords match
      validator: function (value) {
        return value === this.password;
      },
      message: "Passwords do not match",
    },
  },
});

// Pre-save middleware to hash the password
userSchema.pre("save", async function (next) {
  // Skip if the password field is not modified
  if (!this.isModified("password")) {
    return next();
  }

  // Hash the password before saving
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  // Remove `confirmPassword` field before saving
  this.confirmPassword = undefined;
  next();
});

// Method to compare passwords during login
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
