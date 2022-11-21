import logo from './logo.svg';
import './App.css';

import {Home} from './Home';
import {Hospitals} from './Hospitals';
import {OrganDonate} from './OrganDonate';
import {Navigation} from './Navigation';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
     <h3 className="m-3 d-flex justify-content-center">
     Online Website For Donating Organs
     </h3>

     <Navigation/>

     <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/hospitals' component={Hospitals}/>
       <Route path='/organdonate' component={OrganDonate}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
