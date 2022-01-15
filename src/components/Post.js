import React from 'react'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList';

const Post = ({id,title,comments}) => {


    return (
           <div className="col-sm-12 col-3 col-md-3 col-lg-3 m-2">
               <div class="card">
                <h5 class="card-header">{title}</h5>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <CommentCreate id={id}/>
                    <CommentList comments={comments} />
                </div>
                </div>
           </div>
    )
}

export default Post
