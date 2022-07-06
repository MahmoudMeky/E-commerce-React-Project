const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = Router();
const User = require("../models/user");

router.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            res.status(400).send("Please Enter all inputs");
        }

        const userDB = await User.findOne({ email });

        if (!userDB) {
            res.status(404).send("User not Found");
        }

        let passChecked = await bcrypt.compare(password, userDB.password);

        if (!passChecked) {
            res.status(404).send("Wrong Password");
        }

        // Creating Token
        const token = jwt.sign(
            { user_id: userDB._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "10d",
            }
        );

        // Save Token to User ON DB
        userDB.token = token;

        res.status(200).json(userDB.token);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
