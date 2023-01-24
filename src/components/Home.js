
import React from "react";
import PizzaForm from './PizzaForm'
import {Route, Link, Switch} from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className='home-wrapper'>
      <div className='home-photo'>
        <img
            className='home-image'
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1672825%2Fpexels-photo-1672825.png%3Fauto%3Dcompress%26cs%3Dtinysrgb%26fit%3Dcrop%26h%3D627%26w%3D1200&f=1&nofb=1&ipt=9f48f11234e7e6fdd503b4304142318c3d76e0e0aface173c30ee132ce612661&ipo=images'
            alt=''
            />
      </div>
      <div className='button-pizza'>
      <button className='pizza-button'>
        <Link to = "/pizza" className='pizzas-link' id="order-pizza" >  Make Your Pizza! </Link>
      </button>
      <Switch>
    <Route path = "/pizza">
        <PizzaForm />
    </Route>
    </Switch>
      </div>
      </div>
    </>
  );
};

export default Home;