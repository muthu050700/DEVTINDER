const express = require("express");

const app = express();

const PORT = 7777;


app.use("/user", (req, res) => {
    res.send("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaat")
})

app.get("/user", (req, res) => {
    res.send({ firstName: "Muthu", lastName: "Kumaran" })
})

app.post("/user", (req, res) => {
    res.send("The data successfully saved to the database")
})

app.delete("/user", (req, res) => {
    res.send("Deleted successfully")
})

app.patch("/user", (req, res) => {
    res.send("Updated successfully")
})

app.listen(PORT, () => {
    console.log("Successfully Connected to the port", PORT);
})