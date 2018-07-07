import React from 'react';
/*import SideNavMenu     from './SideNavMenu'*/

class Header extends React.Component{
 
  constructor (props) {
    super(props);
  }
 

   

  render () {
    return (

      <header>
          <nav id="navHeader">
              <div id="headerHamBtn" onClick={this.props.showSideNav}>
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