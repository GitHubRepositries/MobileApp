import React, { Component } from 'react';
import {  ThemeProvider,
  makeStyles,
  createMuiTheme, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import '../container/App.css';
import Header from '../components/Header.js';
import Button from '@material-ui/core/Button';


const useStyles = (theme) => ({
  root: {
    '& label.Mui-focused': {
      color: '#004d40',
    },
    '& .MuiInput-root': {
      '&fieldset': {
        borderBottomColor: '#004d40',
      },
      '&:hover fieldset': {
        borderBottomColor: '#ff5722',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ff5722',
      },
    },
  },
  margin: {
    margin: theme.spacing(2)
  },
  margin1: {
    align: "center",
    margin: theme.spacing(2)
  },
  inputLabel: {
    color: '#004d40',
  }
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#004d40'
    }
  },
});

class LoginForm extends Component {

constructor(props){
super(props);
this.state = {
  username : "",
  password : "",
  errors : {
    username: "",
    password: "",
  },
};
}

validateForm = () => {
  let valid = true;
  const { username , password } = this.state;
  let currentErrors = Object.assign({}, this.state.errors);
  currentErrors.username = username.length == 0 ? 'Username should not be blank':'';
  currentErrors.password = password.length == 0 ? 'Password should not be blank':'';
  this.setState({ errors: currentErrors });
  Object.keys(currentErrors).map((val) => {
     let data = currentErrors[val];
     if(data.length > 0){
        valid=false;
     }
  }
  );
  return valid;

}

handleClick = (event) => {
  event.preventDefault();
  if(this.validateForm()){
      console.log("Login successful");
      //alert("Login successful");
      this.props.history.push('/home');
  }
  else {
    alert("Login Invalid");
  }
}

render() {

     const { classes } = this.props;
     const { username, password } = this.state;
  return(
     <div className="loginbackground">
         <div className="container">
           <ThemeProvider theme={theme}>
           <Header titleText="Fizzy Bank - Login" isLoggedIn={false} />
           <Grid className={classes.root}
              container
              spacing={0}
              direction="row"
              justify="center"
              align="center"
              alignItems="center"
              style={{ minHeight: '80vh' }}>
              <Grid item xs={3}>
                <TextField
                className={classes.margin}
                label="Username"
                InputLabelProps={{
                  classes: {
                    root: classes.inputLabel,
                  }
                }}
                onChange = {(newValue) => this.setState({username:newValue})} />
                <TextField
                className={classes.margin}
                label="Password"
                disableUnderline={false}
                type="password"
                InputLabelProps={{
                  classes: {
                    root: classes.inputLabel,
                  }
                }}
                onChange = {(newValue) => this.setState({password:newValue})} />
                <br/>
                <Button variant="contained" color="primary" className={classes.margin1} onClick={(event) => this.handleClick(event)}>
                  Submit
                </Button>
                </Grid>
           </Grid>
            </ThemeProvider>
         </div>
     </div>
  );
}

}

export default withStyles(useStyles)(LoginForm);
