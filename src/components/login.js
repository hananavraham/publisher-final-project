import React           from 'react';
import { GoogleLogin } from 'react-google-login-component';
import SideNavMenu     from './SideNavMenu'
import Header          from './Header'


class Login extends React.Component{
 
  constructor (props, context) {
    super(props, context);
  }
 
  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var googleId = googleUser.getId();
    
    console.log({ googleId });
    console.log({accessToken: id_token});
    //anything else you want to do(save to localStorage)...
  }
 
  render () {
    return (
      <div>
        <div id="mainWrapper">
          <Header title={'log In'}/>
          <GoogleLogin socialId="yourClientID"
                     className="google-login"
                     scope="profile"
                     fetchBasicProfile={false}
                     responseHandler={this.responseGoogle}
                     buttonText="Login With Google"/>
        </div>
      </div>

    );
  }
 
}
 
export default Login;