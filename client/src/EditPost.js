import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios'
import {useEffect } from 'react'

function EditPost(){
    const params = useParams()
    const [title, settitle] = useState('')
    const [imageurl, setimageurl] = useState('')
    const [description, setdescription] = useState('')

    useEffect(()=> {
axios.post('/api/post/getpostdata', {postid: params.postid}).then(res=> {
    console.log(res.data[0])
    const postdata = res.data[0]
    settitle(postdata.title)
    setimageurl(postdata.imageurl)
    setdescription(postdata.description)
}).catch(err=> {
    console.log(err)
})
    })

    function editpost(){
        const updatepost = {
            title: title,
            imageurl: imageurl,
            description: description,
            postid: params.postid
        }
        axios.post('/api/post/updatepost', updatepost).then(res=> {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
    return(
        <div>


<div className="row justify-content-center">
            <div className="col-md-6">
            <input value={title} onChange={(e) => {settitle(e.target.value)}} type="text" placeholder='Title' className='m-2 form-control' />
            <input value={imageurl}  onChange={(e) => {setimageurl(e.target.value)}} type="text" placeholder='Image Url' className='m-2 form-control' />
            <textarea value={description}  onChange={(e) => {setdescription(e.target.value)}} className="form-control m-2 " cols="30" rows="3"></textarea>
            <button onClick={editpost} className="btn btn-success">Update Post</button>
            </div>
            </div>
            
          
        </div>
    )
}

export default EditPost;