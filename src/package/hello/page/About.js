import React from 'react'
import { Link } from "react-router-dom";

/** toast */

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HelloGrid from '../component/grid/HelloGrid'

export default class About extends React.Component {
    render() {
          const style = {
            width: '100%'
          };

        return(
            
            <div style={style}>
            
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnVisibilityChange
              draggable
              pauseOnHover
            />
                This is about <Link to = "/">Home</Link>, <br />
                <Link to = "/redirect">Redirect</Link>,  <br />
                <Link to = "/form">Form Example</Link>, <br />
                <Link to = "/app">Dog Lovers </Link> <br />
                
                  <HelloGrid />
                
                <ToastContainer />

            </div>
            
        );
    }
}

// dok: https://react-table.js.org/#/story/readme