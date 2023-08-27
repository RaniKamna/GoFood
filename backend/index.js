const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: 'config/config.env' });
const port = process.env.PORT;
const mongoDB = require('./config/db');
const userRouter = require('./routes/userRoute');
const foodcategoryRouter = require('./routes/foodcategoryRoute');
const fooddataRouter = require('./routes/fooddataRoute');
const orderdataRouter = require('./routes/orderdataRoute');

mongoDB();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
})
// app.use is a type of middleware 
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/api', userRouter);
app.use('/api', foodcategoryRouter);
app.use('/api', fooddataRouter);
app.use('/api', orderdataRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})