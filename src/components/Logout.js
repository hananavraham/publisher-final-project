import React, { Component } from 'react';
import { GoogleLogin }      from 'react-google-login';
import { GoogleLogout }     from 'react-google-login';
import { Route, Redirect }  from 'react-router';

class Logout extends Component {

  constructor() {
        super();
        this.state = { isAuthenticated: false, user: null, token: ''};
    }

    logout = () => {  
        console.log('logout');
         this.setState({isAuthenticated: false, token: '', user: null});
        localStorage.setItem('myId', null);
    };
  

 

  
    render() {
        return ( <button  onClick={this.logout}>Logout</button>);
        }
}

export default Logout;