import React from "react";
import { render } from 'react-dom';
//import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/Home";
import App from './components/App';

//ReactDOM.render(<App />, document.getElementById("root"));
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'

render(
    <Router>
    < App />
    
    </Router>
    , document.querySelector('#root')
  )