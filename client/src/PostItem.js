import React from 'react';
import { Link } from 'react-router-dom';

function PostItem({post}){
    return(
        <div>
           <div className="col-md-8">
               <h1>{post.title}</h1>
               <img src={post.imageurl} alt="" className="img-fluid" />
               <p>{post.description}</p>

               <Link to={`/edit/${post.postid}`}>
                   <li className='btn btn-primary'>Edit</li>
               </Link>
           </div>
        </div>
    )
}

export default PostItem;