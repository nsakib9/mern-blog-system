const express = require('express')
const app = express()
const dbfile = require('./conn')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))


const postroute = require('./routes/post')
app.use('/api/post', postroute)

app.get('/', (req, res)=> {
    res.end('Hello world with node')
})


app.listen(4040, function(){
    console.log("Node and Express Server Start")
})