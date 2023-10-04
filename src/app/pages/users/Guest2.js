
import React from 'react'
import Nav from '../../partials/Nav';
import Ourplans from './Ourplans';
import Footer from '../../partials/Footer';
import Cards from './Cards';
import Subscribe from './Subscribe';
import Searcher from "../users/Searcher";



const Guest2 = () => {
  return (
    <>
      <Nav />
      <Searcher/>
      <Ourplans />
      <Cards />
      <Subscribe/>
      <Footer />

      
    
      
    </>
  );
};

export default Guest2;
