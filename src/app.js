const express = require("express");

const app = express();



app.use("/test", (req, res) => {
    res.send("Hello from the server for test!")
})
app.use("/", (req, res) => {
    res.send("Hello world")
})

app.listen(7777, () => {
    console.log("Server is successfully listening on port ", 7777);
})