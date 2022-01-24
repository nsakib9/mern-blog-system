const express = require('express')
const app = express()
const dbfile = require('./conn')


app.get('/', (req, res)=> {
    res.end('Hello world with node')
})

app.listen(4040, function(){
    console.log("Node and Express Server Start")
})