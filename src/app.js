const express = require("express");

const app = express();

const PORT = 7777;


app.get("/user", (req, res) => {
    res.send({ name: "muthu", age: 20 })
})

app.post("/user", (req, res) => {
    console.log("The data saved successfully");
    res.send("The data saved successfully");
})

app.use("/test", (req, res) => {
    res.send("This isss for test")
})

app.listen(PORT, () => {
    console.log("Successfully Connected to the port", PORT);
})