import React from 'react'

const Input = ({ value, label, onChangeHandler }) => {
    return (
        <>
            <label for="exampleFormControlInput1" class="form-label">{label}</label>
            <input type="text" 
                class="form-control" 
                id="exampleFormControlInput1"
                placeholder="please enter "
                value={value}
                onChange={onChangeHandler} />
        </>
    )
}

export default Input
