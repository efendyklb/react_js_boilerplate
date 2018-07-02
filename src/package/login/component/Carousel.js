import React, { Component } from 'react'

var resetImage = require('../../../themes/v1/images/pages/access/reset-password.png'),
signupImage = require('../../../themes/v1/images/pages/access/signup.png'),
signinImage = require('../../../themes/v1/images/pages/access/signin.png');

class Carousel extends Component {
    render() {
        return(
            <div className="p-full__side--image" id="jc-carousel-signup">
                <div style={{backgroundImage: `url(${resetImage})`}}>
                <div className="p-full__carousel-wrapper">
                    <div className="p-full__carousel-content">
                    <p className="u-cl-white c-reg-21">... Midtrans manages employee time off, claims, and HR admins with this super-easy HR software!</p>
                    <p className="u-cl-white u-mt-10">Diera Yosefina Hartono, Midtrans</p>
                    </div>
                </div>
                </div>
                <div style={{backgroundImage: `url(${signupImage})`}}>
                <div className="p-full__carousel-wrapper">
                    <div className="p-full__carousel-content">
                    <p className="u-cl-white c-reg-21">... Midtrans manages employee time off, claims, and HR admins with this super-easy HR software!</p>
                    <p className="u-cl-white u-mt-10">Diera Yosefina Hartono, Midtrans</p>
                    </div>
                </div>
                </div>
                <div style={{backgroundImage: `url(${signinImage})`}}>
                <div className="p-full__carousel-wrapper">
                    <div className="p-full__carousel-content">
                    <p className="u-cl-white c-reg-21">... Midtrans manages employee time off, claims, and HR admins with this super-easy HR software!</p>
                    <p className="u-cl-white u-mt-10">Diera Yosefina Hartono, Midtrans</p>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Carousel