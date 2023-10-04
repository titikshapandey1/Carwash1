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
import Colors from "../../utils/colors";

const Cards = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Container>
          <Grid container item spacing={2} sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
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
                  <Typography>
                    <Button
                      variant="contained"
                      sx={{
                        marginTop: "10px",
                        borderRadius: "22px",
                        bgcolor: Colors.palette.primary.darkBlue,
                        height: "55px",
                        width: "150px",
                        marginInline: "30%",
                      }}
                    >
                      Book now{" "}
                      <ArrowForwardIosIcon
                        sx={{ fontSize: "medium", marginTop: "-2px" }}
                      />
                    </Button>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card
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

                  <Typography>
                    <Button
                      variant="contained"
                      sx={{
                        marginTop: "10px",
                        borderRadius: "22px",
                        bgcolor: Colors.palette.primary.darkBlue,
                        height: "55px",
                        width: "150px",
                        marginInline: "30%",
                      }}
                    >
                      Book now{" "}
                      <ArrowForwardIosIcon
                        sx={{ fontSize: "medium", marginTop: "-2px" }}
                      />
                    </Button>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card
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
                  <Typography>
                    <Button
                      variant="contained"
                      sx={{
                        marginTop: "10px",
                        borderRadius: "22px",
                        bgcolor: Colors.palette.primary.darkBlue,
                        height: "55px",
                        width: "150px",
                        marginInline: "30%",
                      }}
                    >
                      Book now{" "}
                      <ArrowForwardIosIcon
                        sx={{ fontSize: "medium", marginTop: "-2px" }}
                      />
                    </Button>
                  </Typography>
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
