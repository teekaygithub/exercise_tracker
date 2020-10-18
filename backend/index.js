const express = require('express');
// const exerciseRouter = require("routes/routes");

const app = express();
const PORT = 5000;

// app.use("/", exerciseRouter);

app.get("/", (req,res) => {
    res.status(200).send("Exercise Tracker App: server running!");
})

app.listen(PORT, () => console.log("Server running on port ${PORT}"));