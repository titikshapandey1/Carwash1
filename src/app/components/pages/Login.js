import React, { useState } from 'react';
import { Grid, Paper,TextField, Button, Typography, Box, Link,Container} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import car1 from "../../images/car1guest.png";
import { blue } from '@mui/material/colors';
// import {Link} from '@mui/material';
function RectangleTextField({ label, name, value, onChange, error, helperText }) {
    return (
        <div style={{
            width: '100%',
            background: 'rgba(255, 255, 255, 0.7)',
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '10px',
        }}>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={label}
                style={{
                    width: '90%',
                    border: 'solid',
                    borderColor:"darkblue",
                    // outline: 'solid',
                    background: 'transparent',
                    fontSize: '20px',
                }}
            />
            {error && <p style={{ color: 'red', fontSize: '12px' }}>{helperText}</p>}
        </div>
    );
}

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [formErrors, setFormErrors] = useState({});

    const paperStyle = {
        padding: '20px',
        display: 'inherit',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius:25,
        // backdropFilter: "blur(100%)"
        // backgroundImage: `url(${car1})`,
        opacity:".8"
    };

    const formStyle = {
        width: '100%',
        marginTop: '10%',
position:'center'
        // height:"100%",
        // width:"100%",
      
        
    };

    const submitButtonStyle = {
        margin: '20px 0',
        // width: '450px',
        borderRadius: 15,
        display: 'block',
        textAlign: 'center',
        marginTop: "5%",
        marginLeft: { xs: "20%", sm: "30%" }
    };

    const img = {
        backgroundImage: `url(${car1})`,
        backgroundPosition: 'center',
        borderRadius:50
        // backgroundSize: 'cover',
       
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        if (!formData.username) {
            errors.username = 'Username/Email is required';
        }

        if (!formData.password) {
            errors.password = 'Password is required';
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
                backgroundColor: '#023159',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
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
                        <Paper elevation={3} style={paperStyle} sx={{width:"100%"}}>
                            <Button justifyContent={"inherit"}>
                                <b>{"<"}</b>
                            </Button>
                            <Typography variant="h4" sx={{ color: blue }}>
                                Log in
                            </Typography>
         
                        <form style={formStyle} noValidate onSubmit={handleFormSubmit}>
                               <RectangleTextField
                                   label="Username/Email"
                                    name="username"
                                     value={formData.username}
                                    onChange={handleFormChange}
                                     error={!!formErrors.username}
                                     helperText={formErrors.username}
                                 />
                                 <RectangleTextField
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
                                 {/* <Box align="center">
                                  <Button
                                         type="submit"
                                        fullWidth
                                        variant="contained"
                                         style={{ ...submitButtonStyle, backgroundColor: blue }}
                                     >
                                        Login
                                     </Button>
                                 </Box> */}
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
      </>
    );
}

export default Login;

