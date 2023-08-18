const express = require("express");
const { postfooddata, getfooddata } = require("../controllers/fooddataController");

const fooddataRouter = express.Router();

fooddataRouter.post('/createfooddata', postfooddata);
fooddataRouter.get('/getfooddata', getfooddata);

module.exports = fooddataRouter;