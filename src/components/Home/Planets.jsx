import React,{useEffect}  from 'react';
import {useSelector, useDispatch } from 'react-redux';

import { fetchPlanets } from '../../redux/Actions/planetActions'

import starship1 from '../../assets/starship-1.jpg';
import starship2 from '../../assets/starship-2.jpg';
import starship3 from '../../assets/starship-3.jpg';
import starship4 from '../../assets/starship-4.jpg';
import starship5 from '../../assets/starship-5.jpg';
import StarshipUtils from './StarshipUtils';
import PlanetsUtils from './PlanetsUtils';






const Planets = () => {

    const planetsData = useSelector(state => state.planets);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPlanets());
    },[dispatch])

    //const allCharacter = charactersData.characters.results;
    console.log(planetsData.planets)


    return (
        <div id="container">
                   <h2>Popular Planets </h2> 
                    <div className="parent">
                        
                      {planetsData.loading ? <h2>Loading</h2> : planetsData.error ? <h2>Network error</h2> :

                       planetsData.planets && planetsData.planets.results &&
                       planetsData.planets.results.map(planet =>
                            <PlanetsUtils 
                                key={planet.name}
                                name={planet.name}
                                model={planet.climate}
                                population={planet.population}
                            />
                        )
                      
                      }

                      



                    </div>
        </div>
    )
}

export default Planets;
