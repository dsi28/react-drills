import React, { Component } from 'react';

class Login extends Component{
    state = {
        username: "",
        password: ""
    }
    submitHandler = (e)=>{
        e.preventDefault();// stops browser from refreshing
        alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    }
    onInputChangeHandler = (e)=>{
        //https://reactjs.org/docs/forms.html#handling-multiple-inputs
        this.setState({
          [e.target.name]: e.target.value //input name must be the same as the state name
        });
    }

    render(){
        return(
            <div>
                <form>
                    <label htmlFor="username">User</label>
                    <input type="username" id="username" name="username" value={this.state.username} onChange={(e)=>this.onInputChangeHandler(e)}/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={this.state.password} onChange={(e)=>this.onInputChangeHandler(e)}/>
                    <input type="submit" value="Go!" onClick={(e)=>this.submitHandler(e)}/>
                </form>
            </div>
        )
    }
}
export default Login;