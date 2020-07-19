import React from 'react';
import {Form, FormGroup, Input, Button } from 'reactstrap';

//takes props.currentTodo, props.updateCurrentTodo
const InputBox = (props) => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.addCurrentTodoToList();
        console.log('submited');
    }
    const onChangeHandler = (e) => {
        props.updateCurrentTodo(e.target.value);
        console.log('todo updated');
    }
    return(
        <>
            <Form onSubmit={(e) => onSubmitHandler(e)}>
                <FormGroup row>
                    <Input type="text"
                        name="inputBox"
                        value={props.currentTodo}
                        onChange={(e) => onChangeHandler(e)}
                    />
                    <Button type="submit">Add!</Button>
                </FormGroup>
            </Form>
        </>
    )
}
export default InputBox;