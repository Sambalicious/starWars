import React from 'react';
import starship1 from '../../assets/starship-1.jpg';
import starship2 from '../../assets/starship-2.jpg';
import starship3 from '../../assets/starship-3.jpg';
import starship4 from '../../assets/starship-4.jpg';
import starship5 from '../../assets/starship-5.jpg';






const Starships = () => {
    return (
        <div id="container">
                   <h2>Popular starship </h2> 
                    <div className="parent">
                        
                        <div className="box">
                                    <div className="img-fix">
                                            <img src={starship1} alt="" />
                                        </div>
                                        <div className="text">
                                        <h4>Ghost</h4>
                                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, a placeat dolor neque recusandae necessitatibus numquam. Harum sunt itaque mollitia ea magni, porro, quae architecto corporis recusandae, animi optio quasi!</p>
                                    </div>
                                    <div className="btn-container">
                                <button>hello</button>
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
                                <div className="btn-container">
                                <button>hello</button>
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
                                <div className="btn-container">
                                <button>hello</button>
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
                                <div className="btn-container">
                                <button>hello</button>
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
                                <div className="btn-container">
                                <button>hello</button>
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
                                <div className="btn-container">
                                <button>hello</button>
                                </div>
                        </div>

                       



                    </div>
        </div>
    )
}

export default Starships
