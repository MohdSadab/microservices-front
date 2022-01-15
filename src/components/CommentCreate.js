import React, { useState } from 'react'
import Input from './Input'
import axios from 'axios';

const CommentCreate = ({id}) => {
    const [Comment,setComment]=useState('');

    const submitHandler=async ()=>{
        try {
            const {data}= await axios.post(`http://localhost:5001/post/${id}/comment`,{content:Comment});
            console.log(data,">>>")
            setComment('')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='container h-100'>
                <Input value={Comment} onChangeHandler={({target:{value}})=>setComment(value)} label={'Title'}/>
                <button className="btn-primary btn mt-1" onClick={submitHandler}>
                    Submit
                </button>
        </div>
    )
}

export default CommentCreate
