import React, { Component } from 'react';
import {  ThemeProvider,
  makeStyles,
  createMuiTheme, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',

  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#004d40'
    }
  },
});

class Header extends Component {

constructor(props){
  super(props);
  this.state = {
      titleText: this.props,
      isLoggedIn: this.props.isLoggedIn
  };
}

handleLogout = () => {
    this.props.history.push('/');
  }

render(){
     const { classes } = this.props;
  return (
      <div className={classes.root}>
      <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {this.props.titleText}
          </Typography>
          {this.state.isLoggedIn?
          (<Button color="inherit" onClick={this.handleLogout}>Logout</Button>):(<Button></Button>)}
        </Toolbar>
        </AppBar>
        </ThemeProvider>
      </div>
  );
}
}

export default withStyles(useStyles)(Header);
