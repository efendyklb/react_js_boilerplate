
import React, { Component } from "react";
import logo from "../../../themes/v1/images/svg/hello.svg";
import {fetchData, fetchDone} from "../../../services/flux/action/HelloAction"
//import "./App.css";

import { connect } from "react-redux";

class App extends Component {
  render() {
    const { fetching, dog, onRequestDog, error } = this.props;
    const { data, isFetching, onFetchData, onFetchDone} = this.props;
    console.log(data);
    return (
      <div className="App">
        <header className="App-header">
          <img src={dog || logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dog Saga</h1>
        </header>

        {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={onRequestDog}>Request a Dog</button>
        )}

        {isFetching ? (
          <div>
            <label> Loading... </label>
            <button onClick={onFetchDone}>Click to complete</button>
          </div>
          
        ) : (
          <button onClick={onFetchData}>Request</button>
        )}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.helloReducer.fetching,
    dog: state.helloReducer.dog,
    error: state.helloReducer.error,
    //helloreducer2
    data: state.helloReducer2.data,
    isFetching: state.helloReducer2.isFetching,
    //history: state.helloReducer2.history
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: "API_CALL_REQUEST", obj: { name: 'triadi ganteng', dev: 'kece abis'} }),
    onFetchData: () => {dispatch(fetchData())},
    onFetchDone: () => {dispatch(fetchDone())} 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
