const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");

const app = express();

app.use("/admin", adminAuth);

app.get("/admin/getAllData", (req, res) => {
    res.send("All data for the admin");
});

app.delete("/admin/deleteData", (req, res) => {
    res.send("Data deleted successfully");
});

app.get("/user/getUserData", userAuth, (req, res) => {
    res.send("User Data");
})

app.listen(7777, () => {
    console.log("Server is successfully listening on port ", 7777);
});