import React from "react";
import {
  Box,
  Button,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Colors from "../../utils/colors";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink } from "react-router-dom";
import SubCard from "../../components/card/Subscribecard";

const Subscribe = () => {
  return (
    <>
      <Container>
        <Box sx={{ textAlign: "center", marginTop: "5%", marginBottom: "8%" }}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={6} md={4}>
              <SubCard
                sx={{
                  borderRadius: "20px",
                  background: Colors.palette.primary.main,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h4"
                    sx={{
                      textAlign: "center",
                      color: Colors.palette.secondary.main,
                    }}
                  >
                    <b> Basic </b>
                    <br />₹ 1199 / month
                  </Typography>
                  <Typography sx={{ marginTop: "8%" }}>
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

                  <Typography sx={{ textAlign: "left", marginLeft: "4%" }}>
                    Expiring on: 04/10/2023
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
                        Book now &nbsp;
                        <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />
                      </NavLink>
                    </Button>
                  </Box>
                </CardContent>
              </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <SubCard
                sx={{
                  borderRadius: "20px",
                  background: Colors.palette.primary.main,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h4"
                    sx={{
                      textAlign: "center",
                      color: Colors.palette.secondary.main,
                    }}
                  >
                    <b>{/* hlo */} Gold </b> <br />₹ 1499 / month
                  </Typography>
                  <Typography sx={{ marginTop: "8%" }}>
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

                  <Typography sx={{ textAlign: "left", marginLeft: "4%" }}>
                    Expiring on: 04/10/2023
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
                        Book now &nbsp;
                        <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />
                      </NavLink>
                    </Button>
                  </Box>
                </CardContent>
              </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <SubCard
                sx={{
                  borderRadius: "20px",
                  background: Colors.palette.primary.main,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h4"
                    sx={{
                      textAlign: "center",
                      color: Colors.palette.secondary.main,
                    }}
                  >
                    <b> Platinum </b> <br />₹ 2199 / month
                  </Typography>
                  <Typography sx={{ marginTop: "8%" }}>
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

                  <Typography sx={{ textAlign: "left", marginLeft: "4%" }}>
                    Expiring on: 04/10/2023
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
                        Book now &nbsp;
                        <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />
                      </NavLink>
                    </Button>
                  </Box>
                </CardContent>
              </SubCard>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Subscribe;
