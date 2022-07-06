require("dotenv").config();//to access ENV 
const connectDB=require("./config/database"); // Function to connect to DB ;
const express = require("express");

const cors = require('cors');

const {PORT}=process.env;

// Importing Routers
const UserRouter=require("./routes/user");
const RegisterRouter=require("./routes/register");
const LoginRouter=require("./routes/login");
const Authentication=require("./middleware/auth");

const app = express();

// Start HTTP Server
app.listen(PORT,(err)=>{
    if(!err) return console.log("Server Running @ localhost:"+PORT)
    console.log(err)
})

//  Enable CORS for All Connections
app.use(cors())


// Parse JSON 
app.use(express.json());

// Parse Form Data
app.use(express.urlencoded());

// Connect to DB
connectDB();

app.use("/user",UserRouter);

app.use("/register",RegisterRouter);


app.use("/login",LoginRouter);

app.use("/auth",Authentication);








