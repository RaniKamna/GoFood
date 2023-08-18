const FoodData = require('../models/fooddata');
const { body, validationResult } = require("express-validator");

async function postfooddata(req, res) {
    try {
        const data = await FoodData.create(req.body);
        return res.status(201).send({ data, success: true });
    } catch (error) {
        console.log(error);
        return res.json({ success: false });
    }
}

async function getfooddata(req, res) {
    try {
        const data = await FoodData.find();
        return res.json({ data });
    } catch (error) {
        console.log(error);
        return res.json({ success: false });
    }
}

module.exports = { postfooddata, getfooddata };