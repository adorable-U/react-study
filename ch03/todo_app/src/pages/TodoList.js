import React, {useState} from 'react';
import TodoAdd from "@/pages/TodoAdd";

const initialState = [
    {id: 1, task: "리액트 마스터하기"},
];
const TodoList = () => {
    const [todos, setTodos] = useState(initialState);

    const insertTodo = (task) => {
        setTodos(prevTodos => (
            [...prevTodos,
                {id: Math.floor(Math.random()*100) + 2, task}
            ]
        ));
    }

    const updateTodo = (id, task) => {
        setTodos(prevTodos => (
            prevTodos.map(prev => prev.id === id ? {...prev, task} : prev)
        ));
    }

    const deleteTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(prev => prev.id !== id));
    }

    return (
       <ol className="lane">
           <TodoAdd inserTodo={insertTodo}>리액트 마스터하기</TodoAdd>
       </ol>
    );
};

export default TodoList;