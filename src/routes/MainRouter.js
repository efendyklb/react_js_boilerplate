import React from 'react'
import { HashRouter as Router } from "react-router-dom";
import { HelloListRouter } from "../package/hello/HelloRouter"

class MainRouter extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    {this.props.children}
                    <HelloListRouter/>
                </div>
            </Router>
        )
    }
}

export default MainRouter