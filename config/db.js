const mongoose = require('mongoose');
//const config = require('config');

const dotenv = require("dotenv");
dotenv.config();

const username = process.env.NAME; 
const password = process.env.PASSWORD; 

const db = "mongodb+srv://" + username + ":" + password + "@cluster4.puqtqqc.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;