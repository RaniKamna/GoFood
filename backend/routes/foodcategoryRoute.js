const express = require("express");
const { postfoodcategory, getfoodcategory } = require("../controllers/foodcategoryController");

const foodcategoryRouter = express.Router();

foodcategoryRouter.post('/createfoodcategory', postfoodcategory);
foodcategoryRouter.get('/getfoodcategory',getfoodcategory);

module.exports = foodcategoryRouter;