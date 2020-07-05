import React, {Component} from 'react';
import Box from './Box';

class InputBox extends Component {
    state = {
        inputText: ""
    }
    inputHandler = (e) => {
        this.setState({inputText: e.target.value});
    }
    render(){
        return(
            <Box inputTextValue={this.state.inputText} inputHandler={this.inputHandler}/>
        )
    }
}
export default InputBox;