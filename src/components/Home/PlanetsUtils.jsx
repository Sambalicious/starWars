import React from 'react'
import img from '../../assets/starship-1.jpg';

const PlanetsUtils = ({name,model,population}) => {
    return (
    
             <div className="box">
                            <div className="box-flex">
                                <div className="img-fix">
                                    <img src={img}  alt="avatar"/>
                                </div>
                                <div className="text">
                                    <h3>{name} </h3>
                                    <h6>Son of Anakim</h6>
                                    <h5>Birth Year: {model} </h5>
                                    <h5>Gender : {population}</h5>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis amet in aspernatur quis temporibus exercitationem laboriosam reiciendis? Laudantium tempore nemo reiciendis aliquid magnam mollitia ad accusantium blanditiis officia, repellat nobis.</p>
                                </div>

                            </div>
             </div>   
    
    )
}

export default PlanetsUtils
