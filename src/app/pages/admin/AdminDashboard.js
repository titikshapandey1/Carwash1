import React from "react";
import AdminDash from "../../components/AdDash";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { Box, Typography, Grid } from "@mui/material";
import Colors from "../../utils/colors";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";

const cardStyle = {
  borderRadius: "10px",
  boxShadow: "2px 2px 2px grey",
};

const headingStyles = {
  color: Colors.palette.secondary.main,
  fontWeight: "600",
};

const subHeading = {
  color: Colors.palette.secondary.main,
};

const iconBoxStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
};
const iconsStyles = {
  padding: "2px",
  color: Colors.palette.primary.main,
  backgroundColor: Colors.palette.secondary.main,
  borderRadius: "50%",
  border: `2px solid ${Colors.palette.secondary.main}`,
};

const AdminDashboard = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        // alignItems="center"
        justifyContent="center"
        sx={{
          maxWidth: 950,
          borderRadius: "20px",
          background: Colors.palette.secondary.cardBackground,
          padding: "20px",
          marginLeft: { xs: "1%", sm: "5%", md: "30%", lg: "20%" },
          marginTop: { xs: "23%", sm: "13%", md: "10%", lg: "8%" },
          marginRight: { xs: "1%", sm: "3%" },
        }}
      >
        <AdminDash />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            marginLeft: { xs: "2%", sm: "3%" },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <Card sx={{ maxWidth: { xs: 700, md: 410 }, ...cardStyle }}>
                <CardActionArea>
                  <CardContent>
                    <Box sx={iconBoxStyles}>
                      <AccountBalanceRoundedIcon sx={iconsStyles} />
                    </Box>
                    <Typography variant="h4" component="div" sx={headingStyles}>
                      24{" "}
                    </Typography>
                    <Typography variant="body1" sx={subHeading}>
                      Successful
                      <br /> Payments
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Card sx={{ maxWidth: { xs: 700, md: 400 }, ...cardStyle }}>
                <CardActionArea>
                  <CardContent>
                    <Box sx={iconBoxStyles}>
                      <AccountBalanceRoundedIcon sx={iconsStyles} />
                    </Box>
                    <Typography variant="h4" component="div" sx={headingStyles}>
                      9
                    </Typography>
                    <Typography variant="body1" sx={subHeading}>
                      Unsuccessful <br /> Payments
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            marginLeft: { xs: "2%", sm: "3%" },
            marginTop: { xs: "7%", sm: "2%" },
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} md={4}>
              <Card sx={{ maxWidth: { xs: 700, md: 250 }, ...cardStyle }}>
                <CardActionArea>
                  <CardContent>
                    <Box sx={iconBoxStyles}>
                      <PeopleAltOutlinedIcon sx={iconsStyles} />
                    </Box>
                    <Typography variant="h4" component="div" sx={headingStyles}>
                      7
                    </Typography>
                    <Typography variant="body1" sx={subHeading}>
                      User <br /> Requests
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Card sx={{ maxWidth: { xs: 700, md: 250 }, ...cardStyle }}>
                <CardActionArea>
                  <CardContent>
                    <Box sx={iconBoxStyles}>
                      <PeopleAltOutlinedIcon sx={iconsStyles} />
                    </Box>
                    <Typography variant="h4" component="div" sx={headingStyles}>
                      33
                    </Typography>
                    <Typography variant="body1" sx={subHeading}>
                      Active <br /> Users
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Card sx={{ maxWidth: { xs: 700, md: 250 }, ...cardStyle }}>
                <CardActionArea>
                  <CardContent>
                    <Box sx={iconBoxStyles}>
                      <PeopleAltOutlinedIcon sx={iconsStyles} />
                    </Box>
                    <Typography variant="h4" component="div" sx={headingStyles}>
                      5
                    </Typography>
                    <Typography variant="body1" sx={subHeading}>
                      Declined <br /> Users
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            marginLeft: { xs: "2%", sm: "3%" },
            marginTop: { xs: "7%", sm: "2%" },
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={8} sm={8} md={10}>
              <Card
                sx={{
                  maxWidth: 800,
                  // marginTop: { xs: "7%", sm: "2%" },
                  ...cardStyle,
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <AccountCircleOutlinedIcon
                      sx={{
                        ...iconsStyles,
                        marginLeft: { xs: "85%", sm: "95%" },
                      }}
                    />
                    <Typography variant="h4" component="div" sx={headingStyles}>
                      12 <span style={{ fontSize: "0.4em" }}>Supervisors</span>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={4} sm={4} md={2}>
              <Card
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  boxShadow: "2px 2px 2px grey",
                  textAlign: "center",
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <span style={{ fontSize: "16px" }}>Add +</span>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default AdminDashboard;
