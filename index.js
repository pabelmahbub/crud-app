const express = require('express');
const app = express();
const mysql = require('mysql')

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'password',
    database:'crud-database'

});

app.get("/",(req,res) =>{
const sqlInsert = "INSERT INTO movie_review(movieName, movieReview) VALUES('joo','awesome');"
db.query(sqlInsert,(err,result ) =>{
    res.send("Hello    world");
})
    
});

app.listen(3001,()=>{
    console.log('running 3001');
});