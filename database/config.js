// getting-started.js
// const mongoose = require('mongoose');
import mongoose from "mongoose";

async function conectDB() {
  try {
    const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/imanes";
    await mongoose.connect(uri);
    console.log("Base de datos online");
  } catch (error) {
    console.error("Error conectando a la base de datos:", error);
    throw error;
  }
}

export default conectDB;
