import React, {Component} from 'react';

class ListItems extends Component{
    state = {
        listItems: ["item1", "item2", "items3", "items4"]
    }
    render(){
        return(
            <div>
                {this.state.listItems.map((item) => {
                    return <h2>{item}</h2>
                })}
            </div>
        )
    }
}
export default ListItems;