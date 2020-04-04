import React from 'react';
import Home from '../components/Home';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import AmountConfirmation from '../components/AmountConfirmation';
import Login from '../components/LoginForm'
import Otp from '../components/Otp';
import Error from '../components/Error';

class App extends React.Component{

    render(){
        return(
            <BrowserRouter>
                <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/home' exact component={Home} />
                <Route path='/Amount:balance/:AccountNo' exact component={AmountConfirmation} />
                <Route path='/Otp:otpNumber' exact component={Otp} />
                <Route path='/Error:balance' exact component={Error} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
