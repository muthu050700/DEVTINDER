const express = require("express");

const { connectDB } = require("./config/database");
const { UserModel } = require("./model/user")
const app = express();

const PORT = 7777;

app.use(express.json());

app.post("/signUp", async (req, res) => {
    const user = new UserModel(req.body);
    try {
        await user.save();
        res.send("Data saved successfully");
    } catch (err) {
        res.status(401).send("Cannot save the user data")
    }
})

app.get("/user", async (req, res) => {
    const userEmail = req.body.emailId;
    try {
        const data = await UserModel.findOne({ emailId: userEmail });
        res.send(data);
    } catch (err) {
        res.status(400).send("Cannot get the user");
    }
});

app.get("/feed", async (req, res) => {
    try {
        const user = await UserModel.find({});

        res.send(user);
    } catch (err) {
        res.status(400).send("Something went wrong")
    }
})

app.get("/getUserById", async (req, res) => {
    const userId = req.body._id;

    try {
        const user = await UserModel.findById(userId);
        res.send(user);
    } catch (err) {
        res.status(400).send("Something went wrong");
    }
})

app.delete("/deleteUser", async (req, res) => {
    const userId = req.body._id;

    try {
        await UserModel.findByIdAndDelete(userId);
        res.send("user deleted successfully")
    } catch (err) {
        res.status(400).send("Something went wrong");
    }
})

app.patch("/updateUser", async (req, res) => {
    const userId = req.body.userId;
    const data = req.body;

    console.log(userId, data);

    try {
        await UserModel.findByIdAndUpdate({ _id: userId }, data);
        res.send("user updated successfully");
    } catch (err) {
        res.status(400).send("Something went wrong");
    }
})

connectDB().then(() => {
    console.log("Connected to the database successfully");
    app.listen(PORT, () => {
        console.log("Successfully Connected to the port", PORT);
    })
}).catch((err) => {
    console.log("Not connected to the database");
})


