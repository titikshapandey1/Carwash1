// import React, { createContext, useContext,useState } from 'react';
// import Axios from "../utils/Axios1";
// import { useNavigate } from "react-router-dom";

// export const AuthContext = createContext();

// export function AuthProvider({ children }) {

//   const [UserInfo, setUserInfo] = useState([]);
//   const [Loading, setLoading] = useState(false);
//   const [VerifyLoading, setVerifyLoading] = useState(false);
//   const [ContactData, setContactData] = useState([]);
//   // const navigate = useNavigate();

//   const headers = {
//     "Content-Type": "application/json",
//   };

//   function userRegistration(data, navigate) {
//     console.log("jsonData", data);
//     setLoading(true);
//     Axios.post("/sentotp", data, headers)
//       .then((res) => {
//         console.log("UserData", res.data);
//         localStorage.setItem("otp", res.data.otp);
//         setUserInfo(res.data);
//         navigate("/otp", {
//           state: {
//             formData: data,
//             otp: res.data.otp,
//             formType: "registerpage",
//           },
//         });
//         setLoading(false);
//       })
//       .catch((er) => {
//         console.log("error", er);
//         setLoading(false);
//       });
//   }

//   function verifyotp(formData, otp, navigate) {
//     const data = {
//       ...formData,
//       otp,
//     };
//     setVerifyLoading(true);
//     Axios.post("/verifyotp", data)
//       .then((res) => {
//         navigate("/home");
//         console.log("Verify OTP", res.data);
//         setUserInfo(res.data);
//         setVerifyLoading(false);
//       })
//       .catch((er) => {
//         console.log("error", er);
//         setVerifyLoading(false);
//       });
//   }

//   function userLogin(data) {
//     console.log('userLogin function called with data:', data);
//     setLoading(true);
//     Axios.post("/login", data)
//       .then((res) => {
//         console.log("UserData", res.data);
//         setUserInfo(res.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log("error", error);
//         setLoading(false);
//       });
//   }

//   function forgetPassword(data, navigate) {
//     setLoading(true);
//     Axios.post("/forgetpassword", data)
//       .then((res) => {
//         console.log("UserData", res.data);
//         setUserInfo(res.data);
//         localStorage.setItem("otp", res.data.otp);
//         navigate("/passwordreset", {
//           state: {
//             otp: res.data.otp,
//           },
//         });
//         setLoading(false);
//       })
//       .catch((er) => {
//         console.log("error", er);
//         setLoading(false);
//       });
//   }

//   function createcontact(data) {
//     setLoading(true);
//     Axios.post("/create-contact", data)
//       .then((res) => {
//         console.log("ContactData", res.data);
//         setUserInfo(res.data);
//         setLoading(false);
//       })
//       .catch((er) => {
//         console.log("error", er);
//         setLoading(false);
//       });
//   }

//   function getData() {
//     // setLoading(true);
//     Axios.get("/get-contact")
//       .then((res) => {
//         setContactData(res.data);
//         // setLoading(false);
//       })
//       .catch((er) => {
//         console.log("error", er);
//         // setLoading(false);
//       });
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         userLogin,
//         userRegistration,
//         createcontact,
//         verifyotp,
//         getData,
//         forgetPassword,
//         ContactData,
//         VerifyLoading,
//         Loading,
//         UserInfo,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// Merged Auth Context


import { createContext, useState } from "react";
import Axios from "../utils/Axios1";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [UserInfo, setUserInfo] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [VerifyLoading, setVerifyLoading] = useState(false);
  const [ContactData, setContactData] = useState([]);
  const navigate = useNavigate();

  const headers = {
    "Content-Type": "application/json",
  };

  function userRegistration(data, navigate) {
    console.log("jsonData", data);
    setVerifyLoading(true);
    Axios.post("/sentotp", data, headers)
      .then((res) => {
        console.log("UserData", res.data);
        localStorage.setItem("otp", res.data.otp);
        setUserInfo(res.data);
        navigate("/registerotp", {
          state: {
            formData: data,
            otp: res.data.otp,
            // otp:res.otpRecord.otp,
            formType: "registerpage",
          },
        });
        setVerifyLoading(false);
      })
      .catch((er) => {
        console.log("error", er);
        setVerifyLoading(false);
      });
  }

  function verifyotp(formData, otp, navigate) {
    const data = {
      ...formData,
      otp,
    };
    setVerifyLoading(true);
    Axios.post("/verifyotp", data)
      .then((res) => {
        navigate("/home");
        console.log("Verify OTP", res.data);
        setUserInfo(res.data);
        setVerifyLoading(false);
      })
      .catch((er) => {
        console.log("error", er);
        setVerifyLoading(false);
      });
  }

  function userLogin(data, navigate) {
    setVerifyLoading(true);
    Axios.post("/login", data)
      .then((res) => {
        console.log("UserData", res.data);
        setUserInfo(res.data);
        navigate("/home");
        setVerifyLoading(false);
      })
      .catch((er) => {
        console.log("error", er);
        setVerifyLoading(false);
      });
  }

  function forgetPassword(data, navigate){
    setVerifyLoading(true);
    Axios.post("/forgetpassword", data)
      .then((res) => {
        console.log("UserData", res.data);
        console.log("UserData", res.data.otp);
        setUserInfo(res.data);
        localStorage.setItem("otp", res.data.otp);
        navigate("/forgetpassotp", {
          state: {
            formData: data,
            otp: res.data.otp,
          },
        });
        setVerifyLoading(false);
      })
      .catch((er) => {
        console.log("error", er);
        setVerifyLoading(false);
      });
  }

  function resetPassword(data, navigate) {
    setVerifyLoading(true);
    Axios.post("/resetpassword", data)
      .then((res) => {
        console.log("UserData", res.data);
        setUserInfo(res.data);
        navigate("/home");
        setVerifyLoading(false);
      })
      .catch((er) => {
        console.log("UserData", data);
        console.log("error", er);
        setVerifyLoading(false);
      });
  }
  
  function createcontact(data) {
    setLoading(true);
    Axios.post("/create-contact", data)
      .then((res) => {
        console.log("ContactData", res.data);
        setUserInfo(res.data);
        setLoading(false);
      })
      .catch((er) => {
        console.log("error", er);
        setLoading(false);
      });
  }

  // function getData() {
  //   // setLoading(true);
  //   Axios.get("/get-contact")
  //     .then((res) => {
  //       setContactData(res.data);
  //       // setLoading(false);
  //     })
  //     .catch((er) => {
  //       console.log("error", er);
  //       // setLoading(false);
  //     });
  // }

  return (
    <AuthContext.Provider
      value={{
        userLogin,
        userRegistration,
        createcontact,
        verifyotp,
        // getData,
        forgetPassword,
        resetPassword,
        ContactData,
        VerifyLoading,
        Loading,
        UserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
