const FoodCategory = require("../models/foodcategory");

async function postfoodcategory(req, res) {
    try {
        const data = await FoodCategory.create(req.body);
        return res.status(201).send({ data, success: true });
    } catch (error) {
        console.log(error);
        return res.json({ success: false });
    }
}

async function getfoodcategory(req, res) {
    try {
        const data = await FoodCategory.find();
        return res.json({ data });
        //return res.json({ data, data1: global.foodcategory });
    } catch (error) {
        console.log(error);
        return res.json({ success: false });
    }

    // both will work

    // try {
    //     res.send([global.foodcategory])
    // } catch (err) {
    //     console.log(err);
    //     res.send("SERver err")
    // }
}

module.exports = { postfoodcategory, getfoodcategory };
