// import React, { useEffect, useState } from "react";
// import AdminDash from "../../components/AdDash";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import { CardActionArea } from "@mui/material";
// import { Box, Typography, Grid } from "@mui/material";
// import Fab from "@mui/material/Fab";
// import AddIcon from "@mui/icons-material/Add";
// import Colors from "../../utils/colors";
// // import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
// // import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// // import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
// // import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
// import Axios from "../../utils/Axios";
// import { NavLink } from "react-router-dom";

// const cardStyle = {
//   borderRadius: "10px",
//   boxShadow: "2px 2px 2px grey",
//   height: 100,
//   display:"flex",
//   justifyContent:"center",
//   alignItems:"center"
// };

// const headingStyles = {
//   color: Colors.palette.primary.main,
//   fontWeight: "400",
//   fontSize: "2rem",
//   display:"flex",
//   justifyContent:"center",
//   alignItems:"center"
// };

// const subHeading = {
//   color: Colors.palette.primary.main,
//   fontWeight: "400",
//   display:"flex",
//   justifyContent:"flex-end",
//   alignItems:"center"
// };

// // const iconBoxStyles = {
// //   display: "flex",
// //   alignItems: "center",
// //   justifyContent: "flex-end",
// // };
// // const iconsStyles = {
// //   padding: "2px",
// //   color: Colors.palette.primary.main,
// //   backgroundColor: Colors.palette.secondary.main,
// //   borderRadius: "50%",
// //   border: `2px solid ${Colors.palette.secondary.main}`,
// // };

// const AdminDashboard = () => {
//   const [SuccData, setSuccData] = useState({});
//   const [UnsuccData, setUnsuccData] = useState({});
//   const [SupervisorData, setSupervisorData] = useState({});
//   const [UserReqData, setUserReqData] = useState({});
//   const [ActUserData, setActUserData] = useState({});
//   const [DecUserData, setDecUserData] = useState({});

//   const fetchData = async () => {
//     // setLoading(true);
//     try {
//       const responseSucc = await Axios.get("/count-sucessfully-pay");
//       setSuccData(responseSucc.data);
//       console.log("Response Data:", responseSucc.data);

//       const responseUnscc = await Axios.get("/count-unsucessfull-pay");
//       setUnsuccData(responseUnscc.data);
//       console.log("Response Data:", responseUnscc.data);

//       const responseSup = await Axios.get("/count-all-supervisior");
//       setSupervisorData(responseSup.data);
//       console.log("Response Data:", responseSup.data);

//       // const responseUserReq = await Axios.get("/");
//       // setUserReqData(responseUserReq.data);

//       // console.log("Response Data:", responseUserReq.data);

//       // const responseActUser = await Axios.get("/");
//       // setActUserData(responseActUser.data);
//       // console.log("Response Data:", responseActUser.data);

//       // const responseDecUser = await Axios.get("/");
//       // setDecUserData(responseDecUser.data);
//       // console.log("Response Data:", responseDecUser.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//     // finally {
//     //   setLoading(false);
//     // }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       <Box
//         display="flex"
//         flexDirection="column"
//         // alignItems="center"
//         justifyContent="center"
//         sx={{
//           maxWidth: "100%",
//           borderRadius: "20px",
//           background: Colors.palette.secondary.cardBackground,
//           padding: "20px",
//           marginLeft: { xs: "1%", sm: "5%", md: "30%", lg: "20%" },
//           marginTop: { xs: "23%", sm: "13%", md: "10%", lg: "8%" },
//           marginRight: { xs: "1%", sm: "3%" },
//         }}
//       >
//         <AdminDash />
//         <Box display="flex" alignItems="center" justifyContent="center">
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6} md={6}>
//               <NavLink
//                 to="/adminpaysuccessful"
//                 style={{
//                   textDecoration: "none",
//                   color: Colors.palette.secondary.main,
//                 }}
//               >
//                 <Card
//                   sx={{
//                     maxWidth: { xs: 700, md: 510 },
//                     background: Colors.palette.card.green,
//                     ...cardStyle,
//                   }}
//                 >
//                   <CardActionArea>
//                     <CardContent>
//                       {/* <Box sx={iconBoxStyles}>
//                         <AccountBalanceRoundedIcon sx={iconsStyles} />
//                       </Box> */}
//                       {/* <Typography
//                         variant="h4"
//                         component="div"
//                         sx={headingStyles}
//                       >
//                         {SuccData.count}
//                       </Typography> */}
//                       <Typography variant="h5" sx={subHeading}>
//                         Successful <br /> Payments
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </NavLink>
//             </Grid>
//             <Grid item xs={12} sm={6} md={6}>
//               <NavLink
//                 to="/adminpayunsucessful"
//                 style={{
//                   textDecoration: "none",
//                   color: Colors.palette.secondary.main,
//                 }}
//               >
//                 <Card
//                   sx={{
//                     maxWidth: { xs: 700, md: 510 },
//                     background: Colors.palette.card.red,
//                     ...cardStyle,
//                   }}
//                 >
//                   <CardActionArea>
//                     <CardContent>
//                       {/* <Box sx={iconBoxStyles}>
//                         <AccountBalanceRoundedIcon sx={iconsStyles} />
//                       </Box> */}
//                       {/* <Typography
//                         variant="h4"
//                         component="div"
//                         sx={headingStyles}
//                       >
//                         {UnsuccData.count}
//                       </Typography> */}
//                       <Typography variant="h5" sx={subHeading}>
//                         Unsuccessful <br /> Payments
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </NavLink>
//             </Grid>
//           </Grid>
//         </Box>

//         <Box
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//           sx={{
//             // marginLeft: { xs: "2%", sm: "1%" },
//             marginTop: { xs: "7%", sm: "2%" },
//           }}
//         >
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={4} md={4}>
//               <NavLink
//                 to="/adminuserrequest"
//                 style={{
//                   textDecoration: "none",
//                   color: Colors.palette.secondary.main,
//                 }}
//               >
//                 <Card
//                   sx={{
//                     maxWidth: { xs: 700, md: 340 },
//                     background: Colors.palette.secondary.main,
//                     ...cardStyle,
//                   }}
//                 >
//                   <CardActionArea>
//                     <CardContent>
//                       {/* <Box sx={iconBoxStyles}>
//                         <PeopleAltOutlinedIcon sx={iconsStyles} />
//                       </Box> */}
//                       {/* <Typography
//                         variant="h5"
//                         component="div"
//                         sx={headingStyles}
//                       >
//                         --
//                       </Typography> */}
//                       <Typography variant="h6" sx={subHeading}>
//                         Users <br /> Requests
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </NavLink>
//             </Grid>
//             <Grid item xs={12} sm={4} md={4}>
//               <NavLink
//                 to="/adminuseractive"
//                 style={{
//                   textDecoration: "none",
//                   color: Colors.palette.secondary.main,
//                 }}
//               >
//                 <Card
//                   sx={{
//                     maxWidth: { xs: 700, md: 340 },
//                     background: Colors.palette.card.green,
//                     ...cardStyle,
//                   }}
//                 >
//                   <CardActionArea>
//                     <CardContent>
//                       {/* <Box sx={iconBoxStyles}>
//                         <PeopleAltOutlinedIcon sx={iconsStyles} />
//                       </Box> */}
//                       {/* <Typography
//                         variant="h5"
//                         component="div"
//                         sx={headingStyles}
//                       >
//                         --
//                       </Typography> */}
//                       <Typography variant="h6" sx={subHeading}>
//                         Active <br /> Users
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </NavLink>
//             </Grid>
//             <Grid item xs={12} sm={4} md={4}>
//               <NavLink
//                 to="/adminuserinactive"
//                 style={{
//                   textDecoration: "none",
//                   color: Colors.palette.secondary.main,
//                 }}
//               >
//                 <Card
//                   sx={{
//                     maxWidth: { xs: 700, md: 330 },
//                     background: Colors.palette.card.red,
//                     ...cardStyle,
//                   }}
//                 >
//                   <CardActionArea>
//                     <CardContent>
//                       {/* <Box sx={iconBoxStyles}>
//                         <PeopleAltOutlinedIcon sx={iconsStyles} />
//                       </Box> */}
//                       {/* <Typography
//                         variant="h5"
//                         component="div"
//                         sx={headingStyles}
//                       >
//                         --
//                       </Typography> */}
//                       <Typography variant="h6" sx={subHeading}>
//                         Inactive <br /> Users
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </NavLink>
//             </Grid>
//           </Grid>
//         </Box>

//         <Box
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//           sx={{
//             marginTop: { xs: "7%", sm: "2%" },
//           }}
//         >
//           <Grid container spacing={3}>
//             <Grid item xs={8} sm={8} md={10}>
//               <NavLink
//                 to="/adminallsupervisor"
//                 style={{
//                   textDecoration: "none",
//                   color: Colors.palette.secondary.main,
//                 }}
//               >
//                 <Card
//                   sx={{
//                     maxWidth: 900,
//                     background: Colors.palette.secondary.main,
//                     ...cardStyle,
//                   }}
//                 >
//                   <CardActionArea>
//                     <CardContent>
//                       {/* <AccountCircleOutlinedIcon
//                         sx={{
//                           ...iconsStyles,
//                           marginLeft: { xs: "85%", sm: "95%" },
//                         }}
//                       /> */}
//                       <Typography
//                         variant="h5"
//                         component="div"
//                         sx={headingStyles}
//                       >
//                         {SupervisorData.count}
//                         Supervisors
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </NavLink>
//             </Grid>
//             <Grid item xs={4} sm={4} md={2}>
//               <Fab
//                 aria-label="add"
//                 sx={{
//                   width: 90,
//                   height: 90,
//                   mt: 0.5,
//                   textAlign: "center",
//                   background: Colors.palette.primary.main,
//                   boxShadow: "2px 2px 2px grey",
//                 }}
//               >
//                 <AddIcon sx={{ fontSize: "30px" }} />
//               </Fab>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default AdminDashboard;

import React, { useEffect, useState } from "react";
import AdminDash from "../../components/AdDash";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { Box, Typography, Grid } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Colors from "../../utils/colors";
import Axios from "../../utils/Axios";
import { NavLink } from "react-router-dom";

const cardStyle = {
  borderRadius: "10px",
  boxShadow: "2px 2px 2px grey",
  height: 100,
  display: "flex",
  alignItems: "center",
};

const headingStyles = {
  color: Colors.palette.primary.main,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const subHeading = {
  color: Colors.palette.primary.main,
  display: "flex",
  // justifyContent: "flex-end",
  alignItems: "center",
};

const AdminDashboard = () => {
  const [SuccData, setSuccData] = useState({});

  const fetchData = async () => {
    // setLoading(true);
    try {
      const responseSucc = await Axios.get("/count-sucessfully-pay");
      setSuccData(responseSucc.data);
      console.log("Response Data:", responseSucc.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    // finally {
    //   setLoading(false);
    // }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        // alignItems="center"
        justifyContent="center"
        sx={{
          maxWidth: "100%",
          borderRadius: "20px",
          background: Colors.palette.secondary.cardBackground,
          padding: "20px",
          marginLeft: { xs: "1%", sm: "5%", md: "30%", lg: "20%" },
          marginTop: { xs: "23%", sm: "13%", md: "10%", lg: "8%" },
          marginRight: { xs: "1%", sm: "3%" },
        }}
      >
        <AdminDash />
        <Box display="flex" alignItems="center" justifyContent="center">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <NavLink
                to="/adminpaysuccessful"
                style={{
                  textDecoration: "none",
                  color: Colors.palette.secondary.main,
                }}
              >
                <Card
                  sx={{
                    maxWidth: { xs: 700, md: 510 },
                    background: Colors.palette.card.green,
                    ...cardStyle,
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Box sx={subHeading} justifyContent="space-evenly">
                        <Typography variant="h3" fontWeight="600">
                          24
                        </Typography>
                        <Typography variant="h5">
                          Successful <br /> Payments
                        </Typography>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </NavLink>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <NavLink
                to="/adminpayunsucessful"
                style={{
                  textDecoration: "none",
                  color: Colors.palette.secondary.main,
                }}
              >
                <Card
                  sx={{
                    maxWidth: { xs: 700, md: 510 },
                    background: Colors.palette.card.red,
                    ...cardStyle,
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Box sx={subHeading} justifyContent="space-evenly">
                        <Typography variant="h3" fontWeight="600">
                          14
                        </Typography>
                        <Typography variant="h5">
                          Unsuccessful <br /> Payments
                        </Typography>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </NavLink>
            </Grid>
          </Grid>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            marginTop: { xs: "7%", sm: "2%" },
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} md={4}>
              <NavLink
                to="/adminuserrequest"
                style={{
                  textDecoration: "none",
                  color: Colors.palette.secondary.main,
                }}
              >
                <Card
                  sx={{
                    maxWidth: { xs: 700, md: 340 },
                    background: Colors.palette.secondary.main,
                    ...cardStyle,
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Box sx={subHeading} justifyContent="space-evenly">
                        <Typography variant="h3" fontWeight="600">
                          10
                        </Typography>
                        <Typography variant="h6">
                          Users <br /> Requests
                        </Typography>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </NavLink>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <NavLink
                to="/adminuseractive"
                style={{
                  textDecoration: "none",
                  color: Colors.palette.secondary.main,
                }}
              >
                <Card
                  sx={{
                    maxWidth: { xs: 700, md: 340 },
                    background: Colors.palette.card.green,
                    ...cardStyle,
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Box sx={subHeading} justifyContent="space-evenly">
                        <Typography variant="h3" fontWeight="600">
                          4
                        </Typography>
                        <Typography variant="h6">
                          Active <br /> Users
                        </Typography>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </NavLink>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <NavLink
                to="/adminuserinactive"
                style={{
                  textDecoration: "none",
                  color: Colors.palette.secondary.main,
                }}
              >
                <Card
                  sx={{
                    maxWidth: { xs: 700, md: 330 },
                    background: Colors.palette.card.red,
                    ...cardStyle,
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Box sx={subHeading} justifyContent="space-evenly">
                        <Typography variant="h3" fontWeight="600">
                          1
                        </Typography>
                        <Typography variant="h6">
                          Inactive <br /> Users
                        </Typography>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </NavLink>
            </Grid>
          </Grid>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            marginTop: { xs: "7%", sm: "2%" },
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <NavLink
                to="/adminallsupervisor"
                style={{
                  textDecoration: "none",
                  color: Colors.palette.secondary.main,
                }}
              >
                <Card
                  sx={{
                    maxWidth: 1000,
                    background: Colors.palette.secondary.main,
                    ...cardStyle,
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Box sx={headingStyles}>
                        <Box sx={{ flexGrow: 1, textAlign: "center" }}>
                          <Box
                            fontSize="3rem"
                            fontWeight="600"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                          >
                            12{" "}
                            <span
                              style={{
                                fontSize: "18px",
                                fontWeight: "400",
                                marginLeft: "15px",
                              }}
                            >
                              Supervisors
                            </span>
                          </Box>
                        </Box>
                        <Box sx={{ textAlign: "right" }}>
                          <Fab
                            aria-label="add"
                            sx={{
                              width: 80,
                              height: 80,
                              background: Colors.palette.primary.main,
                              boxShadow: "2px 2px 2px grey",
                            }}
                          >
                            <AddIcon
                              sx={{
                                fontSize: "3.5rem",
                                color: Colors.palette.secondary.main,
                              }}
                            />
                          </Fab>
                        </Box>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </NavLink>
            </Grid>
            {/* <Grid item xs={4} sm={4} md={2}>
              
            </Grid> */}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default AdminDashboard;
