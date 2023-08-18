const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: 'config/config.env' });

const mongoUri = process.env.DB_URI;

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoUri).then((data) => {
            console.log(`Mongodb connected with server`);
        });

        const fetchedDataPromise = mongoose.connection.db.collection('fooddatas').find({}).toArray();
        fetchedDataPromise
            .then((data) => {
                const fetchedDatafoodCategoryPromise = mongoose.connection.db.collection('foodcategories').find({}).toArray();
                fetchedDatafoodCategoryPromise
                    .then((catData) => {
                        global.foodcategory = catData;
                        global.fooddatas = data;
                    })
            })
            .catch((err) => {
                console.error(err);
            });
    } catch (err) {
        console.log('Error fetching data from MongoDB:', err);
    }
}
module.exports = mongoDB;