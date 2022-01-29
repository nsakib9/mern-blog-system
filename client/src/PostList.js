import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostItem from './PostItem';

function PostList(){
    const [postdata,setpostdata] = useState([])
    useEffect(() => {
        axios.get('/api/post/getposts').then(
            res => {
                console.log(res.data)
                setpostdata(res.data)
            }
        ).catch(err => {
            console.log(err)
        })
    }, [])
    const postlist =  postdata.map( post => {
        return(
            <div className="row justify-content-center">
                <PostItem post={post} />
            </div>
        )
    })
    return(
        <div>
            <h1> This is Post List </h1>
            {postlist}
        </div>
    )
}

export default PostList;