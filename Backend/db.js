const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://ashfak0404:khan0404@cluster0.lwsaqpx.mongodb.net/myData";

const connectToMongo = async () => {
  try {
       mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
