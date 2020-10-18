const express = require('express');
const exerciseRouter = require("./routes/routes");
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

mongoose.connect("mongodb+srv://fcc-tkato:0xAmusud33pfrY@cluster0.zkez3.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true})
        .catch(e => {
            console.error("Connection error: ", e);
        });

app.use("/", exerciseRouter);

// app.get("/", (req,res) => {
    // res.status(200).send("Exercise Tracker App: server running!");
// })

app.listen(PORT, () => console.log("Server running on port ${PORT}"));