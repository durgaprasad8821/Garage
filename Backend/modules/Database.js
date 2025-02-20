const mysql2 = require('mysql2');
const dotenv = require('dotenv')


dotenv.config();

const connection = mysql2.createConnection({
    host : process.env.database_url,
    user : process.env.user,
    password : process.env.password,
    database : process.env.database

});

connection.connect((error) =>{
    if(!error){
        console.log('DB is connected');
    }else{
        console.log('DB is not connected' , error.message);
    }
});


module.exports = connection


