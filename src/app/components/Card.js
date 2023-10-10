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
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import OurServices from "../components/OurServices";
import Colors from "../utils/colors";
import { NavLink } from "react-router-dom";
import BookingCard from "./card/Bookingcard";

const Card1 = () => {
  return (
    <>
      <OurServices />
      <Container sx={{ marginTop: "3%" }}>
        <Grid container item spacing={2} justifyContent="center">
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
                    <br />₹ 199
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
                    Dry Clean
                    <br />₹ 799
                  </b>
                </Typography>
                <Typography>
                
             <List >
                  <ListItem >
                      <DoneAllOutlinedIcon />
                    <ListItemText style={{marginLeft:'15px'}}primary=" Cleaning of the exterior removing dirt, dust, and grime." />
                  </ListItem>
                  <ListItem>
                    
                      <DoneAllOutlinedIcon />
                  
                    <ListItemText style={{marginLeft:'15px'}} primary=" Vacuuming, wiping, and sanitizing interior, including
                      seats, dashboard, and windows." />
                  </ListItem>
                  <ListItem>
           
                      <DoneAllOutlinedIcon />
                   
                    <ListItemText style={{marginLeft:'15px'}} primary=" Specialized cleaning of seats, carpets, and fabric
                      surfaces to remove stains and odors." />
                  </ListItem>
                  <ListItem>
                   
                      <DoneAllOutlinedIcon />
                  
                    <ListItemText style={{marginLeft:'15px'}} primary=" Application of protective coatings or sealants to maintain
                      the car's paint finish." />
                  </ListItem>
                  <ListItem>
                
                      <DoneAllOutlinedIcon />
                
                    <ListItemText style={{marginLeft:'15px'}} primary=" Fine detailing work, polishing, waxing, and tire cleaning." />
                  </ListItem>
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
              <CardContent sx={{outline:'bold'}}>
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
                    Deep Clean
                    <br />₹ 999
                  </b>
                </Typography>
                <Typography>
               
                   <List >
                  <ListItem >
                      <DoneAllOutlinedIcon />
                    <ListItemText style={{marginLeft:'15px'}}primary="Thorough cleaning of seats, carpets, and upholstery" />
                  </ListItem>
                  <ListItem>
                    
                      <DoneAllOutlinedIcon />
                  
                    <ListItemText style={{marginLeft:'15px'}} primary="Cleaning, waxing, and polishing the car's exterior." />
                  </ListItem>
                  <ListItem>
           
                      <DoneAllOutlinedIcon />
                   
                    <ListItemText style={{marginLeft:'15px'}} primary="Removing dirt and grime from the engine compartment." />
                  </ListItem>
                  <ListItem>
                   
                      <DoneAllOutlinedIcon />
                  
                    <ListItemText style={{marginLeft:'15px'}} primary="Detailed cleaning and tire dressing" />
                  </ListItem>
                  <ListItem>
                
                      <DoneAllOutlinedIcon />
                
                    <ListItemText style={{marginLeft:'15px'}} primary="  Ensuring windows and mirrors are streak-free for
                      visibility and safety." />
                  </ListItem>
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
    </>
  );
};

export default Card1;
