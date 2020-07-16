import React from 'react';
import starship1 from '../../assets/starship-1.jpg';
import starship2 from '../../assets/starship-2.jpg';
import starship3 from '../../assets/starship-3.jpg';
import starship4 from '../../assets/starship-4.jpg';
import starship5 from '../../assets/starship-5.jpg';
import starship6 from '../../assets/starship-6.jpg';





const Planets = () => {
    return (
        <div id="container">
                   <h2 className="planets-title">Popular starship </h2> 
                    <div className="parent">
                        
                        <div className="box">
                            <div>
                                    <div className="img-fix">
                                            <img src={starship1} alt="" />
                                        </div>
                                        <div className="text">
                                        <h4>Ghost</h4>
                                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, a placeat dolor neque recusandae necessitatibus numquam. Harum sunt itaque mollitia ea magni, porro, quae architecto corporis recusandae, animi optio quasi!</p>
                                    </div>
                            </div>
                               
                        </div>

                        <div className="box">
                                <div className="img-fix">
                                    <img src={starship2} alt=""/>
                                </div>
                                <div className="text">
                                <h4>Ghost</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, a placeat dolor neque recusandae necessitatibus numquam. Harum sunt itaque mollitia ea magni, porro, quae architecto corporis recusandae, animi optio quasi!</p>
                                </div>
                        </div>

                        <div className="box">
                                <div className="img-fix">
                                    <img src={starship3} alt=""/>
                                </div>
                                <div className="text">
                                <h4>Ghost</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, a placeat dolor neque recusandae necessitatibus numquam. Harum sunt itaque mollitia ea magni, porro, quae architecto corporis recusandae, animi optio quasi!</p>
                                </div>
                        </div>


                        <div className="box">
                                <div className="img-fix">
                                    <img src={starship4} alt=""/>
                                </div>
                                <div className="text">
                                <h4>Ghost</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, a placeat dolor neque recusandae necessitatibus numquam. Harum sunt itaque mollitia ea magni, porro, quae architecto corporis recusandae, animi optio quasi!</p>
                                </div>
                        </div>


                        <div className="box">
                                <div className="img-fix">
                                    <img src={starship5} alt=""/>
                                </div>
                                <div className="text">
                                <h4>Ghost</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, a placeat dolor neque recusandae necessitatibus numquam. Harum sunt itaque mollitia ea magni, porro, quae architecto corporis recusandae, animi optio quasi!</p>
                                </div>
                        </div>

                        <div className="box">
                                <div className="img-fix">
                                    <img src="https://res.cloudinary.com/dev-sam/image/upload/c_scale,h_195/v1594909044/pclej16njeymn20sp3pp.jpg" alt=""/>
                                </div>
                                <div className="text">
                                <h4>Ghost</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, a placeat dolor neque recusandae necessitatibus numquam. Harum sunt itaque mollitia ea magni, porro, quae architecto corporis recusandae, animi optio quasi!</p>
                                </div>
                        </div>

                       



                    </div>
        </div>
    )
}

export default Planets
