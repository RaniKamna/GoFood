const express = require("express");
const orderdataRouter = express.Router();
const {
    postorderdata,
    postmyorderdata,
} = require("../controllers/orderController");

orderdataRouter.post("/orderData", postorderdata);

orderdataRouter.post("/myOrderData", postmyorderdata);

module.exports = orderdataRouter;
