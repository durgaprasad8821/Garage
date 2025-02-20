const express = require('express');
const dotenv = require('dotenv');
const DBconnection = require('./modules/Database.js');
const cors = require('cors');



dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());




app.listen(process.env.PORT , ()=>{
    console.log("Port running on the 5000")
})