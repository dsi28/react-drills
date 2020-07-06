import React, {Component} from 'react';

class Box extends Component{
    render(){
        return(
            <div>
                <input value={this.props.inputBoxValue} onChange={(e) => this.props.inputBoxHandler(e)}/>
            </div>
        )
    }
}

export default Box;