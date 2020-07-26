import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'; // set up router so users can be sent to the correct location
import Details from '../components/Details';
import Home from '../components/Home';
import SignUp from '../components/Signup';

//(3 step) set switch and routes. EXACT is key for routes that have the same begining of paths
export default(
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/details" component={Details}/>
        <Route path="/signup" component={SignUp}/>
    </Switch>
)