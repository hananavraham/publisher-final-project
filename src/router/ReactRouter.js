import React                                    from "react";
import { GoogleLogin }                          from 'react-google-login';
import {BrowserRouter as Router ,Link ,NavLink} from 'react-router-dom';
import Route                                    from 'react-router-dom/Route';
import LibraryCard                              from '../components/LibraryCard';
import Profile                                  from '../components/profile/Profile';
import Messages                                 from '../components/Messages';
import Book                                     from '../components/Book';
import Login                                    from '../components/Login';
import ReadingBook                              from '../components/ReadingBook';
import Logout                                   from '../components/Logout';


class ReactRouter extends React.Component{
    constructor (props) {
    super(props);

        this.showSideNav = this.showSideNav.bind(this);
        this.hideSideNav = this.hideSideNav.bind(this);
    }  


    componentDidMount(){
        var sideNavDisplay = document.getElementById('sideNavMenu');
        sideNavDisplay.style.display = 'none';

        /* Passing to App component state-> the display css of side nav */
        this.props.display(sideNavDisplay.style.display);

        /* Passing to App componet The function showSideNav from this(ReactRouter component)*/
        this.props.showSideNav(this.showSideNav)
    }


    /* Showing the sideNav and update state on the App Component*/
    showSideNav(){
        var sideNavDisplay = document.getElementById('sideNavMenu');
        sideNavDisplay.style.display = 'block';
        this.props.display(sideNavDisplay.style.display);
    }

     /* Hide the sideNav and update state on the App Component + assign the title for the header*/
    hideSideNav(e){
        var sideNavDisplay = document.getElementById('sideNavMenu');
        if(sideNavDisplay.style.display == 'block'){
            sideNavDisplay.style.display = 'none';
            this.props.display(sideNavDisplay.style.display);
            this.props.setHeaderTitle(e.target.innerText);
        };
    }



    render(){
        return (
            <Router>
            <div>
                 <nav id="sideNavMenu">
                    <div id="sideMenuHamBtn" onClick={this.hideSideNav}>
                        <span ></span>
                        <span ></span>
                        <span ></span>
                    </div>
                    <div className="logo"></div>
                        <ul id="sideNavLinkUl">
                            <li><NavLink onClick={(e)=>{this.hideSideNav(e)}} to='/Login'>log in</NavLink></li>
                            <li><NavLink onClick={(e)=>{this.hideSideNav(e)}} to='/librarycard'>library card</NavLink></li>
                            <li><NavLink onClick={(e)=>{this.hideSideNav(e)}} to='/profile'>profile</NavLink></li>
                            <li><NavLink onClick={(e)=>{this.hideSideNav(e)}} to='/Messages'>messages</NavLink></li>
                            <li><NavLink to='/'>browse</NavLink></li>
                            <li><NavLink onClick={(e)=>{this.hideSideNav(e)}} to='/Logout'>Log Out</NavLink></li>
                        </ul>
                      
                     </nav>
                       <React.Fragment>
                            <Route path='/Login' exact component={Login}></Route>
                            <Route path='/librarycard' exact  component={LibraryCard}></Route>
                            <Route path='/profile' exact   render={(props) => <Profile test={'test'} isAuthed={true} />}></Route>
                            <Route path='/Messages' exact  component={Messages}></Route>
                            <Route path='/ReadingBook' exact  component={ReadingBook}></Route>
                            <Route path='/Book' exact  component={Book}></Route>
                            <Route path='/Logout' exact  component={Logout}></Route>
                        </React.Fragment>
                     </div>
            </Router>
        );
    }
}

export default ReactRouter;