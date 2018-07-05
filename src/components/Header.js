import React from 'react';
import SideNavMenu     from './SideNavMenu'

class Header extends React.Component{
 
  constructor (props) {
    super(props);


    this.displeySideNav = this.displeySideNav.bind(this);
  }
 
  displeySideNav(){
    console.log('ready');
    var sideNavDisplay = document.getElementById('sideNavMenu');
    sideNavDisplay.style.display = 'none';
    if(sideNavDisplay.style.display == 'none'){
            sideNavDisplay.style.display = 'block';
    }
  }

  render () {
    return (

      <header>
          <nav id="navHeader">
              <div id="headerHamBtn" onClick={this.displeySideNav}>
                  <span ></span>
                  <span ></span>
                  <span ></span>
              </div>
                 <div>{ this.props.title}</div>
              <div id="currentSelectionIcone">
              </div>
          </nav>
      </header>
    );
  }
 
}
 
export default Header;