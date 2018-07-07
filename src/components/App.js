import React       from 'react';
import ReactRouter from '../router/ReactRouter';
import Header      from '../components/Header';  
class App extends React.Component{
 
  constructor (props) {
    super(props);

    this.state = {
      headerTitle: 'Log in'
    }

    this.sideNavDisplay = document.getElementById('sideNavMenu');
    this.getSideNavDisplayStatus = this.getSideNavDisplayStatus.bind(this);
    this.getShowSideNav = this.getShowSideNav.bind(this);
    this.displaySideNav = this.displaySideNav.bind(this);
    this.setHeaderTitle = this.setHeaderTitle.bind(this);
  }



  /* Get the display css of sideNavMenu from ReactRouter component*/
  getSideNavDisplayStatus(display){
    this.setState({sideNavDisplayStatus: display})
  }

  /* get show side nav function from ReactRout component and set the function as state*/
  getShowSideNav(show){
      this.setState({showSideNav: show})
  }

  /* Display the side nav , function the pass to aother conponents with the display functionality*/
  displaySideNav(){
    if(this.state.showSideNav){
      console.log('side nav show')
      this.state.showSideNav();
    }
  }

  /* Getting the title from li element in ReactRouter and set it as state for the Header component*/
  setHeaderTitle(headerTitle){
      this.setState({headerTitle:headerTitle})
  }

  render () {
    return (
      <div id="mainWrapper">
        <Header showSideNav={this.displaySideNav} title={this.state.headerTitle ? this.state.headerTitle : 'title'}/>
        <ReactRouter showSideNav={this.getShowSideNav} display={this.getSideNavDisplayStatus} setHeaderTitle={this.setHeaderTitle}/>
      </div>
    );
  }
 
}
 
export default App;