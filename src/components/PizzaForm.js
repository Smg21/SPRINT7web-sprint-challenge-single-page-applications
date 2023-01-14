import React, { useState } from "react";
//import Form from "./components/Form";
import Form from "./Form";


function PizzaForm() {
  const [members, setMembers] = useState([]);
  const [values, setValues] = useState({ name: "", special: ""});

  const onSubmit = () => {
    setMembers([values, ...members]);
    setValues({ name: "", special:"" });
    
  }
  const onChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="PizzaForm">
      <h1>Build Your Pizza!!!</h1>
      <Form values={values} change={onChange} submit={onSubmit} />
      {members.map((member, idx) => {
        return (
          <div key={idx}>
           <h1>Name - {member.name}</h1>
            <br />
            <h1>Special Instructions - {member.special}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default PizzaForm;