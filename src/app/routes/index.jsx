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


import AdminDashboard from "../pages/admin/AdminDashboard";
import AdPaySucc from "../pages/admin/AdPaySucc";
import AdPayUnsucc from "../pages/admin/AdPayUnsucc";
import AdUserReq from "../pages/admin/AdUserReq";
import AdUserAct from "../pages/admin/AdUserAct";
import AdUserDec from "../pages/admin/AdUserDec";
import AdEditSup from "../pages/admin/AdEditSup";
import AdCreateSup from "../pages/admin/AdCreateSup";


import SupervisorDashboard from "../pages/supervisor/SupervisorDashboard";
import SupPaySucc from "../pages/supervisor/SupPaySucc";
import SupPayUnsucc from "../pages/supervisor/SupPayUnsucc";
import SupUserReq from "../pages/supervisor/SupUserReq";
import SupUserAct from "../pages/supervisor/SupUserAct";
import SupUserDec from "../pages/supervisor/SupUserDec";



import AdDash from "../components/AdDash";
import SupDash from "../components/SupDash";
import Table from "../components/Table";




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
        {/*======== USERS ========== */}
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

        {/*======== ADMIN ========== */}

        <Route path="/admindashboard" element={<AdminDashboard />}></Route>
        <Route path="/adminpaysuccessful" element={<AdPaySucc />}></Route>
        <Route path="/adminpayunsucessful" element={<AdPayUnsucc />}></Route>
        <Route path="/adminuserrequest" element={<AdUserReq />}></Route>
        <Route path="/adminuseractive" element={<AdUserAct />}></Route>
        <Route path="/adminuserdeclined" element={<AdUserDec />}></Route>
        <Route path="/admineditsupervisor" element={<AdEditSup />}></Route>
        <Route path="/admincreatesupervisor" element={<AdCreateSup />}></Route>
        

        {/*======== SUPERVISOR ========== */}
        <Route path="/supervisordashboard" element={<SupervisorDashboard/>}></Route>
        <Route path="/supervisorpaysuccessful" element={<SupPaySucc />}></Route>
        <Route path="/supervisorpayunsuccessful" element={<SupPayUnsucc />}></Route>
        <Route path="/supervisoruserrequest" element={<SupUserReq />}></Route>
        <Route path="/supervisoruseractive" element={<SupUserAct />}></Route>
        <Route path="/supervisoruserdeclined" element={<SupUserDec />}></Route>

    
        <Route path="/addash" element={<AdDash />}></Route>
        <Route path="/supdash" element={<SupDash/>}></Route>
        <Route path="/table" element={<Table />}></Route>
      </Routes>
    </>
  );
}

export default AppRouter;
