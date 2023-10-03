
import React from 'react';
import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
} from '@mui/material';
import car1 from "../../assests/images/car1guest.png"


function RegisterPage() {
  const paperStyle = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    
  };

  const formStyle = {
    width: '100%', // Full width
    marginTop: '10%',
  };

  const submitButtonStyle = {
     margin: '20px 0',
    width: '150px', // Adjust the width as needed
  borderRadius: '10px', // Adjust the border radius as needed
  //margin: '0 auto', // Center the button horizontally
  display: 'block', // Ensure the button takes up the full width of its container
  textAlign: 'center',
  marginTop:"5%" ,
  marginLeft:{xs:"20%",sm:"30%"}
  };
  const img={
    backgroundImage: `url(${car1})`,
    backgroundPosition: 'center', // Center the background image
  backgroundSize: 'cover',      // Make the background image cover the container



  };

  return (
    <Box
      sx={{
        backgroundImage: 'url("your-background-image-url.jpg")',
        backgroundColor: '#023159',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Grid container style={img}>
          <Paper elevation={3} style={paperStyle} >
            <Button sx={{ marginLeft: '-80%', fontSize: '800' }}>
              <b>{"<"}Log in</b>
            </Button>
            <Typography variant="h6">Enter your credentials here:</Typography>
            <form style={formStyle} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    name="firstName"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="contactNumber"
                    label="Contact Number"
                    name="contactNumber"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="alternateNumber"
                    label="Alternate Number"
                    name="alternateNumber"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                  />
                </Grid>
                <Grid item xs={12}>
                <Typography variant='h4'>Address<br/></Typography>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="Locality / Building / Street / Society"
                    label="Locality / Building / Street / Society"
                    name="Locality / Building / Street / Society"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="city/Town"
                    label="City / Town  District"
                    name="city/Town"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id=" District"
                    label=" District"
                    name=" District"
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="State"
                    label="State"
                    name="State"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="Pincode"
                    label=" Pincode"
                    name="Pincode"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={submitButtonStyle}
              >
              submit
              </Button>
            </form>
          </Paper>
        </Grid>
      </Container>
    </Box>
  );
}

export default RegisterPage;



