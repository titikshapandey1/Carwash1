import React from "react";
import Nav from "../../partials/Nav";
import Ourplans from "./Ourplans";
import Footer from "../../partials/Footer";
import Cards from "./Cards";
import Subscribe from "./Subscribe";
import Searcher from './Searcher';
import Question from '../../components/Question';
import Review from "../../components/Review";





const Guest2 = () => {
  return (
    <>
      <Nav />
      <Searcher/>
      <Ourplans />
      <Cards />
      <Subscribe/>
      <Review/>
      <Question/>
     
      <Footer />

      
    
      
    </>
  );
};

export default Guest2;
