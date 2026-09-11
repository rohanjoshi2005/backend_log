require("dotenv").config();

const mongoose = require("mongoose");

console.log("Mongo URI exists:", !!process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
        process.exit(0);
    })
    .catch((err) => {
        console.error("FULL ERROR:");
        console.error(err);
        process.exit(1);
    });