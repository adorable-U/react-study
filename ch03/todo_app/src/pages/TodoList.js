import React from 'react';
import TodoRow from "@/pages/TodoRow";

const TodoList = () => {
    return (
       <ol className="lane">
           <TodoRow>리액트 마스터하기</TodoRow>
       </ol>
    );
};

export default TodoList;