import React, {useState} from 'react';
import TodoForm from './TodoForm';

// type 지정하기
type TodoProps = {
    todo : {
        id : number,
        content : string,
        state : boolean
    }
    onDelete : (id:number) => void
    onComplete : (id:number) => void
    onUpdate : (value:string, id:number) => void
}

const Todo = (props : TodoProps) => {
    const [NowValue, setNowValue] = useState(props.todo.content); // 받아온 todo 내용(수정할 경우)
    const [editState, setEditState] = useState(false); // 수정하는 경우

    if (editState) {
        return (
            <>
                <TodoForm
                    value = {NowValue}
                    onChange={setNowValue}
                    onClick = {()=>{
                        props.onUpdate(NowValue, props.todo.id);
                        setEditState(false);
                    }}
                    onCancel={()=>{
                        setNowValue(props.todo.content);
                        setEditState(false);
                    }}
                />
            </>
        )
    }

    if (props.todo.state) {
        // 완료한 경우
        return (
            <>
                <input type="checkbox" onClick={() => props.onComplete(props.todo.id)}></input>
                <span style={{ textDecoration: "line-through" }}>{props.todo.content}</span>
                <button onClick={() => props.onDelete(props.todo.id)}>삭제</button>
            </>
        )
    }
    else {
        return (
            <>
                <input type="checkbox" onClick={() => props.onComplete(props.todo.id)}></input>
                <span onClick={() => setEditState(true)}>{props.todo.content}</span>
                <button onClick={() => props.onDelete(props.todo.id)}>삭제</button>
            </>
        )
    }
}

export default Todo;