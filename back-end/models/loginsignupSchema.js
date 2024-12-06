import mongoose from "mongoose";
import validator from "validator";

const loginsignup = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
      select: false, // Ensures password is not returned in queries by default
    },
    confirmPassword: {
      type: String,
      required: [true, "Please confirm your password"],
      validate: {
        validator: function (value) {
          // This works only on `create` and `save`
          return value === this.password;
        },
        message: "Passwords do not match",
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Pre-save middleware to remove `confirmPassword` before saving
loginsignupSchema.pre("save", function (next) {
  this.confirmPassword = undefined; // Remove confirmPassword field from the database
  next();
});

// Create the model
const User = mongoose.model("User", loginsignupSchema);

export default User;
