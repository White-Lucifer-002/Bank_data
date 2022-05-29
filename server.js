// const express = require("express");
// const body = require("body-parser")

// const app = express()
// app.listen(5000,()=>{
//     console()
// })


const client = require('./connectivity.js')
const express = require('express');
const app = express();

var port_number = process.env.PORT || 1234;

app.listen(port_number,()=>{
    console.log(port_number)
    console.log("Server running...")
});

client.connect();

app.get('/api/branch', (request, response)=>{
    client.query(`SELECT * FROM bank_branches WHERE branch LIKE '${request.query.q}%' ORDER BY ifsc LIMIT ${request.query.limit} OFFSET ${request.query.offset};`, (err, result)=>{
        if(!err){
            response.send({"branches":result.rows});
        }
    });
    client.end;
})

app.get('/', (request, response)=>{
            response.send("Hello");
})


app.get('/api/search', (request, response)=>{
    client.query(`SELECT * FROM bank_branches WHERE branch LIKE '%${request.query.q}%' OR city ILIKE '%${request.query.q}%' OR ifsc ILIKE '%${request.query.q}%' or district ILike '%${request.query.q}%' or state ILike '%${request.query.q}%'  order by ifsc LIMIT ${request.query.limit} OFFSET ${request.query.offset};`, (err, result)=>{
        if(!err){
            response.send({"branches":result.rows});
        }
    });
    client.end;
})