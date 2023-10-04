import React, { useState } from 'react';
import { Grid, Paper,Button, Typography, Box,Container,TextField} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import car1 from "../assests/images/car1guest.png"
import { blue } from '@mui/material/colors';



function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "", 
  });
  const [formErrors, setFormErrors] = useState({});

  const paperStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    background:
    "linear-gradient(30deg, #FFFFFF 30%, #B3A8A8 70%)",
    borderRadius: 25,
    opacity: ".8",
  };

  const formStyle = {
    width: "100%",
    marginTop: "10%",
    // position: "center",
    // height:"100%",
    
  };

  const submitButtonStyle = {
    margin: "20px 0",
    // width: '450px',
    borderRadius: 15,
    display: "block",
    textAlign: "center",
    marginTop: "5%",
    marginLeft: { xs: "20%", sm: "30%" },
  };

  const img = {
    backgroundImage: `url(${car1})`,
    backgroundPosition: "center",
    backgroundSize: 'contain', 
    backgroundRepeat: 'no-repeat',
    borderRadius: 50,
    height: "100%",
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.username) {
      errors.username = "Username/Email is required";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length === 0) {
      // Add auth logic
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#023159",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            height: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            <Box sx={{
                width: '80%',
                height: '80%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
             <Container component="main" maxWidth="xs" >
                    <Grid container style={img}>
                        <Paper elevation={10} style={paperStyle} sx={{width:"100%"}}>
                            <Button justifyContent={"inherit"}>
                                <b>{"<"}</b>
                            </Button>
                            <Typography variant="h4" sx={{ color: blue }}>
                                Log in
                            </Typography>
         
                        <form style={formStyle} onSubmit={handleFormSubmit} >
                               <TextField
                               fullWidth
                                   label="Username/Email"
                                    name="username"
                                     value={formData.username}
                                    onChange={handleFormChange}
                                     error={!!formErrors.username}
                                     helperText={formErrors.username}
                                 />
                                 <TextField
                               fullWidth
                                     
                                     label="Password"
                                     name="password"
                                     value={formData.password}
                                    onChange={handleFormChange}
                                     error={!!formErrors.password}
                                    helperText={formErrors.password}
                                 />
                                 <Typography sx={{ color: "#013C6B", display: "flex", mt: "1rem" }}>
                                    <LockIcon />
                                   Forgot Password ?
                                 </Typography>
                                
                                 <Box align="center">
                                    <Button
                                         type="submit"
                                         fullWidth
                                         variant="contained"
                                         style={{ ...submitButtonStyle, backgroundColor: blue }}
                                     >
                                         Login
                                     </Button>
                                 </Box>
                                 <Box align="center">
                                    <Typography sx={{ color: blue }}>
                                        Don't have an account? <span style={{ color: "#0061AE" }}>
                                             Register here
                                         </span>
                                     </Typography>
                              </Box>
                        </form>
                    </Paper>
                </Grid>
                </Container>
                </Box>
           
        </Box> 
        </Box>
      </>
    );
}

export default Login;
