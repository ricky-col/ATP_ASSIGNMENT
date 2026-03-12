

import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true
  },
  dateOfBirth: {
    type: Date,
    required: [true, "DOB is required"]
  },
  mobileNumber: {
    type: Number
  },
  status: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  versionKey: false
});

export const userModel = model("user", userSchema);