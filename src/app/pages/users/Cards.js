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

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Cards = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Container>
          <Grid container item spacing={2} sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ borderRadius: "20px", bgcolor: " #FFFFFF" }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      marginTop: "5%",
                      textAlign: "center",
                      color: " #013C6B",
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
                  <br /> <br />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ borderRadius: "20px", bgcolor: "#FFFFFF" }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      marginTop: "5%",
                      textAlign: "center",
                      color: " #013C6B",
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
                  <br /> <br />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ borderRadius: "20px", bgcolor: "#FFFFFF" }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      marginTop: "5%",
                      textAlign: "center",
                      color: " #013C6B",
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
                  <br /> <br />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default Cards;
