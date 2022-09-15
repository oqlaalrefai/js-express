'use strict';
// it wil contain all endpoint or access point
const notFound = require('./handler/404') 
const ServerError = require('./handler/500')
const express = require('express')
const app = express()



app.get('/', (req,res)=>{
    res.status(200).send('hello world!')
})
app.get('/data', (req,res)=>{
    const output = {
        10:'even',
        15:'odd',
        time:'2022'
    }
    res.status(200).json(output)
})
app.get('/bad',(req,res,next)=>{
    next("error from bad end point")
})
// for middleware
app.use('*',notFound) // * to use it for all routes
app.use(ServerError)// without routes it mea return this error handler whatever the error is

function start(port){
    app.listen(port,()=> console.log(`Listening On Port ${port}`))
}
module.exports = {
    start : start, //you can type any name name you want
    app
}