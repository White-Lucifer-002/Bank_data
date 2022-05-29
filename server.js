// const express = require("express");
// const body = require("body-parser")

// const app = express()
// app.listen(5000,()=>{
//     console()
// })


const client = require('./connectivity.js')
const express = require('express');
const app = express();

var port_number = process.env.PORT || 3000;

app.listen(port_number,()=>{
    console.log(port_number)
    console.log("Server running...")
});

client.connect();

app.get('/api/branch', (req, res)=>{
    let query = res.body;
    client.query(`SELECT * FROM bank_branches WHERE branch LIKE '${req.query.q}%' ORDER BY ifsc LIMIT ${req.query.limit} OFFSET ${req.query.offset};`, (err, result)=>{
        if(!err){
            res.send({"branches":result.rows});
        }
    });
    client.end;
})

app.get('/', (req, res)=>{
            res.send("Hello");
})


app.get('/api/search', (req, res)=>{
    let query = res.body;
    client.query(`SELECT * FROM bank_branches WHERE branch LIKE '%${req.query.q}%' OR city ILIKE '%${req.query.q}%' OR ifsc ILIKE '%${req.query.q}%' or district ILike '%${req.query.q}%' or state ILike '%${req.query.q}%'  order by ifsc LIMIT ${req.query.limit} OFFSET ${req.query.offset};`, (err, result)=>{
        if(!err){
            res.send({"branches":result.rows});
        }
    });
    client.end;
})