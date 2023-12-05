import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../../partials/Nav";
import Ourplans from "../../components/Ourplans";
import Footer from "../../partials/Footer";
import Cards from "../../components/Cards";
import Subscribe from "./Subscribe";
import Searcher from "../../components/Searcher";
import Question from "../../components/Question";
import Review from "../../components/Review";
import { useLocation } from "react-router-dom";

const Services = () => {
  const location = useLocation();
  const { state } = location;
  const selectedService = state ? state.servicetype : "";
  const selectedCar = state ? state.carType : "";
  return (
    <>
      <Nav />
      <Searcher selectedService={selectedService} selectedCar={selectedCar} />
      <Ourplans />
      <Cards />
      <Subscribe />
      <Review />
      <Question />
      <Footer />
    </>
  );
};

export default Services;
