import React, {Component} from 'react';
import Box from './Box';
import ListItems from './ListItems';

class InputBox extends Component{
    state = {
        itemsList: ['computer', 'application', 'mouse', 'phone', 'app', 'car'],
        inputBoxValue: ''
    }
    inputBoxHandler= (e) => {
        this.setState({inputBoxValue: e.target.value});
    }
    render(){
        return(
            <div>
                <Box inputBoxHandler={this.inputBoxHandler} inputBoxValue={this.props.inputBoxValue}/>
                <ListItems itemsList={this.state.itemsList} inputBoxValue={this.state.inputBoxValue}/> 
            </div>
        )
    }
}
export default InputBox;