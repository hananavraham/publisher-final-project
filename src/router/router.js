import React from "react";
import { Route }  from "react-router-dom";
import SideNavMenu from '../Components/SideNavMenu';
import Login from "../Components/login";
import LibraryCard from '../Components/LibraryCard';


const ReactRouter =()=>{
    return (
        <React.Fragment>
            <SideNavMenu/>
            <Route exact path="/" component={LibraryCard}/>
        </React.Fragment>
    );
}

export default ReactRouter;