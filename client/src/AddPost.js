import React from 'react';
import PostItem from './PostItem';

function AddPost(){
    return(
        <div>
            <div className="row justify-content-center">
            <div className="col-md-6">
            <input type="text" placeholder='Title' className='m-2 form-control' />
            <input type="text" placeholder='Image Url' className='m-2 form-control' />
            <textarea class="form-control m-2 " cols="30" rows="3"></textarea>
            <button className="btn btn-success">Add Post</button>
            </div>
            </div>
        </div>
    )
}

export default AddPost;