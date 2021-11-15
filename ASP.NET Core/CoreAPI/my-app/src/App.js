import logo from './logo.svg';
import './App.css';

import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import {About} from './About';
import {Contact} from './Contact';
import {Navigation} from './Navigation';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
     <h1 className="m-3 d-flex justify-content-center">
       Employee Database Management System
     </h1>
     <h4 className="m-3 d-flex justify-content-center">
       <marquee>We are a leading engineering consultancy and EPC company, delivering world-class projects for our clients across the globe</marquee>
     </h4>

     <Navigation/>

     <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/department' component={Department}/>
       <Route path='/employee' component={Employee}/>
       <Route path='/About' component={About}/>
       <Route path='/Contact' component={Contact}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
