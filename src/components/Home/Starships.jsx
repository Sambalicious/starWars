import React,{useEffect}  from 'react';
import {useSelector, useDispatch } from 'react-redux';

import { fetchSpaceships } from '../../redux/Actions/spaceshipAction';
import starship1 from '../../assets/starship-1.jpg';
import starship2 from '../../assets/starship-2.jpg';
import starship3 from '../../assets/starship-3.jpg';
import starship4 from '../../assets/starship-4.jpg';
import starship5 from '../../assets/starship-5.jpg';
import StarshipUtils from './StarshipUtils';






const Starships = () => {

    const starshipsData = useSelector(state => state.starships);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchSpaceships());
    },[dispatch])

    //const allCharacter = charactersData.characters.results;
    console.log(starshipsData)


    return (
        <div id="container">
                   <h2>Popular starship </h2> 
                    <div className="parent">
                        
                      {starshipsData.loading ? <h2>Loading</h2> : starshipsData.error ? <h2>Network error</h2> :

                       starshipsData.starships && starshipsData.starships.results &&
                       starshipsData.starships.results.map(starship =>
                            <StarshipUtils 
                                key={starship.name}
                                name={starship.name}
                                model={starship.model}
                                capacity={starship.cargo_capacity}
                            />
                        )
                      
                      }

                      



                    </div>
        </div>
    )
}

export default Starships
