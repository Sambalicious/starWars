import React from 'react';
import starship1 from '../../assets/starship-1.jpg';

const StarshipUtils = ({name, model, capacity}) => {
    return (
        <div className="box">
        <div className="img-fix">
                <img src={starship1} alt="" />
            </div>
            <div className="text">
            <h4>Name : {name} </h4>
            <h4>Model : {model} </h4>
            <h4>Cargo Capacity : {capacity} </h4>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, a placeat dolor neque recusandae necessitatibus numquam. Harum sunt itaque mollitia ea magni, porro, quae architecto corporis recusandae, animi optio quasi!</p>
        </div>
        <div className="btn-container">
    <button>hello</button>
    </div>   
</div>
    )
}

export default StarshipUtils
