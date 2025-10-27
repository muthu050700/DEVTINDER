const mongoose = require("mongoose");
console.log("mongoose");


const connectDB = async () => {
    await mongoose.connect("mongodb+srv://muthu050:t2RRZICnusHjuayK@namasterdev.ys2cf7s.mongodb.net/devTinder");
}

module.exports = {
    connectDB
}