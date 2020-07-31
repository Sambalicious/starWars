import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LandingPage from './components/Home/LandingPage';
import Planets from './components/Home/Planets'

import Starships from './components/Home/Starships';
import Characters from './components/Characters';
import StarshipDetails from './components/Home/StarshipDetails';

function App() {
   

  return (
    <div className="App">
      
   
      <BrowserRouter>

        <LandingPage />
        <Switch>
        <Route path="/starships/:id" exact component={StarshipDetails} />
           <Route path="/starships" exact component={Starships} />
           <Route path="/characters" exact component={Characters} />
           <Route path="/planets" exact component={Planets} />

        </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
