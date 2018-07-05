import React from 'react';
import { NavLink } from "react-router-dom";
 
class SideNavMenu extends React.Component{
 
  constructor (props) {
    super(props);

    this.hideSideNav = this.hideSideNav.bind(this);
  }
 
  hideSideNav(){
    console.log('ready');
    var sideNavDisplay = document.getElementById('sideNavMenu');
    if(sideNavDisplay.style.display == 'block'){
            sideNavDisplay.style.display = 'none';
    }
  }

  render () {
    return (
      <div>
          <nav id="sideNavMenu">
            <div id="sideMenuHamBtn" onClick={this.hideSideNav}>
                <span ></span>
                <span ></span>
                <span ></span>

            </div>
            <div className="logo"></div>
            <ul>
                <li><NavLink exact to="/"  >Get all books</NavLink></li>
                <li>profile</li>
                <li>message</li>
                <li>browse</li>
                <li>store</li>
                <li>reading club</li>
                <li>log out</li>
            </ul>
        </nav>
      </div>
    );
  }
 
}
 
export default SideNavMenu;