const User = require("../models/user");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({ path: 'config/config.env' });
const jwtSecret = process.env.JWT_SECRET

async function postuserdata(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);

    try {
        const userData = await User.create(req.body);
        return res.status(201).send({ userData, success: true });
    } catch (error) {
        console.log(error);
        return res.json({ success: false });
    }
}

async function loginuser(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email;
    try {
        let userData = await User.findOne({ email });
        if (!userData) {
            return res
                .status(400)
                .json({ error: "Try logging with correct credentials" });
        }

        const passwordCompare = await bcrypt.compare(req.body.password, userData.password);
        // if (req.body.password !== userData.password) {
        if (!passwordCompare) {
            return res
                .status(400)
                .json({ error: "Try logging with correct credentials" });
        }

        const data = {
            user: {
                id: userData.id
            }
        }

        const authToken = jwt.sign(data, jwtSecret);
        return res.status(200).json({ success: true, authToken: authToken });

        //const decode = jwt.verify(authToken, jwtSecret);
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
}

async function authenticateToken(req, res, next) {
    const authToken = req.header('Authorization');

    if (!authToken) {
        return res.status(401).json({ message: 'Missing token' });
    }

    // Verify the JWT token and extract the payload (userId)
    jwt.verify(authToken, jwtSecret, (err, data) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        // Attach the user ID from the data to the request object for future use
        req.user.id = data.user.id;
        next();
    });
}

async function getuserdata(req, res) {
    try {
        const user = await User.find();
        return res.json({
            user,
        });
    } catch (error) {
        console.log(error);
        return res.json({ success: false });
    }
}

module.exports = { postuserdata, getuserdata, loginuser, authenticateToken };
