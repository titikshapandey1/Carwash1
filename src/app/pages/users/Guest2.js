<<<<<<< HEAD
import React from "react";
import Nav from "../../partials/Nav";
import Ourplans from "./Ourplans";
import Footer from "../../partials/Footer";
import Cards from "./Cards";
=======
import React from 'react'
import Nav from '../../partials/Nav';
import Ourplans from './Ourplans';
import Footer from '../../partials/Footer';
import Cards from './Cards';
import Subscribe from './Subscribe';

>>>>>>> 4c47701d298d4a5fd3fb171ea9e65a52f1985dc8

const Guest2 = () => {
  return (
    <>
      <Nav />
      <Searcher/>
      <Ourplans />
      <Cards />
      <Footer />
=======
      <Nav/>
      <Ourplans/>
    <Cards/>
    <Subscribe/>
      <Footer/> 
>>>>>>> 4c47701d298d4a5fd3fb171ea9e65a52f1985dc8
    </>
  );
};

export default Guest2;
