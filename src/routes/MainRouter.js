import React from 'react'
import { HashRouter as Router } from "react-router-dom";
import MainRouterHandling from "./MainRouterHandling"

//import { HelloListRouter } from "../package/hello/HelloRouter"
//<HelloListRouter/>

class MainRouter extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    {this.props.children}
                    <MainRouterHandling />
                </div>
            </Router>
        )
    }
}

export default MainRouter