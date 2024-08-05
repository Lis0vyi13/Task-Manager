import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected!");
  } catch (error) {
    console.log("DB connection error: " + error);
  }
};

export const createJWT = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "none",
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.cookie("__l", true, {
    httpOnly: false,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "none",
    maxAge: 24 * 60 * 60 * 100,
  });
};
