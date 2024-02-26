import React, {useState} from 'react';

const TodoRow = (props) => {
    // test
    const [isEditable, setEditable] = useState(false);
    return (
        <li className="card">
            <header className="card-header">
                <p className="card-title">{props.children}</p>
            </header>
            <ul className="card-controls">
                <li>
                    <button className="card-control" onClick={() => {setEditable(true)}}>변경</button>
                </li>
                <li>
                    <button className="card-control" onClick={() => {props.deleteTodo(props.todo.id)}}>삭제</button>
                </li>
            </ul>
        </li>
    )
}

export default TodoRow;