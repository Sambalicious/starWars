import React, { useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import character1 from '../assets/character-1.jpg';
import character2 from '../assets/character-2.jpg';
import character3 from '../assets/character-3.jpg';
import character4 from '../assets/character-4.jpg';
import { fetchCharacters } from '../redux/Actions/characterActions';
import CharacterUtils from './Home/CharacterUtils'

const Characters = ({}) => {

    const charactersData = useSelector(state => state.characters);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchCharacters());
    },[])

    
    console.log(charactersData.characters.results)
    
    return (
        <div id="characters">
                 <h2>Popular characters </h2> 
                    <div className="parent">

                {
                   charactersData.loading ? <h2>Loading</h2> : charactersData.error ? <h2>{charactersData.error} </h2>:(
                   Array.isArray(charactersData.characters) && charactersData.characters && charactersData.characters.results.map((character)=>
                        //    <CharacterUtils name={character.name} img={character1} />
                        console.log(character)
                           ) )
                   
                }
                      

                       





                    </div>
        </div>
    )
}

export default Characters
