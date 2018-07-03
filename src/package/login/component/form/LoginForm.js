import React, { Component } from 'react'
import CarouselComponent from '../CarouselComponent'
import LoginApi from '../../../../services/apis/LoginApi'
import { TextInput } from "../../../../core/utils/TextInput"

import {
    FormBuilder,
    FieldGroup,
    FieldControl,
    Validators,
 } from "react-reactive-form";

class LoginForm extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            loginForm : FormBuilder.group({
                username: ["", Validators.mail],
                password: ["", Validators.required]
            }),
            isLoggedIn: false
        }

        this.post = this.post.bind(this);
    }

    handleSubmit(e, me) { //khusus form harus di override functionya pake gaya arrow 6
        e.preventDefault();

        this.post(me.state.loginForm.value)
    }

    post(value) {
        let postValue = JSON.stringify(value);
        LoginApi.login(postValue).then(function(res){
            if (res.status === 200) this.setState({isLoggedIn: res.data.status});
        }).catch(function(ex){
            console.log(ex);
        })
    }
    
    render() {
        return(
            (this.state.isLoggedIn) ?
            <div> Anda sudah login </div> : 
            <div className="p-full u-p-0">
                <div className="p-full__wrapper--full">
                    <CarouselComponent />
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
                        
                        <div className="c-form-group u-mb-20">
                            <button className="c-btn c-btn--primary" type="submit" disabled={invalid}>Masuk</button>
                        </div>
                      </form>
                    )}
                  />
                </div>
            </div>
        )
    }
}

export default LoginForm;