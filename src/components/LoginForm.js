import React from 'react';
import '../container/App.css';
import {withRouter} from 'react-router-dom';

class Login extends React.Component {

    handleClick = () => {
        this.props.history.push('/Home');
    }

    render(){
    return(
        <div className='login'>
            <form>
                <input type='text' placeholder='Enter user name' /><br />
                <input type='password' placeholder='Enter password'/><br />
                <button className='button' type='submit' onClick={this.handleClick}>Submit</button>
            </form>
        </div>
    )

}
}
export default withRouter(Login);