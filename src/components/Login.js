import React, { Component } from 'react';
import { GoogleLogin }      from 'react-google-login';
import { GoogleLogout }      from 'react-google-login';
import { Route, Redirect }  from 'react-router';
class Login extends Component {

    constructor() {
        super();
        this.state = { isAuthenticated: false, user: null, token: ''};
    }

    logout = () => {
         this.setState({isAuthenticated: false, token: '', user: null});
        localStorage.setItem('googleId', null);
    };
  

    googleResponse = (e) => {
        console.log(e)
        localStorage.setItem('googleId', e.googleId);
        console.log(localStorage.getItem('googleId'));
        this.setState({isAuthenticated: true , token:e.tokenId , user:e , userId:e.googleId})

    };

    onFailure = (error) => {
      alert(error);
    }


    
    render() {
    
        if (this.state.isAuthenticated &&
            localStorage.getItem('googleId') != null){
            return (<Redirect to={{
                        pathname: '/LibraryCard',
                        store: this.context.store,
                        state: { referrer:{ user: localStorage.getItem('googleId')}}}} 
                        />
                );
        }
        
        return (  
                <div>
                    <GoogleLogin
                        clientId="431142717401-nogf6vt64266pnq75gpi51jhegl9qalv.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.googleResponse}
                        onFailure={this.googleResponse}
                    />  
                  
                </div>
            );
    }
}

export default Login;
