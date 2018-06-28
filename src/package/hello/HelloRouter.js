import React from 'react'
import { HashRouter as Router, Route } from "react-router-dom";
import About from './page/About';
import Hello from './Hello';
import RedirectPage from './page/RedirectPage';
import Form from './page/Form';
import App from './page/App';

class HelloRouter extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    {this.props.children}
                    <GetListRouter/>
                </div>
            </Router>
        )
    }
}

const GetListRouter = () => (
    <div>
        <Route exact path="/" component={Hello} />
        <Route path = "/about" component = {About}/>
        <Route path = "/redirect" component = {RedirectPage}/>
        <Route path = "/form" component = {Form}/>
        <Route path = "/app" component = {App}/>
    </div>
);
    
export default HelloRouter;