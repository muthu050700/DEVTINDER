const express = require("express");

const app = express();

app.use("/user", (req, res) => {
    res.send("THis will be called for all the HTTP Methods")
})

app.get("/user", (req, res) => {
    res.send({
        firstName: "Muthu",
        lastName: "Kumar"
    })
})

app.post("/user", (req, res) => {
    res.send("Data saved successgully to the database");
})

app.delete("/user", (req, res) => {
    res.send("User deleted successfully")
})

app.listen(7777, () => {
    console.log("Server is successfully listening on port ", 7777);
})