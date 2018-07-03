import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

var resetImage = require('../../../themes/v1/images/pages/access/reset-password.png'),
signupImage = require('../../../themes/v1/images/pages/access/signup.png'),
signinImage = require('../../../themes/v1/images/pages/access/signin.png');

class CarouselComponent extends Component {
    render() {
        return(
            <div className="p-full__side--image .slick-initialized" id="jc-carousel-signup" >
                <Carousel 
                    autoPlay={true}
                    showThumbs={false}
                    showArrows={false}>     
                    
                    <div>
                        <img src={resetImage} height={800} style={{position: "relative"}} />
                        <p className="legend">
                        ... Midtrans manages employee time off, claims, and HR admins with this super-easy HR software!
                        <br/> Diera Yosefina Hartono, Midtrans
                        </p>
                    </div>

                    <div>
                        <img src={signupImage} height={800} style={{position: "relative"}}/>
                        <p className="legend">
                        ... Midtrans manages employee time off, claims, and HR admins with this super-easy HR software!
                        <br/> Diera Yosefina Hartono, Midtrans
                        </p>
                    </div>
                    <div>
                        <img src={signinImage}height={800} style={{position: "relative"}}/>
                        <p className="legend">
                        ... Midtrans manages employee time off, claims, and HR admins with this super-easy HR software!
                        <br/> Diera Yosefina Hartono, Midtrans
                        </p>
                    </div>
                    
                </Carousel>
            </div>
        )
    }
}

export default CarouselComponent