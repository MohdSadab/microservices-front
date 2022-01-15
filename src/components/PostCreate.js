import React, { useState } from 'react'
import Input from './Input'
import axios from 'axios';

const PostCreate = ({setPosts}) => {
    const [post,setPost]=useState('');

    const submitHandler=async ()=>{
        try {
            const {data}= await axios.post('http://localhost:5000/post',{title:post});
            setPosts(data);
            setPost('')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='container h-100'>
                <Input value={post} onChangeHandler={({target:{value}})=>setPost(value)} label={'Title'}/>
                <button className="btn-primary btn mt-1" onClick={submitHandler}>
                    Submit
                </button>
        </div>
    )
}

export default PostCreate
