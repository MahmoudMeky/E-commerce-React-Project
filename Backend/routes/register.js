const { Router } = require("express");

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = Router();

const User = require("../models/user");

router.post("/", async (req, res, next) => {
    console.log("POST Method Used @ Register")


    try {
        // Get user input
        const { name, email, password } = req.body;
        // Validate user input
        if (!(email && password && name)) {
            res.status(400).send("All input is required");

        } else {
            // check if user already exist
            // Validate if user exist in our database
            const oldUser = await User.findOne({ email: email ? email.toLowerCase() : email });

            if (oldUser) {
                return res.status(409).send("User Already Exist. Please Login");
            }

            //Encrypt user password
            encryptedPassword = await bcrypt.hash(password, 10);

            // Create user in our database
            const user = await User.create({
                name,
                email: email.toLowerCase(), // sanitize: convert email to lowercase
                password: encryptedPassword
            });

            // Create token
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );
            // save user token
            user.token = token;

            // return new user
            res.status(201).json(user);

        }


    } catch (err) {
        console.log(err);
    }
    // Our register logic ends here


})


module.exports = router;