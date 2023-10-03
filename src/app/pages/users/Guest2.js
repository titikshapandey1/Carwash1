import React from 'react'
import Nav from '../../partials/Nav';
import Ourplans from './Ourplans';
import Footer from '../../partials/Footer';
import Cards from './Cards';
import Searcher from './Searcher';
import Subscribe from './Subscribe';






const Guest2 = () => {
  return (
    <>
      <Nav/>
      <Searcher/>
      <Ourplans/>
    <Cards/>
<Subscribe/>
      <Footer/> 
    </>
  )
}

export default Guest2;