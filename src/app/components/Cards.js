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
  ListItemText
} from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Colors from "../utils/colors";
import { NavLink } from "react-router-dom";
import BookingCard from "./card/Bookingcard";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";

const Cards = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Container>
          <Grid container item spacing={2} sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={6} md={4}>
              <BookingCard
                sx={{
                  borderRadius: "20px",
                  bgcolor: Colors.palette.primary.main,
                }}
              >
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
                      {" "}
                      Routine Clean
                      <br />₹ 499
                    </b>
                  </Typography>
                  <Typography>
                  
                     <List >
                  <ListItem >
                      <DoneAllOutlinedIcon />
                    <ListItemText style={{marginLeft:'15px'}}primary="Exterior Wash, removing dust and grime." />
                  </ListItem>
                  <ListItem>
                    
                      <DoneAllOutlinedIcon />
                  
                    <ListItemText style={{marginLeft:'15px'}} primary="Interior Vacuuming, dusting seats and carpets and floor mats." />
                  </ListItem>
                  <ListItem>
           
                      <DoneAllOutlinedIcon />
                   
                    <ListItemText style={{marginLeft:'15px'}} primary="Cleaning and Polishing all windows and mirrors." />
                  </ListItem>
                  <ListItem>
                   
                      <DoneAllOutlinedIcon />
                  
                    <ListItemText style={{marginLeft:'15px'}} primary="Cleaning and Shining tires and rims." />
                  </ListItem>
                  <ListItem>
                
                      <DoneAllOutlinedIcon />
                
                    <ListItemText style={{marginLeft:'15px'}} primary="Wiping down interior surfaces, including dashboard and door panels." />
                  </ListItem>
                </List>
                  </Typography>{" "}
                  <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Button
                      variant="contained"
                      sx={{
                        marginTop: "10px",
                        borderRadius: "22px",
                        bgcolor: Colors.palette.secondary.main,
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
                        Book now &nbsp;
                        <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />
                      </NavLink>
                    </Button>
                  </Box>
                </CardContent>
              </BookingCard>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <BookingCard
                sx={{
                  borderRadius: "20px",
                  bgcolor: Colors.palette.primary.main,
                }}
              >
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
                      {" "}
                      Routine Clean
                      <br />₹ 499
                    </b>
                  </Typography>
                  <Typography>
                  <List >
                  <ListItem >
                      <DoneAllOutlinedIcon />
                    <ListItemText style={{marginLeft:'15px'}}primary="Exterior Wash, removing dust and grime." />
                  </ListItem>
                  <ListItem>
                    
                      <DoneAllOutlinedIcon />
                  
                    <ListItemText style={{marginLeft:'15px'}} primary="Interior Vacuuming, dusting seats and carpets and floor mats." />
                  </ListItem>
                  <ListItem>
           
                      <DoneAllOutlinedIcon />
                   
                    <ListItemText style={{marginLeft:'15px'}} primary="Cleaning and Polishing all windows and mirrors." />
                  </ListItem>
                  <ListItem>
                   
                      <DoneAllOutlinedIcon />
                  
                    <ListItemText style={{marginLeft:'15px'}} primary="Cleaning and Shining tires and rims." />
                  </ListItem>
                  <ListItem>
                
                      <DoneAllOutlinedIcon />
                
                    <ListItemText style={{marginLeft:'15px'}} primary="Wiping down interior surfaces, including dashboard and door panels." />
                  </ListItem>
                </List>
                  </Typography>

                  <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Button
                      variant="contained"
                      sx={{
                        marginTop: "10px",
                        borderRadius: "22px",
                        bgcolor: Colors.palette.secondary.main,
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
                        Book now &nbsp;
                        <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />
                      </NavLink>
                    </Button>
                  </Box>
                </CardContent>
              </BookingCard>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <BookingCard
                sx={{
                  borderRadius: "20px",
                  bgcolor: Colors.palette.primary.main,
                }}
              >
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
                      {" "}
                      Routine Clean
                      <br />₹ 499
                    </b>
                  </Typography>
                  <Typography>
                   <List >
                  <ListItem >
                      <DoneAllOutlinedIcon />
                    <ListItemText style={{marginLeft:'15px'}}primary="Exterior Wash, removing dust and grime." />
                  </ListItem>
                  <ListItem>
                    
                      <DoneAllOutlinedIcon />
                  
                    <ListItemText style={{marginLeft:'15px'}} primary="Interior Vacuuming, dusting seats and carpets and floor mats." />
                  </ListItem>
                  <ListItem>
           
                      <DoneAllOutlinedIcon />
                   
                    <ListItemText style={{marginLeft:'15px'}} primary="Cleaning and Polishing all windows and mirrors." />
                  </ListItem>
                  <ListItem>
                   
                      <DoneAllOutlinedIcon />
                  
                    <ListItemText style={{marginLeft:'15px'}} primary="Cleaning and Shining tires and rims." />
                  </ListItem>
                  <ListItem>
                
                      <DoneAllOutlinedIcon />
                
                    <ListItemText style={{marginLeft:'15px'}} primary="Wiping down interior surfaces, including dashboard and door panels." />
                  </ListItem>
                </List>
                  </Typography>{" "}
                  <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Button
                      variant="contained"
                      sx={{
                        marginTop: "10px",
                        borderRadius: "22px",
                        bgcolor: Colors.palette.secondary.main,
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
                        Book now &nbsp;
                        <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />
                      </NavLink>
                    </Button>
                  </Box>
                </CardContent>
              </BookingCard>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default Cards;
