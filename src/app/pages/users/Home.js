import React from "react";
import BackgroundImg from "../../components/Background";
import Nav from "../../partials/Nav";
import Question from "../../components/Question";
import Footer from "../../partials/Footer";
import Card1 from "../../components/Card";
import AboutGuest from "../../components/About";
import Review from "../../components/Review";
const Home = () => {
  return (
    <>
      <Nav />
      <BackgroundImg />
      <AboutGuest />
      <Card1 />
      <Review />
      <Question />
      <Footer />
    </>
  );
};

export default Home;
