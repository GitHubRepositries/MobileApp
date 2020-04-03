import React from 'react';
import Accounts from './Accounts';
import {withRouter } from 'react-router-dom';
import {BrowserRouter } from 'react-router-dom';


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
        <BrowserRouter>
            <Accounts 
            details={this.state.accountDetails} 
            clicked={this.handleButtonClick} />
        </BrowserRouter>
    )
}
}

export default withRouter(Home)