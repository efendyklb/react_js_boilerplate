import React, { Component } from 'react';
import {
    FormBuilder,
    FieldGroup,
    FieldControl,
    Validators,
 } from "react-reactive-form";

const TextInput = ({ handler, touched, hasError, meta }) => (
  <div>
    <input placeholder='enter text' {...handler()}/>
    <span>
        {touched
        && hasError("required")
        && `${meta.label} is required`}
    </span>
  </div>  
)
export default class Form extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            loginForm : FormBuilder.group({
                username: ["", Validators.required],
                password: ["", Validators.required],
                repassword: ["", Validators.required],
                rememberMe: false
            })
        }

        this.handleReset = this.handleReset.bind(this);
        
    }
    
    handleReset() {
        this.state.loginForm.reset();
    }

    handleSubmit(e, me) { //khusus form harus di override functionya pake gaya arrow 6
        e.preventDefault();
        console.log("Form values", me.state.loginForm.value);
    }

    render() {
        return (
              <FieldGroup
                control={this.state.loginForm}
                render={({ get, invalid }) => (
                  <form onSubmit={(e) => this.handleSubmit(e, this)}>

                    <FieldControl
                      name="username"
                      render={TextInput}
                      meta={{ label: "Username" }}
                    />

                    <FieldControl
                      name="password"
                      render={TextInput}
                      meta={{ label: "Password" }}
                    />

                    <FieldControl
                      name="repassword"
                      render={TextInput}
                      meta={{ label: "Retype Password" }}
                    />

                    <FieldControl
                      name="rememberMe"
                      render={({handler}) => (
                        <div>
                          <input {...handler("checkbox")}/>
                        </div>
                      )}
                    />
                    <button
                      type="button"
                      onClick={() => this.handleReset()}
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      disabled={invalid}
                    >
                      Submit
                    </button>
                  </form>
                )}
              />
        );
    }
}