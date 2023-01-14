import React, { useState, useEffect } from 'react'
import {Route, Link, Switch} from 'react-router-dom';
import Home from './Home'
import PizzaForm from './PizzaForm'

export default function App(props) {
     return (
      <div className='App'>
        <nav>
          <h1 className='store-header'>BloomTech Pizza</h1>
          <div className='nav-links'>
            <Link to="/">HOME</Link>
            <Link to = "/PizzaForm">PIZZA</Link>
  
          </div>
        </nav>
      </div>
    )
  }
  