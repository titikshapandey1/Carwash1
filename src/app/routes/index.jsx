import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

// import Searcher from "../components/Searcher";
// import BackgroundImg from "../components/Background";
// import PaymentOptions from "../components/Paymentoption";
// import AboutGuest from "../components/About";
// import Dryclean from "../components/Home/Dryclean";
// import Nav from "../partials/Nav";
// import Question from "../components/Question";
// import Footer from "../partials/Footer";
// import Rectanglefield from "../components/Rectanglefield";
// import Ourplan from "../components/Ourplan";
// import OurServices from "../components/OurServices";
// import Card1 from "../components/Card";
// import Review from "../components/Review";
// import Ourplans from "../components/Ourplans";
// import Subscribe from "../pages/users/Subscribe";
// import HomeCards from "../components/Home/HomeCards";

import Guest1 from "../pages/users/Guest1";
import Home from "../pages/users/Home";
import Guest2 from "../pages/users/Guest2";
import Services from "../pages/users/Services";
import Login from "../pages/users/Login";
import HomePage from "../components/Home/Homepage";
import Profile from "../pages/users/Profile";
import ServiceLocation from "../pages/users/Service";
import RegisterPage from "../pages/users/Register";
import Mobile from "../pages/users/Mobile";
import Otp from "../pages/users/otp";
import Subscriptions from "../pages/users/Subscription";
import Booking from "../pages/users/Booking";
import Contactus from "../pages/users/Contactus";
import History from "../pages/users/History";
import Profile2 from "../pages/users/Profile2";

function AppRouter() {

  return (
    <>
      {/*======== COMPONENTS========== */}

      {/* <Dryclean/> */}
      {/* <Card1/> */}
      {/* <HomeCards/> */}
      {/* <PaymentOptions/> */}
      {/* <Ourplan/> */}
      {/* <Nav/>  */}
      {/* <Searcher/> */}
      {/* <AboutGuest/> */}
      {/* <BackgroundImg/>   */}
      {/* <Question/> */}
      {/* <Rectanglefield/> */}
      {/* <OurServices/> */}
      {/* <Footer/> */}
      {/* <Ourplans/> */}
      {/* <Subscribe/> */}
      {/* <Review/> */}

      {/*======== PAGES ========== */}
      <Routes>
        <Route path="/" element={<Guest1 />}></Route>
        <Route path="/guest2" element={<Guest2 />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/homepage" element={<HomePage />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/profile2" element={<Profile2 />}></Route>
        <Route path="/servicelocation" element={<ServiceLocation />}></Route>
        <Route path="/registerpage" element={<RegisterPage />}></Route>
        <Route path="/mobile" element={<Mobile />}></Route>
        <Route path="/otp" element={<Otp />}></Route>
        <Route path="/subscriptions" element={<Subscriptions />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/contactus" element={<Contactus />}></Route>
        <Route path="/history" element={<History />}></Route>
      </Routes>
    </>
  );
}

export default AppRouter;
