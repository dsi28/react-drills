import React from 'react';

const InputBox = (props) => {
    return (
        <form onSubmit={(e)=>props.submitInputBoxHandler(e)}>
            <input type="text" name="currentTodo" value={props.currentTodo} onChange={(e)=>props.addTodoHandler(e)}/>
            <input type="submit" value="add" />
        </form>
    )
}
export default InputBox;