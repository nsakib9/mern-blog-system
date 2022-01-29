import React from 'react';

function PostItem({post}){
    return(
        <div>
           <div className="col-md-8">
               <h1>{post.title}</h1>
               <img src={post.imageurl} alt="" className="img-fluid" />
               <p>{post.description}</p>
           </div>
        </div>
    )
}

export default PostItem;