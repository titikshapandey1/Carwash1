// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Container,
//   Grid,
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
// } from "@mui/material";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";

// import Colors from "../utils/colors";
// import { NavLink } from "react-router-dom";
// import BookingCard from "./card/Bookingcard";
// import Axios from "../utils/Axios";

// const Card1 = () => {
//   const [servicePlan, setServicePlan] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await Axios.get("/get-service-plan");
//         setServicePlan(response.data.serviceplans);
//       } catch (error) {
//         console.error("Error fetching service plan data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const duplicatedData = Array.from({ length: 3 }, (_, index) => ({
//     id: index,
//     ...servicePlan,
//   }));

//   const shadowColors = [
//     Colors.palette.background.lightGreen,
//     Colors.palette.secondary.yellow,
//     Colors.palette.secondary.darkPurple,
//   ];

//   return (
//     <>
//       <Container sx={{ mt: 5 }}>
//         <Grid container item spacing={2} justifyContent="center">
//           {duplicatedData.map((data, index) => (
//             <Grid key={data.id} item xs={12} sm={6} md={4}>
//               <BookingCard shadowColor={shadowColors[index]}>
//                 <CardContent>
//                   <Typography
//                     variant="h5"
//                     sx={{
//                       marginTop: "5%",
//                       textAlign: "center",
//                       color: Colors.palette.secondary.main,
//                     }}
//                   >
//                     <b>
//                       {data.ServiceType}
//                       <br />
//                       {data.Amount}
//                     </b>
//                   </Typography>
//                   <Typography>
//                     <List>
//                       {data.CardContent &&
//                         data.CardContent.map((item, i) => (
//                           <ListItem key={i}>
//                             <DoneAllOutlinedIcon />
//                             <ListItemText
//                               style={{ marginLeft: "15px", color: "Black" }}
//                               primary={item}
//                             />
//                           </ListItem>
//                         ))}
//                     </List>
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
//                         to="/services"
//                         style={{
//                           textDecoration: "none",
//                           color: Colors.palette.primary.main,
//                           display: "flex",
//                           alignItems: "center",
//                         }}
//                       >
//                         Book now&nbsp;
//                         <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />
//                       </NavLink>
//                     </Button>
//                   </Box>
//                 </CardContent>
//               </BookingCard>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </>
//   );
// };

// export default Card1;

import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";

import Colors from "../utils/colors";
import { NavLink } from "react-router-dom";
import BookingCard from "./card/Bookingcard";
import Axios from "../utils/Axios";

const Card1 = () => {
  const [servicePlans, setServicePlans] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("/get-service-plan");
        setServicePlans([
          response.data.serviceplans,
          response.data.serviceplans,
          response.data.serviceplans,
        ]);
      } catch (error) {
        console.error("Error fetching service plan data:", error);
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
      <Container sx={{ mt: 5 }}>
        <Grid container item spacing={2} justifyContent="center">
          {servicePlans.map((data, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <BookingCard shadowColor={shadowColors[index]}>
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      marginTop: "5%",
                      textAlign: "center",
                      color: Colors.palette.secondary.main,
                    }}
                  >
                    <b>
                      {data?.ServiceType}
                      <br />
                      {data?.Amount}
                    </b>
                  </Typography>
                  <Typography>
                    <List>
                      {data?.CardContent &&
                        data.CardContent.map((item, i) => (
                          <ListItem key={i}>
                            <DoneAllOutlinedIcon />
                            <ListItemText
                              style={{ marginLeft: "15px", color: "Black" }}
                              primary={item}
                            />
                          </ListItem>
                        ))}
                    </List>
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
                        to="/services"
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
              </BookingCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Card1;
