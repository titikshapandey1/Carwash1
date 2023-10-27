import React, { useEffect, useState } from "react";
import SupDash from "../../components/SupDash";
import Table from "../../components/Table";
import Colors from "../../utils/colors";
import { Container, Grid, Paper, Typography, Box } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Axios from "../../utils/Axios";

const SupUserAct = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchProfileData = async () => {
    setLoading(true);
    try {
      const response = await Axios.get(
        "/getUserData/6527aa4e881d3d3be4b5990a"
      );
      console.log("Response Data:", response.data.data);
      setUserData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const paperStyle = {
    position: "relative",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginTop: "0.5%",
  };

  const formStyle = {
    width: "100%",
    marginTop: "3%",
  };
  return (
    <>
      <Box
        display="block"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        className="wrapper"
      >
        <SupDash />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundColor: " #F5F5F5",
            height: "100%",
            marginTop: { xs: "15%", sm: "10%", md: "5%" },
            marginLeft: { sm: "0%", md: "21.5%", lg: "17%" },
          }}
        >
          <Container component="main" maxWidth="sm">
            <Grid container sx={{ marginBlock: "20%" }}>
              <Paper
                elevation={10}
                style={paperStyle}
                sx={{ borderRadius: "30px" }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-10px",
                    left: "0",
                    right: "0",
                    width: "100%",
                    height: "30%",
                    backgroundColor: Colors.palette.secondary.main,
                    borderRadius: "0 0 40% 40%",
                  }}
                ></div>
                <Box
                  sx={{
                    display: "flex",
                    position: "relative",
                    marginBottom: "2rem",
                    marginTop: "5%",
                  }}
                >
                  <CircleIcon
                    sx={{
                      backgroundColor: Colors.palette.secondary.lightGrey,
                      fontSize: "200px",
                      color: Colors.palette.secondary.lightGrey,
                      position: "relative",
                      borderRadius: "60%",
                      border: `2px solid ${Colors.palette.secondary.main}`,
                    }}
                  />
                </Box>

                {loading ? (
                  <Typography>Loading</Typography>
                ) : (
                  <form style={formStyle} noValidate>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography sx={{ margin: "15px", color: "red" }}>
                          {userData.firstName} {userData.surName}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography sx={{ margin: "15px" }}>
                          {userData.mobileNumber}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography sx={{ margin: "15px" }}>
                          {userData.alternateNumber}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography sx={{ margin: "15px" }}>
                          {userData.userName}
                        </Typography>
                      </Grid>

                      <Grid item xs={12}>
                        <Typography variant="h6">
                          Address
                          <br />
                        </Typography>
                      </Grid>

                      <Grid item xs={12}>
                        <Typography sx={{ margin: "15px" }}>
                          {userData.address && userData.address.locality}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography sx={{ margin: "15px" }}>
                          {userData.address && userData.address.city}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography sx={{ margin: "15px" }}>
                          {userData.address && userData.address.district}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={8}>
                        <Typography sx={{ margin: "15px" }}>
                          {userData.address && userData.address.state}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Typography sx={{ margin: "15px" }}>
                          {userData.address && userData.address.pincode}
                        </Typography>
                      </Grid>
                    </Grid>
                  </form>
                )}
              </Paper>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default SupUserAct;
