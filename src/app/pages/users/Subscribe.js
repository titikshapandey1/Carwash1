// import React from "react";
// import {
//   Box,
//   Button,
//   CardContent,
//   Container,
//   Grid,
//   List,
//   ListItemText,
//   Typography,
//   ListItem

// } from "@mui/material";
// import Colors from "../../utils/colors";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { NavLink } from "react-router-dom";
// import SubCard from "../../components/card/Subscribecard";
// import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";

// const Subscribe = () => {
//   return (
//     <>
//       <Container>
//         <Box sx={{ textAlign: "center", marginTop: "5%"  }}>
//           <Grid
//             container
//             spacing={2}
//             justifyContent="center"
//             alignItems="center"
//           >
//             <Grid item xs={12} sm={6} md={4}>
//               <SubCard shadowColor={Colors.palette.background.lightGreen}
//                 // sx={{
//                 //   borderRadius: "20px",
//                 //   background: Colors.palette.primary.main,
//                 //   boxShadow:'green'
//                 // }}
//               >
//                 <CardContent>
//                  <Typography
//                     variant="h4"
//                     sx={{
//                       textAlign: "center",
//                       color: Colors.palette.secondary.main,
//                     }}
//                   >
//                     <b> Basic </b>
//                     <br />₹ 1199 / month
//                   </Typography>
//                   <Typography sx={{ marginTop: "8%" }}>

//                   <List >
//                   <ListItem>
//                     <DoneAllOutlinedIcon />{" "}
//                     <ListItemText style={{marginLeft:'15px',color:'Black'}}>Exterior Wash, removing dust and grime.</ListItemText> <br />
//                   </ListItem>
//                   <ListItem>
//                     <DoneAllOutlinedIcon />{" "}
//                     <ListItemText  style={{marginLeft:'15px',color:'Black'}}primary=" Cleaning and Polishing all windows and mirrors." />
//                   </ListItem>
//                   <ListItem>
//                     <DoneAllOutlinedIcon />{" "}
//                     <ListItemText  style={{marginLeft:'15px',color:'Black'}} primary="Cleaning and Shining tires and rims.." />
//                   </ListItem>
//                   <ListItem>
//                     <DoneAllOutlinedIcon />{" "}
//                     <ListItemText  style={{marginLeft:'15px',color:'Black'}} primary="Cleaning and Shining tires and rims." />
//                   </ListItem>
//                   <ListItem>
//                     <DoneAllOutlinedIcon />{" "}
//                     <ListItemText  style={{marginLeft:'15px',color:'Black'}} primary=" Wiping down interior surface, including dashboard and
//                         door panels." />
//                   </ListItem>
//                   <ListItem>
//                     <DoneAllOutlinedIcon />{" "}
//                   <ListItemText  style={{marginLeft:'15px',color:'Black'}} primary=" Wiping down interior surface, including dashboard and
//                         door panels." />
//                   </ListItem>
//                   <ListItem>
//                     <DoneAllOutlinedIcon />{" "}
//                   <ListItemText  style={{marginLeft:'15px',color:'Black'}} primary=" Wiping down interior surface, including dashboard and
//                         door panels." />
//                   </ListItem>
//                   <ListItem>
//                     <DoneAllOutlinedIcon />{" "}
//                   <ListItemText  style={{marginLeft:'15px',color:'Black'}} primary=" Wiping down interior surface, including dashboard and
//                         door panels." />
//                   </ListItem>
//                 </List>
//                   </Typography>

//                   <Typography sx={{ textAlign: "left", marginLeft: "4%" ,color:'Black'}}>
//                     Expiring on: 04/10/2023
//                   </Typography>

//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       marginTop: "5%",
//                     }}
//                   >
//                     <Button
//                       variant="contained"
//                       sx={{
//                         borderRadius: "22px",
//                         background: Colors.palette.secondary.main,
//                         height: "55px",
//                         width: "150px",
//                       }}
//                     >
//                       <NavLink
//                         to="/servicelocation"
//                         style={{
//                           textDecoration: "none",
//                           color: Colors.palette.primary.main,
//                           display: "flex",
//                           alignItems: "center",
//                         }}
//                       >
//                         Book now &nbsp;
//                         <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />
//                       </NavLink>
//                     </Button>
//                   </Box>
//                 </CardContent>
//               </SubCard>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//               <SubCard  shadowColor={Colors.palette.secondary.yellow}
//                 // sx={{
//                 //   borderRadius: "20px",
//                 //   // background: Colors.palette.primary.main,

//                 // }}
//               >
//                 <CardContent>
//                   <Typography
//                     variant="h4"
//                     sx={{
//                       textAlign: "center",
//                       color: Colors.palette.secondary.main,
//                     }}
//                   >
//                     <b>{/* hlo */} Gold </b> <br />₹ 1499 / month
//                   </Typography>
//                   <Typography sx={{ marginTop: "8%" }}>
//                   <List>
//                   <ListItem>
//                     <DoneAllOutlinedIcon />{" "}
//                     <ListItemText style={{marginLeft:'15px',color:'Black'}}>Exterior Wash, removing dust and grime.</ListItemText> <br />
//                   </ListItem>
//                   <ListItem>
//                     <DoneAllOutlinedIcon />{" "}
//                     <ListItemText  style={{marginLeft:'15px',color:'Black'}}primary=" Cleaning and Polishing all windows and mirrors." />
//                   </ListItem>
//                   <ListItem>
//                     <DoneAllOutlinedIcon />{" "}
//                     <ListItemText  style={{marginLeft:'15px',color:'Black'}} primary="Cleaning and Shining tires and rims.." />
//                   </ListItem>
//                   <ListItem>
//                     <DoneAllOutlinedIcon />{" "}
//                     <ListItemText  style={{marginLeft:'15px',color:'Black'}} primary="Cleaning and Shining tires and rims." />
//                   </ListItem>
//                   <ListItem>
//                     <DoneAllOutlinedIcon />{" "}
//                     <ListItemText  style={{marginLeft:'15px',color:'Black'}} primary=" Wiping down interior surface, including dashboard and
//                         door panels." />
//                   </ListItem>
//                   <ListItem>
//                     <DoneAllOutlinedIcon />{" "}
//                   <ListItemText  style={{marginLeft:'15px',color:'Black'}} primary=" Wiping down interior surface, including dashboard and
//                         door panels." />
//                   </ListItem>
//                   <ListItem>
//                     <DoneAllOutlinedIcon />{" "}
//                   <ListItemText  style={{marginLeft:'15px',color:'Black'}} primary=" Wiping down interior surface, including dashboard and
//                         door panels." />
//                   </ListItem>
//                   <ListItem>
//                     <DoneAllOutlinedIcon />{" "}
//                   <ListItemText  style={{marginLeft:'15px',color:'Black'}} primary=" Wiping down interior surface, including dashboard and
//                         door panels." />
//                   </ListItem>
//                 </List>
//                   </Typography>

//                   <Typography sx={{ textAlign: "left", marginLeft: "4%" ,color:'Black'}}>
//                     Expiring on: 04/10/2023
//                   </Typography>

//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       marginTop: "5%",
//                     }}
//                   >
//                     <Button
//                       variant="contained"
//                       sx={{
//                         borderRadius: "22px",
//                         background: Colors.palette.secondary.main,
//                         height: "55px",
//                         width: "150px",
//                       }}
//                     >
//                       <NavLink
//                         to="/servicelocation"
//                         style={{
//                           textDecoration: "none",
//                           color: Colors.palette.primary.main,
//                           display: "flex",
//                           alignItems: "center",
//                         }}
//                       >
//                         Book now &nbsp;
//                         <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />
//                       </NavLink>
//                     </Button>
//                   </Box>
//                 </CardContent>
//               </SubCard>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//               <SubCard shadowColor={Colors.palette.secondary.darkPurple}
//                 // sx={{
//                 //   borderRadius: "20px",
//                 //   background: Colors.palette.primary.main,
//                 // }}
//               >
//                 <CardContent>
//                   <Typography
//                     variant="h4"
//                     sx={{
//                       textAlign: "center",
//                       color: Colors.palette.secondary.main,
//                     }}
//                   >
//                     <b> Platinum </b> <br />₹ 2199 / month
//                   </Typography>
//                   <Typography sx={{ marginTop: "8%" }}>
//                   <List>
//                   <ListItem>
//                     <DoneAllOutlinedIcon />{" "}
//                     <ListItemText style={{marginLeft:'15px',color:'Black'}}>Exterior Wash, removing dust and grime.</ListItemText> <br />
//                   </ListItem>
//                   <ListItem>
//                     <DoneAllOutlinedIcon />{" "}
//                     <ListItemText  style={{marginLeft:'15px',color:'Black'}}primary=" Cleaning and Polishing all windows and mirrors." />
//                   </ListItem>
//                   <ListItem>
//                     <DoneAllOutlinedIcon />{" "}
//                     <ListItemText  style={{marginLeft:'15px',color:'Black'}} primary="Cleaning and Shining tires and rims.." />
//                   </ListItem>
//                   <ListItem>
//                     <DoneAllOutlinedIcon />{" "}
//                     <ListItemText  style={{marginLeft:'15px',color:'Black'}} primary="Cleaning and Shining tires and rims." />
//                   </ListItem>
//                   <ListItem>
//                     <DoneAllOutlinedIcon />{" "}
//                     <ListItemText  style={{marginLeft:'15px',color:'Black'}} primary=" Wiping down interior surface, including dashboard and
//                         door panels." />
//                   </ListItem>
//                   <ListItem>
//                     <DoneAllOutlinedIcon />{" "}
//                   <ListItemText  style={{marginLeft:'15px',color:'Black'}} primary=" Wiping down interior surface, including dashboard and
//                         door panels." />
//                   </ListItem>
//                   <ListItem>
//                     <DoneAllOutlinedIcon />{" "}
//                   <ListItemText  style={{marginLeft:'15px',color:'Black'}} primary=" Wiping down interior surface, including dashboard and
//                         door panels." />
//                   </ListItem>
//                   <ListItem>
//                     <DoneAllOutlinedIcon />{" "}
//                   <ListItemText  style={{marginLeft:'15px',color:'Black'}} primary=" Wiping down interior surface, including dashboard and
//                         door panels." />
//                   </ListItem>
//                 </List>
//                   </Typography>

//                   <Typography sx={{ textAlign: "left", marginLeft: "4%" ,color:'Black'}}>
//                     Expiring on: 04/10/2023
//                   </Typography>

//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       marginTop: "5%",
//                     }}
//                   >
//                     <Button
//                       variant="contained"
//                       sx={{
//                         borderRadius: "22px",
//                         background: Colors.palette.secondary.main,
//                         height: "55px",
//                         width: "150px",
//                       }}
//                     >
//                       <NavLink
//                         to="/servicelocation"
//                         style={{
//                           textDecoration: "none",
//                           color: Colors.palette.primary.main,
//                           display: "flex",
//                           alignItems: "center",
//                         }}
//                       >
//                         Book now &nbsp;
//                         <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />
//                       </NavLink>
//                     </Button>
//                   </Box>
//                 </CardContent>
//               </SubCard>
//             </Grid>
//           </Grid>
//         </Box>
//       </Container>
//     </>
//   );
// };

// export default Subscribe;

import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CardContent,
  Container,
  Grid,
  List,
  ListItemText,
  Typography,
  ListItem,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink } from "react-router-dom";
import SubCard from "../../components/card/Subscribecard";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import Axios from "../../utils/Axios";
import Colors from "../../utils/colors";

const Subscribe = () => {
  const [membershipPlans, setMembershipPlans] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("/get-membership-paln");

        setMembershipPlans([
          response.data.memberShipPlan,
          response.data.memberShipPlan,
          response.data.memberShipPlan,
        ]);
      } catch (error) {
        console.error("Error fetching membership plan data:", error);
      }
    };

    fetchData();
  }, []);

  const shadowColors = [
    Colors.palette.background.lightGreen,
    Colors.palette.secondary.yellow,
    Colors.palette.secondary.darkPurple,
  ];

  return (
    <>
      <Container>
        <Box sx={{ textAlign: "center", marginTop: "5%" }}>
          <Typography
            variant="h4"
            sx={{ marginLeft: "5%", color: Colors.palette.secondary.main }}
            gutterBottom
          >
            Most Popular Services
          </Typography>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {membershipPlans.map((plan, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <SubCard shadowColor={shadowColors[index]}>
                  <CardContent>
                    <Typography
                      variant="h4"
                      sx={{
                        textAlign: "center",
                        color: Colors.palette.secondary.main,
                      }}
                    >
                      <b>{plan.ServiceType}</b>
                      <br />
                      {plan.Amount}
                    </Typography>
                    <Typography sx={{ marginTop: "8%" }}>
                      <List>
                        {plan.CardContent.map((item, i) => (
                          <ListItem key={i}>
                            <DoneAllOutlinedIcon />{" "}
                            <ListItemText
                              style={{ marginLeft: "15px", color: "Black" }}
                            >
                              {item}
                            </ListItemText>
                            <br />
                          </ListItem>
                        ))}
                      </List>
                    </Typography>

                    <Typography
                      sx={{
                        textAlign: "left",
                        marginLeft: "4%",
                        color: "Black",
                      }}
                    >
                      Expiring on: {plan.createdAt}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "5%",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          borderRadius: "22px",
                          background: Colors.palette.secondary.main,
                          height: "55px",
                          width: "150px",
                        }}
                      >
                        <NavLink
                          to="/servicelocation"
                          style={{
                            textDecoration: "none",
                            color: Colors.palette.primary.main,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          Book now&nbsp;
                          <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />
                        </NavLink>
                      </Button>
                    </Box>
                  </CardContent>
                </SubCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Subscribe;
