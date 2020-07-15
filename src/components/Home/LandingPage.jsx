import React from 'react';
import Particles from 'react-particles-js'

const LandingPage = () => {
    return (

        <div id="home">
            <div className="particles-container">
             <div className="particles">
             <Particles
                className="particles"
                    params={{
                        "particles": {
                            "number": {
                                "value": 160,
                                "density": {
                                    "enable": false
                                }
                            },
                            "size": {
                                "value": 3,
                                "random": true,
                                "anim": {
                                    "speed": 4,
                                    "size_min": 0.3
                                }
                            },
                            "line_linked": {
                                "enable": false
                            },
                            "move": {
                                "random": true,
                                "speed": 1,
                                "direction": "top",
                                "out_mode": "out"
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "bubble"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            },
                            "modes": {
                                "bubble": {
                                    "distance": 250,
                                    "duration": 2,
                                    "size": 0,
                                    "opacity": 0
                                },
                                "repulse": {
                                    "distance": 400,
                                    "duration": 4
                                }
                            }
                        }
                    }} 
                    />
            <div className="logo">
                <img src="https://res.cloudinary.com/dev-sam/image/upload/c_scale,w_114/v1594769062/nqihtehm0vijefmkakwc.png" alt="logo" />
            </div>
            <div className="container">
                <div className="center">
                    <div className="fix">
                        <img src="https://res.cloudinary.com/dev-sam/image/upload/c_scale,w_114/v1594769062/nqihtehm0vijefmkakwc.png" alt="logo" />
                        <h2> Directory </h2> 
                    </div>
                    <hr/>
                    <p className="block">Find your favourite Character, Films, Species,<br></br> Starship and Planets </p>
                    <div className="search">
                        <input type="text" placeholder="Enter a search term"/>
                    </div>
                </div>
            </div>
            
                    </div>
    </div></div>
    )
}

export default LandingPage
