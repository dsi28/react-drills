import React, {Component} from 'react';

class ListItems extends Component{
    render(){
        let {itemsList, inputBoxValue} = this.props;
        return itemsList.filter(item => {
            return item.includes(inputBoxValue);
        }).map(item => {
            return <h3>{item}</h3>
        });
    }
}
export default ListItems;