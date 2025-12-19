const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");

const app = express();

app.get("/getUserData", (req, res) => {
    try {
        throw new Error("Something went wrong");
        res.send("all data")
    } catch (err) {
        res.status(500).send("There is some error while getting the user data.")
    }
})


app.use("/", (err, req, res, next) => {
    if (err) {
        res.status(500).send("Something went wrong");
    }
})

app.listen(7777, () => {
    console.log("Server is successfully listening on port ", 7777);
});