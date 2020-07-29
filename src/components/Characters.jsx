import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import character1 from '../assets/character-1.jpg';
import character2 from '../assets/character-2.jpg';
import character3 from '../assets/character-3.jpg';
import character4 from '../assets/character-4.jpg';
import { fetchCharacters } from '../redux/Actions/characterActions';
import CharacterUtils from './Home/CharacterUtils';






const Characters = () => {

    const charactersData = useSelector(state => state.characters);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchCharacters());
    },[dispatch])

    const allCharacter = charactersData.characters.results;
    const [selectedOption, handleSelectedOption] = useState(null);
    const [selectedOptionView, handleSelectedOptionView] = useState(null);

    const options = [
        'male', 'female', 'robot'
      ];
      const optionsView = [
        'Grid', 'List'
      ];

        const filtered = selectedOption  ? allCharacter.filter(character=>character.gender === selectedOption.value): allCharacter;
      
    return (
        <div id="characters">
                 <h2>Popu<span className="bottom-rule">lar char</span>acters </h2> 
            <div className="inline-flex">
                <div className="inline-flex">
                    <h4 className="mr">Filter</h4>
                    <span>
                    <Dropdown options={options}
                        onChange={(item)=>handleSelectedOption(item)} 
                        value={selectedOption} 
                        placeholder="All" 
                    />
                    </span>
                    
                </div>

                <div className="inline-flex">
                    <h4 className="mr">View</h4>
                    <Dropdown options={optionsView}
                        onChange={(item)=>handleSelectedOptionView(console.log(item))} 
                        value={selectedOptionView} 
                        placeholder="Grid"
                    />
                </div>
            </div>
                 ;


                <div className="parent">

               
                { charactersData.loading ? <h2>Loading</h2> : charactersData.error ? <h2>Network Error</h2>:
                   charactersData.characters &&  filtered &&filtered.length !== 0  ? filtered.map(character=>
                       
                  
                        <CharacterUtils
                            key={character.name}
                         name={character.name}
                         birthyear={character.birth_year}
                         gender={character.gender}
                          img={character1} />
                       
                          
                    ): <p>No data for this Selection<</p>
                }
                      

                       



                      </div>

    </div>
    
    )
}

export default Characters
