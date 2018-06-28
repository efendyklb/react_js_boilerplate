import React from 'react'
import { Redirect } from 'react-router-dom'

class RedirectPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            time: 5,
            timer: null
        }
    }

    componentDidMount() {

        this.setState({timer: setInterval(() => this.setState({ time: this.state.time - 1 }), 1000)});
    }

    render() {
        
        if (this.state.time <= 0) {
            
            clearInterval(this.state.timer);

            return <Redirect to="/"/>
        }

        return(
            <div>
                you will redirect in {this.state.time}
            </div>
        )
    }
}

export default RedirectPage;