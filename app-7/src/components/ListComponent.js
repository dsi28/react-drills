import React from 'react';
import Todo from './TodoComponent';
//displays list of Todo items
const TodoList = ({list}) => {
    return(
        list.map((item,i) => {
            return <Todo key={i} todo={item} />
        })
    );
}
export default TodoList;