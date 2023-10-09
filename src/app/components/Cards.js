import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Colors from "../utils/colors";
import { NavLink } from "react-router-dom";
import BookingCard from "./card/Bookingcard";

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
                    <ul>
                      <li>Exterior Wash, removing dust and grime.</li> <br />
                      <li>
                        Interior Vaccuming, dusting seats and carpets and floor
                        mats.
                      </li>{" "}
                      <br />
                      <li>
                        Cleaning and Polishing all windows and mirrors.
                      </li>{" "}
                      <br />
                      <li>Cleaning and Shining tires and rims.</li> <br />
                      <li>
                        Wiping down interior surface, including dashboard and
                        door panels.
                      </li>
                    </ul>
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
                    <ul>
                      <li>Exterior Wash, removing dust and grime.</li> <br />
                      <li>
                        Interior Vaccuming, dusting seats and carpets and floor
                        mats.
                      </li>{" "}
                      <br />
                      <li>
                        Cleaning and Polishing all windows and mirrors.
                      </li>{" "}
                      <br />
                      <li>Cleaning and Shining tires and rims.</li> <br />
                      <li>
                        Wiping down interior surface, including dashboard and
                        door panels.
                      </li>
                    </ul>
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
                    <ul>
                      <li>Exterior Wash, removing dust and grime.</li> <br />
                      <li>
                        Interior Vaccuming, dusting seats and carpets and floor
                        mats.
                      </li>{" "}
                      <br />
                      <li>
                        Cleaning and Polishing all windows and mirrors.
                      </li>{" "}
                      <br />
                      <li>Cleaning and Shining tires and rims.</li> <br />
                      <li>
                        Wiping down interior surface, including dashboard and
                        door panels.
                      </li>
                    </ul>
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
