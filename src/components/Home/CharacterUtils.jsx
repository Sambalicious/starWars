import React from 'react';
import character1 from '../../assets/character-1.jpg';
import character4 from '../../assets/character-4.jpg';
import character3 from '../../assets/character-3.jpg'

const CharacterUtils = ({name, birthyear,gender}) => {
    return (
    
             <div className="box">
                            <div className="box-flex">
                                <div className="img-fix">
                                    <img src={gender === "male" ? character1 : gender==="female" ? character4 : character3}  alt="avatar"/>
                                </div>
                                <div className="text">
                                    <h3>{name} </h3>
                                    <h6>Son of Anakim</h6>
                                    <h5>Birth Year: {birthyear} </h5>
                                    <h5>Gender : {gender}</h5>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis amet in aspernatur quis temporibus exercitationem laboriosam reiciendis? Laudantium tempore nemo reiciendis aliquid magnam mollitia ad accusantium blanditiis officia, repellat nobis.</p>
                                </div>

                            </div>
             </div>   
    
    )
}

export default CharacterUtils
