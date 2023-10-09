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
                  <ul>
                    <li>Exterior Wash, removing dirt, dust, and grime.</li>{" "}
                    <br />
                    <li>
                      Interior Vacuuming, dusting seats and carpets and floor
                      mats.
                    </li>{" "}
                    <br />
                    <li>
                      Cleaning and Polishing all windows and mirrors.
                    </li>{" "}
                    <br />
                    <li>Cleaning and Shining tires and rims.</li> <br />
                    <li>
                      Wiping down interior surface, including dashboard and door
                      panels.
                    </li>
                  </ul>
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
                  <ul>
                    <li>
                      Cleaning of the exterior removing dirt, dust, and grime.
                    </li>{" "}
                    <br />
                    <li>
                      Vacuuming, wiping, and sanitizing interior, including
                      seats, dashboard, and windows.
                    </li>{" "}
                    <br />
                    <li>
                      Specialized cleaning of seats, carpets, and fabric
                      surfaces to remove stains and odors.
                    </li>{" "}
                    <br />
                    <li>
                      Application of protective coatings or sealants to maintain
                      the car's paint finish.
                    </li>{" "}
                    <br />
                    <li>
                      Fine detailing work, polishing, waxing, and tire cleaning.
                    </li>
                  </ul>
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
                    Deep Clean
                    <br />₹ 999
                  </b>
                </Typography>
                <Typography>
                  <ul>
                    <li>Thorough cleaning of seats, carpets, and upholstery</li>{" "}
                    <br />
                    <li>
                      Cleaning, waxing, and polishing the car's exterior.
                    </li>{" "}
                    <br />
                    <li>
                      Removing dirt and grime from the engine compartment.
                    </li>{" "}
                    <br />
                    <li>Detailed cleaning and tire dressing</li> <br />
                    <li>
                      Ensuring windows and mirrors are streak-free for
                      visibility and safety.
                    </li>
                  </ul>
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
