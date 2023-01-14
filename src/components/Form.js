import React from "react";
const Form = (props) => {
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    props.change(name, value);
 };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.submit();
  };
  return (
    <form onSubmit={handleSubmit}>

      <label>
        Name 
        <input
          placeholder="Enter Your Name Please"
          value={props.values.name}
          name="name"
          onChange={handleChange}
        />
      </label>
      <br />

        <label>
        Select Your Pizza Size! 
        <select 
        value = {props.values.size}
        onChange={handleChange}
        name="size"
        id="size-dropdown"
        >
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
            onChange = {handleChange}
            value = {props.values.Pepperoni}
            name = "Pepperoni"
            type = "radio"
            />
        </label>
        <br />

        <label>
            Pineapple
            <input 
            onChange = {handleChange}
            value = {props.values.Pineapple}
            name = "Pineapple"
            type = "radio"
            />
        </label>
        <br />

        <label>
            Extra Cheese
            <input 
            onChange = {handleChange}
            value = {props.values.Extra}
            name = "Extra"
            type = "radio"
            />
        </label>
        <br />

        <label>
            Sausage
            <input 
            onChange = {handleChange}
            value = {props.values.Sausage}
            name = "Sausage"
            type = "radio"
            />
        </label>
        <br />



      <label>
        <p>Special Instructions! </p>
        <input
          placeholder="Enter Special Instructions Here"
          value={props.values.special}
          name="special"
          onChange={handleChange}
        />
      </label>
      <br />

      <label> 
        
        Agree To The Terms And Conditions 

        <input 
        type="checkbox"
        name="check"
        value = {props.values.check}
        onChange = {handleChange}
        />
      </label>

      <br />

      <br />
      <input type="submit" value="Submit Order" id="Submit" />
    </form>
  );
};

export default Form;

