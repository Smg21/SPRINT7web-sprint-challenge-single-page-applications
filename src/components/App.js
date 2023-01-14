import React from 'react'
import {Route, Link, Switch} from 'react-router-dom';
import Home from './Home'
import PizzaForm from './PizzaForm'

export default function App(props) {
     return (
      <div className='App'>
        <nav>
          <h1 className='pizza-header'>BloomTech Pizza</h1>
          <div className='nav-links'>
            <Link to="/">HOME</Link>
            <Link to = "/PizzaForm">PIZZA</Link>
  
          </div>
        </nav>
        <Switch>

    <Route path = "/PizzaForm">
        <PizzaForm />
    </Route>
    
    <Route path="/">
      <Home />
    </Route>
    
    </Switch>
      </div>
    )
  }
  