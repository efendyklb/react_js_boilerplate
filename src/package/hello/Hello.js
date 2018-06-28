import React from 'react'
//import HelloRouter from './HelloRouter'
import { Link } from "react-router-dom";
//import Autocomplete  from "react-autocomplete";
//import { Chart, Axis, Series, Tooltip, Cursor, Line } from "react-charts";

export default class Hello extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            nama: "maulana",
            umur: 30
        }
    }

    componentDidMount() {
        console.log('tampilan sudah ready');
        this.setState({nama: "erhan"})
    }

    render() {
        
        return (
            <div>
                <Crot hello={this.state}/>
                    this is home page, <Link to = "/about">About</Link>

            </div>
        )
    }
}

class Crot extends React.Component {
    render() {
        console.log(this.props.hello)
        var {nama, umur} = this.props.hello
        return(
            <div>
                nama: {nama}
                umur: {umur}
                kelamin: waria
            </div>
        )
    }
}
/*
    if you want to declaration HelloRouter inside this file, example usage :
    <HelloRouter>
        <ul>
            <li>
                <Link to = "/about">About</Link>
            </li>
        </ul>
    </HelloRouter>
*/