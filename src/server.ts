// Importing required modules
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import app from "./app";
import * as dotenv from "dotenv";

// Load environment-specific variables
if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env.production" });
} else {
  dotenv.config(); // Load .env by default for development
}

const port = process.env.PORT;

// Use body-parser middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
