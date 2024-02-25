import React from 'react';
import ImageButton from "@/pages/components/ImageButton";

const TodoAdd = (props) => {
    const handleInsertTodo = (e) => {
        e.preventDefault();
        props.insertTodo(e.target.task.value);
        e.target.reset();
    }
    return (
        <li className="card">
            <header className="cardHeader cardHeaderNew">
                <form className="cardTitleForm" onSubmit={handleInsertTodo}>
                    <input type="text" className="cardTitle cardTitleInput" placeholder="새로운 할일을 입력하세요" name="task" />
                    <ImageButton icon="plus" label="추가" />
                </form>
            </header>
        </li>
    );
}

export default TodoAdd;