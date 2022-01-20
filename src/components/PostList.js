import axios from 'axios';
import React, { useEffect } from 'react'
import Post from './Post';

const PostList = ({setPosts,posts}) => {

    useEffect(()=>{
        async function getPosts(){

            try {
                const {data}= await axios.get('http://posts.com/posts');
                setPosts(data);
            } catch (error) {
                console.log(error);
            }

        }

        getPosts();
    },[setPosts])
    return (
        <div className='row mt-5'>
            <h4 className='col-12 m-2'> Posts </h4>
            {Object.values(posts)?.map(({id,title,comments})=>(
               <Post id={id} title={title} key={id} comments={comments}/>
            ))
            }
        </div>
    )
}

export default PostList
