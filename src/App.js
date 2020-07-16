import React from 'react';
import {useSelector, useDispatch } from 'react-redux'
import { ADD_NUMBER, SUBSTRACT_NUMBER } from './redux/Types';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LandingPage from './components/Home/LandingPage';
import Planets from './components/Home/Planets';

function App() {
  
    // const dispatch = useDispatch();
    // const number = useSelector(state =>state.number.number);
    

  return (
    <div className="App">
      
    {/* <div>
       <h2> status - {number}</h2>
        <button onClick={()=>dispatch({type:ADD_NUMBER})}>add number</button>
        <button onClick={()=>dispatch({type:SUBSTRACT_NUMBER})}>sustract number</button>
    </div> */}
  
      <BrowserRouter>

        <LandingPage />
        <Switch>

           <Route path="/planets" exact component={Planets} />
        </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
