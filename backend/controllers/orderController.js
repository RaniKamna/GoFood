const Order = require('../models/orders');

async function postorderdata(req,res){
    let data = req.body.order_data;
    await data.splice(0, 0, { order_date: req.body.order_date });
    //console.log("1231242343242354", req.body.email);

    //if email not exisitng in db then create: else: InsertMany()
    let eId = await Order.findOne({ email: req.body.email });
    //console.log(eId);
    if (eId === null) {
        try {
            //console.log(data);
            //console.log("1231242343242354", req.body.email);
            await Order.create({
                email: req.body.email,
                order_data: [data],
            }).then(() => {
                res.json({ success: true });
            });
        } catch (error) {
            console.log(error.message);
            res.send("Server Error", error.message);
        }
    } else {
        try {
            await Order.findOneAndUpdate(
                { email: req.body.email },
                { $push: { order_data: data } }
            ).then(() => {
                res.json({ success: true });
            });
        } catch (error) {
            console.log(error.message);
            res.send("Server Error", error.message);
        }
    }
}

async function postmyorderdata(req,res){
     try {
        //console.log(req.body.email);
        let eId = await Order.findOne({ email: req.body.email });
        //console.log(eId)
        res.json({ orderData: eId });
    } catch (error) {
        res.send("Error", error.message);
    }
}

module.exports = {postorderdata, postmyorderdata}