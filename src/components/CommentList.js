import React from 'react'

const CommentList = ({comments}) => {
    return (
        <ul class="list-group mt-5">
            {comments?.map(({id,content})=>(
                <li class="list-group-item">{content}</li>
            ))
            }            
        </ul>
    )
}

export default CommentList
