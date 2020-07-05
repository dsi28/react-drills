import React, {Component} from 'react';

class Box extends Component {

    render(){
        const {inputTextValue} = this.props;
        return(
            <div>
                <input onChange={(e)=>this.props.inputHandler(e)} type="text"/>
                {inputTextValue.length > 0 
                    ? <h3>{inputTextValue}</h3>
                    : <h3>Start Typing!</h3>
                }
            </div>
        )
    }
}
export default Box;