import axios from "axios";
import React, { useState } from "react";
import {Link} from 'react-router-dom';

const Form = () => {
  const [order, setOrder] = useState({name:"", size:"", toppings: [], special:"", check: ""});

  const postOrder =() => {
   axios({
      method: 'post',
      url:'https://reqres.in/api/orders',
      data: order
    })
  };

const showErrorMessage = () => {
  if (order.name && order.name.length<2){
    return (
      <p>name must be at least 2 characters</p>
    );
  }
};
  
  return (
    <form id="pizza-form">
      <label>
        Name 
        <input
          placeholder="Enter Your Name Please"
          value={order.name}
          name="name"
          onChange={(evt) => setOrder({...order, name: evt.currentTarget.value})}
          id="name-input"
        />
      </label>
      {showErrorMessage()}
      <br />
      <label>
        Select Your Pizza Size! 
        <select 
          value = {order.size}
          onChange={(evt) => setOrder({...order, size: evt.currentTarget.value})}
          name="size"
          id="size-dropdown"
        >
          <option value ="0">Select-Size</option>
          <option value="1">Small</option>
          <option value="2">Medium</option>
          <option value="3">Large</option>
        </select>
      </label>
      <br />
        <p> Choose A Topping! </p>
        <label>
          Pepperoni
          <input 
            onChange = {(evt) => setOrder({...order, toppings: [...order.toppings, evt.currentTarget.name]})}
            name = "Pepperoni"
            type = "checkbox"
            />
        </label>
        <br />
        <label>
          Pineapple
          <input 
            onChange = {(evt)=> setOrder({...order, toppings: [...order.toppings, evt.currentTarget.name]})}
            name = "Pineapple"
            type = "checkbox"
            />
        </label>
        <br />
        <label>
          Extra Cheese
            <input 
              onChange = {(evt)=> setOrder({...order, toppings: [...order.toppings, evt.currentTarget.name]})}
              name = "Extra"
              type = "checkbox"
            />
        </label>
        <br />
        <label>
          Sausage
            <input 
              onChange = {(evt)=> setOrder({...order, toppings: [...order.toppings, evt.currentTarget.name]})}
              name = "Sausage"
              type = "checkbox"
            />
        </label>
        <br />
        <label>
        <p>Special Instructions! </p>
        <input
          placeholder="Enter Special Instructions Here"
          onChange={(evt) => setOrder({...order, special: evt.currentTarget.value})}
          name="special"
          id="special-text"
          value={order.special}
        />
        </label>
      <br />
      <label> 
        Agree To The Terms And Conditions 
        <input 
          type = "checkbox"
          name="check"
          value ="check"
          id="checked" 
          onChange = {(evt)=> setOrder({...order, check: evt.currentTarget.name})}
        />
      </label>
      <br />
      <br />
      <button onClick={() => {postOrder()}}>
        <Link to="/congrats" id="order-button" >Add To Order</Link>
      </button>
    </form>
  );
};




export default Form;
