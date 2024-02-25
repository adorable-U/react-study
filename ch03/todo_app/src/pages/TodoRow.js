import React from 'react';

const TodoRow = (props) => {
    return (
        <li className="card">
            <header className="card-header">
                <p className="card-title">{props.children}</p>
            </header>
            <ul className="card-controls">
                <li>
                    <button className="card-control">변경</button>
                </li>
                <li>
                    <button className="card-control">삭제</button>
                </li>
            </ul>
        </li>
    )
}

export default TodoRow;