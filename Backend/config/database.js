require('dotenv').config()

const mongoose = require("mongoose");

const { DB_URL } = process.env;

const connect = () => {
    mongoose.connect(DB_URL)
    .then(() => {
        console.log("Connected to DB Successfully!")
    })
    .catch(() => {
        console.log("DB Connection Error!")
    })
}

module.exports=connect;