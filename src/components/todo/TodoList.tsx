import React, {useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = ()=> {
    const [goals, setGoals] = useState([{id:1, content:"투두리스트 만들기", state:false}]);
    const [nowId, setNowId] = useState(2);
    const [editingId, setEditingId] = useState(null);
    const [editValue, setEditValue] = useState("");
    const [value, setValue] = useState("");

    // 투두리스트 추가하기
    const AddGoal = () => {
        const newGoalItem = {id:nowId, content:value, state:false};
        setNowId(nowId+1);
        const updateGoals = [...goals, newGoalItem];
        setGoals(updateGoals);
    }

    // 투두리스트 완료하기
    const ClickCheckbox = (id:number) => {
        const updatedGoals = goals.map(goals => (goals.id === id ? {...goals, state:!goals.state}:goals));
        setGoals(updatedGoals);
    }

    // 투두리스트 삭제하기
    const DeleteGoal = (id:number) => {
        const deleteGoalItem = goals.filter(goals=>goals.id!==id);
        setGoals(deleteGoalItem);
    }

    // 투두리스트 수정하기
    const UpdateGoal = (value:string, id:number) => {
        const updateGoalItem = {id : id, content: value, state:false};
        const updatedGoals = goals.map(goals => (goals.id === id ? updateGoalItem : goals));
        setGoals(updatedGoals);
        setEditingId(null);
        setEditValue("");
    }

    return (
        <>
            <ul>
                { goals.map((goal) => (
                    <li key={goal.id}>
                        <Todo
                            todo={goal}
                            onDelete = {DeleteGoal}
                            onComplete = {ClickCheckbox}
                            onUpdate = {UpdateGoal}
                        />
                    </li>
                ))}
            </ul>
            <TodoForm
                value = {value}
                onChange = {setValue}
                onClick = {AddGoal}/>
        </>
    )

}

export default TodoList;