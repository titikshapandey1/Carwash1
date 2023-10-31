//1111111111111111111

// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Button,
//   Container,
//   Grid,
//   Paper,
//   Typography,
// } from "@mui/material";
// import AdDash from "../../components/AdDash";
// import { useLocation } from "react-router-dom";
// import Axios from "../../utils/Axios";
// import Colors from "../../utils/colors";
// import PhoneIcon from "@mui/icons-material/Phone";
// import MailIcon from "@mui/icons-material/Mail";

// const AdPayDetails = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const userId = searchParams.get("id");
//   const [userData, setUserData] = useState(null);

//   // Fetch user details based on userId
//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       try {
//         const response = await Axios.get(`/get-sucessfuly-payment?pages=1?id=${userId}`);
//         setUserData(response.data);
//         console.log(response.data);
//         console.log(userId);
//       } catch (error) {
//         console.error("Error fetching user details: ", error);
//       }
//     };
//     if (userId) {
//       fetchUserDetails();
//     }
//   }, [userId]);

//   return (
//     <>
//       <Box
//         display="block"
//         flexDirection="row"
//         alignItems="center"
//         justifyContent="center"
//         className="wrapper"
//       >
//         <AdDash />
//         <Box
//           display="flex"
//           flexDirection="column"
//           alignItems="center"
//           justifyContent="center"
//           sx={{
//             marginTop: { xs: "15%", sm: "10%", md: "8%" },
//             marginLeft: { sm: "0%", md: "21.5%", lg: "17%" },
//           }}
//         >
//           <Box align="center">
//             <Button
//               variant="outlined"
//               size="large"
//               sx={{
//                 backgroundColor: Colors.palette.secondary.main,
//                 color: Colors.palette.primary.main,
//                 borderRadius: "5px",
//                 "&:hover": { backgroundColor: Colors.palette.secondary.blue },
//                 mt: "5%",
//               }}
//             >
//               Print
//             </Button>
//           </Box>

//           <Container
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               mt: "3%",
//               mb: "5%",
//             }}
//           >
//             <Box
//               sx={{
//                 background: Colors.palette.secondary.cardBackground,
//                 width: { xs: "100%", sm: "100%", md: "60%" },
//                 height: "100%",
//                 padding: "20px",
//               }}
//             >
//               <Box
//                 sx={{
//                   display: { xs: "block", sm: "flex", md: "flex" },
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   color: Colors.palette.primary.darkBlue,
//                   padding: "10px",
//                 }}
//               >
//                 <Typography variant="h4" sx={{ fontWeight: "600" }}>
//                   LOGO
//                 </Typography>
//                 <Typography>Booking ID: {userId}</Typography>
//               </Box>

//               <Box
//                 sx={{
//                   display: { xs: "block", sm: "flex", md: "flex" },
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   color: Colors.palette.primary.darkBlue,
//                   padding: "10px",
//                 }}
//               >
//                 <Typography>Booking Date: </Typography>
//                 <Typography>Scheduled Date: 10/10/2023</Typography>
//               </Box>

//               <Paper sx={{ height: "auto", padding: "20px" }}>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "flex-end",
//                     padding: "5px",
//                   }}
//                 >
//                   <Typography
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       color: Colors.palette.primary.darkBlue,
//                     }}
//                   >
//                     <PhoneIcon sx={{}} />
//                     7017866149 / 7017866149
//                   </Typography>
//                 </Box>
//                 <br />

//                 <Box
//                   sx={{
//                     display: { xs: "block", sm: "flex", md: "flex" },
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                     color: Colors.palette.primary.darkBlue,
//                     padding: "10px",
//                   }}
//                 >
//                   <Typography>Full Name + Surname</Typography>
//                   <Typography>
//                     {" "}
//                     <MailIcon />
//                     kushbhardwaj7017@gmail.com
//                   </Typography>
//                 </Box>

//                 <Box sx={{ marginTop: "2%" }}>
//                   <Grid item xs={12}>
//                     <Typography
//                       variant="h6"
//                       sx={{ color: Colors.palette.secondary.main }}
//                     >
//                       Address
//                     </Typography>
//                   </Grid>
//                   <br />
//                   <Box
//                     sx={{
//                       width: "50%",
//                       backgroundColor: Colors.palette.secondary.lightGrey,
//                       padding: "15px",
//                     }}
//                   ></Box>{" "}
//                   <br />
//                   <Box
//                     sx={{
//                       width: "30%",
//                       backgroundColor: Colors.palette.secondary.lightGrey,
//                       padding: "15px",
//                     }}
//                   ></Box>{" "}
//                   <br />
//                   <Box
//                     sx={{
//                       width: "50%",
//                       backgroundColor: Colors.palette.secondary.lightGrey,
//                       padding: "15px",
//                     }}
//                   ></Box>
//                 </Box>
//               </Paper>

//               <Box
//                 sx={{
//                   marginTop: "5%",
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   color: Colors.palette.primary.main,
//                   background: Colors.palette.primary.darkBlue,
//                   padding: "5px",
//                 }}
//               >
//                 <Typography variant="h6">Service Type</Typography>
//                 <Typography variant="h6">Amount (in Rupee)</Typography>
//               </Box>
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   padding: "5px",
//                   background: Colors.palette.primary.main,
//                 }}
//               >
//                 <Typography>Routine Clean</Typography>
//                 <Typography>Rs. 499</Typography>
//               </Box>

//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   width: "40%",
//                   padding: "20px",
//                   background: Colors.palette.primary.main,
//                   marginTop: "5%",
//                   marginLeft: "auto",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     width: "100%",
//                   }}
//                 >
//                   <Typography>Total Amount :</Typography>
//                   <Typography>Rs. 499</Typography>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     width: "100%",
//                   }}
//                 >
//                   <Typography>Mode Of Payment :</Typography>
//                   <Typography>Cash on Delivery</Typography>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     width: "100%",
//                   }}
//                 >
//                   <Typography>Status :</Typography>
//                   <Typography sx={{ color: "red" }}>Pending</Typography>
//                 </div>
//               </Box>
//             </Box>
//           </Container>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default AdPayDetails;




//222222222222





// import React, { useState, useEffect } from "react";
// import { Box, Button, Container, Paper, Typography } from "@mui/material";
// import PhoneIcon from "@mui/icons-material/Phone";
// import MailIcon from "@mui/icons-material/Mail";
// import Axios from "../../utils/Axios";
// import { useLocation } from "react-router-dom";

// const AdPayDetails = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const userId = searchParams.get("id");

//   const [userData, setUserData] = useState(null);

//   const fetchUserDetails = async () => {
//     try {
//       const response = await Axios.get("/get-sucessfuly-payment?pages=1");
//       setUserData(response.data);
//       console.log(response.data);
//       console.log(userId)
//     } catch (error) {
//       console.error("Error fetching user details: ", error);
//     }
//   };

//   useEffect(() => {
//     fetchUserDetails();
//   }, []);

//   const selectedService =
//     userData && userData.service.find((service) => service._id === userId);

//   return (
//     <Box
//       display="block"
//       flexDirection="row"
//       alignItems="center"
//       justifyContent="center"
//       className="wrapper"
//     >
//       <Box
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//       >
//         <Box align="center">
//           <Button
//             variant="outlined"
//             size="large"
//             sx={{
//               backgroundColor: "your-button-color",
//               color: "your-button-text-color",
//               borderRadius: "5px",
//               "&:hover": { backgroundColor: "your-hover-color" },
//               mt: "5%",
//             }}
//           >
//             Print
//           </Button>
//         </Box>

//         <Container
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             mt: "3%",
//             mb: "5%",
//           }}
//         >
//           <Box
//             sx={
//               {
//                 // Add styling for the outer box
//               }
//             }
//           >
//             {selectedService && (
//               <Paper sx={{ height: "auto", padding: "20px" }}>
//                 <Typography variant="h5">Service Details</Typography>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                     padding: "10px",
//                   }}
//                 >
//                   <Typography>Amount: {selectedService.amount}</Typography>
//                   <Typography>
//                     Service Type: {selectedService.serviceType}
//                   </Typography>
//                 </Box>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                     padding: "10px",
//                   }}
//                 >
//                   {selectedService.firstName}{" "}
//                   <Typography>
//                     Created At: {selectedService.createdAt}
//                   </Typography>
//                   <Typography>
//                     Updated At: {selectedService.updatedAt}
//                   </Typography>
//                   <br/>
//                   <Typography>
//                   {selectedService.viewDetail.paymentMode}
//                   </Typography>
//                   <br/>
//                   <Typography>
//                   {selectedService.viewDetail.serviceType}
//                   </Typography>
//                 </Box>
//                 {/* Add more details specific to the selected service here */}
//               </Paper>
//             )}
//           </Box>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default AdPayDetails;





// 33333333333333






import React, { useState, useEffect } from "react";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import AdDash from "../../components/AdDash";
import { useLocation } from "react-router-dom";
import Axios from "../../utils/Axios";
import Colors from "../../utils/colors";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

const AdPayDetails = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("id");
  const [userData, setUserData] = useState(null);

  // Fetch user details based on userId
  const fetchUserDetails = async () => {
    try {
      const response = await Axios.get("/get-sucessfuly-payment?pages=1");
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user details: ", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const selectedService = userData && userData.service.find((service) => service._id === userId);

  return (
    <>
      <Box
        display="block"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        className="wrapper"
      >
        <AdDash />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            marginTop: { xs: "15%", sm: "10%", md: "8%" },
            marginLeft: { sm: "0%", md: "21.5%", lg: "17%" },
          }}
        >
          <Box align="center">
            <Button
              variant="outlined"
              size="large"
              sx={{
                backgroundColor: Colors.palette.secondary.main,
                color: Colors.palette.primary.main,
                borderRadius: "5px",
                "&:hover": { backgroundColor: Colors.palette.secondary.blue },
                mt: "5%",
              }}
            >
              Print
            </Button>
          </Box>

          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: "3%",
              mb: "5%",
            }}
          >
            <Box
              sx={{
                background: Colors.palette.secondary.cardBackground,
                width: { xs: "100%", sm: "100%", md: "60%" },
                height: "100%",
                padding: "20px",
              }}
            >
              <Box
                sx={{
                  display: { xs: "block", sm: "flex", md: "flex" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: Colors.palette.primary.darkBlue,
                  padding: "10px",
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: "600" }}>
                  LOGO
                </Typography>
                <Typography>Booking ID: {userId}</Typography>
              </Box>

              <Box
                sx={{
                  display: { xs: "block", sm: "flex", md: "flex" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: Colors.palette.primary.darkBlue,
                  padding: "10px",
                }}
              >
                <Typography>Booking Date: </Typography>
                <Typography>Scheduled Date: 10/10/2023</Typography>
              </Box>

              {selectedService && (
                <Paper sx={{ height: "auto", padding: "20px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      padding: "5px",
                    }}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: Colors.palette.primary.darkBlue,
                      }}
                    >
                      <PhoneIcon sx={{}} />
                      {selectedService.viewDetail.mobileNumber}
                    </Typography>
                  </Box>
                  <br />

                  <Box
                    sx={{
                      display: { xs: "block", sm: "flex", md: "flex" },
                      justifyContent: "space-between",
                      alignItems: "center",
                      color: Colors.palette.primary.darkBlue,
                      padding: "10px",
                    }}
                  >
                    <Typography>
                      {selectedService.viewDetail.firstName}{" "}
                      {selectedService.viewDetail.surName}
                    </Typography>
                    <Typography>
                      {" "}
                      <MailIcon />
                      {selectedService.viewDetail.userName}
                    </Typography>
                  </Box>

                  <Box sx={{ marginTop: "2%" }}>
                    <Grid item xs={12}>
                      <Typography
                        variant="h6"
                        sx={{ color: Colors.palette.secondary.main }}
                      >
                        Address
                      </Typography>
                    </Grid>
                    <br />
                    <Typography
                      sx={
                        {
                          // width: "50%",
                          // backgroundColor: Colors.palette.secondary.lightGrey,
                          // padding: "15px",
                        }
                      }
                    >
                      {selectedService.viewDetail.address.locality}
                    </Typography>{" "}
                    <br />
                    <Box
                      sx={
                        {
                          // width: "30%",
                          // backgroundColor: Colors.palette.secondary.lightGrey,
                          // padding: "15px",
                        }
                      }
                    >
                      {selectedService.viewDetail.address.city}{" "}
                      {selectedService.viewDetail.address.district}
                    </Box>{" "}
                    <br />
                    <Box
                      sx={
                        {
                          // width: "50%",
                          // backgroundColor: Colors.palette.secondary.lightGrey,
                          // padding: "15px",
                        }
                      }
                    >
                      {selectedService.viewDetail.address.state}
                    </Box>
                  </Box>
                </Paper>
              )}
              <Box
                sx={{
                  marginTop: "5%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: Colors.palette.primary.main,
                  background: Colors.palette.primary.darkBlue,
                  padding: "5px",
                }}
              >
                <Typography variant="h6">Service Type</Typography>
                <Typography variant="h6">Amount (in Rupee)</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "5px",
                  background: Colors.palette.primary.main,
                }}
              >
                <Typography>
                  {selectedService.viewDetail.serviceType}
                </Typography>
                <Typography>Rs. {selectedService.amount}</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "40%",
                  padding: "20px",
                  background: Colors.palette.primary.main,
                  marginTop: "5%",
                  marginLeft: "auto",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography>Total Amount :</Typography>
                  <Typography>Rs. {selectedService.amount}</Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography>Mode Of Payment :</Typography>
                  <Typography>
                    {selectedService.viewDetail.paymentMode}
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography>Status :</Typography>
                  <Typography sx={{ color: "red" }}>
                    {selectedService.viewDetail.paymentMode}
                  </Typography>
                </div>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default AdPayDetails;









