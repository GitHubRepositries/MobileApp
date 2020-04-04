import React from 'react';
import '../container/App.css';
import Header from '../components/Header.js';

class Error extends React.Component {

    handleOkButton = () => {
        this.props.history.goBack();
    }

    handleCancelButton = () => {
        this.props.history.push('/');
    }

    render(){
        return(
          <div className="background">
           <Header titleText="Error Page" isLoggedIn={true} history={this.props.history} />
            <div className='error'>
                <p>Please enter valid amount lessthan {this.props.match.params.balance} </p>
                <button className='button' onClick={this.handleOkButton}>Ok</button>
                <button className='button' onClick={this.handleCancelButton}>Cancel</button>
            </div>
          </div>
        )
    }

}

export default Error;
