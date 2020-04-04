import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import '../container/App.css';
import Header from '../components/Header.js';

class Otp extends React.Component {

    handleOkButton = () => {

        this.props.history.push('/');
    }

    render(){
        return(
          <div className="background">
           <Header titleText="Otp Confirmation" isLoggedIn={true} history={this.props.history} />
            <div className='otp'>
                <p>OTP is {this.props.match.params.otpNumber}</p>
                <button onClick={this.handleOkButton}>Ok</button>
            </div>
          </div>

        )
    }

}

export default Otp;
