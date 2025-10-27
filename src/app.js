const express = require("express");

const { connectDB } = require("./config/database");
const { UserModel } = require("./model/user")
const app = express();

const PORT = 7777;

app.post("/signUp", async (req, res) => {
    const user = new UserModel({
        firstName: "Danush",
        lastName: "Kumaran",
        emailId: "danush@gmail.com",
        password: "password@123",
    });

    await user.save();

    res.send("Successfully saved the data")
})

connectDB().then(() => {
    console.log("Connected to the database successfully");
    app.listen(PORT, () => {
        console.log("Successfully Connected to the port", PORT);
    })
}).catch((err) => {
    console.log("Not connected to the database");
})


