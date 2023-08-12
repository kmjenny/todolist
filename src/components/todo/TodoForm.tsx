import React, {useState} from 'react';

type TodoFormProps = {
    value : string,
    onChange: (value:string) => void,
    onClick:() => void,
    onCancel?:() => void
}

const handleInputChange = (event:any) => {
    event.preventDefault();
    const inputValue = event.target.inputField.value;
    return inputValue;
}

const TodoForm = (props : TodoFormProps) => {
    return (
        <>
            <input
                value = {props.value}
                type = "text"
                name = "inputField"
                onChange={(e)=> props.onChange(e.target.value)}
                >
            </input>
            <button onClick={props.onClick}>저장</button>
            <button onClick={props.onCancel}>취소</button>
        </>
    )
}

export default TodoForm;