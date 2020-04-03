import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import '../container/App.css';

class Otp extends React.Component {

    handleOkButton = () => {

        this.props.history.push('/');
    }

    render(){
        return(
            <BrowserRouter >
            <div className='otp'>
                <p>OTP is {this.props.match.params.otpNumber}</p>
                <button onClick={this.handleOkButton}>Ok</button>
                </div>
            </BrowserRouter>
        )
    }

}

export default Otp;