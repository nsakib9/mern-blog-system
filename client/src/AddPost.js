import axios from 'axios';
import React, { useState } from 'react';
// import PostItem from './PostItem';
import uniqid from 'uniqid';

function AddPost(){
    const [title, settitle] = useState('')
    const [imageurl, setimageurl] = useState('')
    const [description, setdescription] = useState('')

    function addpost() {
        var post = {
            title: title,
            imageurl: imageurl,
            description: description,
            postid: uniqid()
        }
        axios.post('/api/post/addnewpost', post).then(res=> {
            alert(res.data)
        }).then(err => {
            console.log(err)
        })
        console.log(post)

    }

    return(
        <div>
            <div className="row justify-content-center">
            <div className="col-md-6">
            <input value={title} onChange={(e) => {settitle(e.target.value)}} type="text" placeholder='Title' className='m-2 form-control' />
            <input value={imageurl}  onChange={(e) => {setimageurl(e.target.value)}} type="text" placeholder='Image Url' className='m-2 form-control' />
            <textarea value={description}  onChange={(e) => {setdescription(e.target.value)}} className="form-control m-2 " cols="30" rows="3"></textarea>
            <button onClick={addpost} className="btn btn-success">Add Post</button>
            </div>
            </div>
        </div>
    )
}

export default AddPost;