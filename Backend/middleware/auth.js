const { Router } = require("express");
const jwt = require("jsonwebtoken");
const router = Router();
const { TOKEN_KEY } = process.env;

router.post("/", async function (req, res, next) {
    const token = req.headers["access-token"];

    if (!token) {
        return res.status(403).send(false);
    }

    try {
        const checkToken = await jwt.verify(token, TOKEN_KEY);
        // req.user = checkToken;
        // console.log("#########New");
        // console.log(checkToken);
    } catch (error) {
        return res.status(401).send(false);
    }
    return res.status(200).send(true);
    // next()   
})

module.exports = router;
