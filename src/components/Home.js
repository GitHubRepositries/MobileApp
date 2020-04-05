import React from 'react';
import Accounts from './Accounts';
import {withRouter } from 'react-router-dom';
import {BrowserRouter } from 'react-router-dom';
import Header from '../components/Header.js';

class Home extends React.Component {

    state={
        accountDetails:[
            {accountNumber:123654789,balance:258},
            {accountNumber:741258963,balance:654},
            {accountNumber:753159852,balance:759},
        ]
    }

handleButtonClick = index => {
   this.props.history.push('/Amount'+this.state.accountDetails[index].balance+'/'+this.state.accountDetails[index].accountNumber);
    }

render(){

    return(
       <div className="background">
        <Header titleText="Accounts Summary" isLoggedIn={true} history={this.props.history} />
            <Accounts
            details={this.state.accountDetails}
            clicked={this.handleButtonClick} />
        </div>
    )
}
}

export default withRouter(Home)
