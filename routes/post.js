const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const schema = mongoose.Schema
const postschema = new schema({
    title: String,
    imageurl: String,
    description: String,
    postid: String
})


router.get('/test', (req, res) =>{
    res.end("Hellow Router")
})

const PostModel = mongoose.model('posts', postschema)
router.post('/addnewpost', (req, res) => {
    const newpost = new PostModel({
    title: req.body.title,
    imageurl: req.body.imageurl,
    description: req.body.description,
    postid: req.body.postid
    })
    newpost.save(function(err){
        if(!err){
            res.send("Post added successfully")
        }else{
            res.send(err)
        }
    })

})


router.get('/getposts', (req, res) => {
    PostModel.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

router.post('/getpostdata', (req, res)=>{
    PostModel.find({postid:req.body.postid},
        (docs, err)=> {
            if(!err){
                res.send(docs)
            }else{
                res.send(err)
            }
        })
})

router.post('/updatepost', (req, res)=> {
    PostModel.findOneAndUpdate({postid: req.body.postid}, {
        title: req.body.title,
    imageurl: req.body.imageurl,
    description: req.body.description 
    }), (err) => {
        if(!err){
            res.send('Post update success')
        }else{
            res.send(err)
        } 
    }
})

module.exports = router;