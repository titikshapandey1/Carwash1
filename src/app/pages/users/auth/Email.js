import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Container,
  TextField,
  Button,
  Box,
  Paper,
  Grid,
  Typography
} from '@mui/material';
import { NavLink } from "react-router-dom";
import Colors from "../../../utils/colors";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";


const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid Email")
      .required("Username/Email is required"),
  });

function Email() {
    const formik = useFormik({
      initialValues: {
        email: '',
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        alert('Successful!');
      },
    });


  const paperStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    borderRadius: 25,
  };
  
  const formStyle = {
    width: "100%",
    marginTop: "10%",
    textAlign: "center", 
  };

  const submitButtonStyle = {
    marginTop: "20px",
    marginBottom: "20px",
    padding: "15px",
    borderRadius: 5,
    // display:'flex',
    alignItems: "center",
  };
  return (
    <>
          <Box
        sx={{
          background:
            "radial-gradient(circle at 100% 100%, #023159, #1F476A, #F5F5F5)",
          height: "100vh",
          width: "100vw",
          display: "flex",
       
        }}
      >
          <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
   
       <Container maxWidth="sm">
            <Grid container>
              <Paper
                elevation={3}
                style={paperStyle}
                sx={{
                  width: "100%",
                  background: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))`,
                }}
              >
                 <Box style={{ display: "flex" }}>
                <Button
                  sx={{
                    color: Colors.palette.secondary.main,
                    justifyContent: "flex-start",
                  }}
                >
                  <NavLink
                    to="/login"
                    style={{
                      textDecoration: "none",
                      color: Colors.palette.secondary.main,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ArrowBackIosIcon sx={{ fontSize: "20px" }} />
                  </NavLink>
                </Button>
              </Box>
        <form 
         style={formStyle}
         noValidate
         onSubmit={formik.handleSubmit}>
           
           <Typography variant="h5"
                    sx={{
                      color: Colors.palette.secondary.main,
                      flex: 0.8,
                      textAlign: "center",
                    }}
                  >
                 Enter Email Address
                  </Typography>
          <TextField
            fullWidth
            id="email"
            name="email"
            size='small'
            label="Email"
            type='email'
            sx={{marginTop:'20px'
        
        }}

            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
           
            
          />
          
             <Button
                  type="submit"
                  variant="contained"
                  sx={{ ...submitButtonStyle }}
                >
                  <NavLink
                    to="/otp"
                    style={{
                      textDecoration: "none",
                      color: Colors.palette.primary.main,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Submit <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                  </NavLink>
                </Button>
        </form>
        <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "16px",
                  justifyContent: "center",
                  alignItems: "center",
                  color: Colors.palette.secondary.main,
                }}
              >
               <h5>Already have an account?&nbsp;&nbsp;</h5> 
                <NavLink
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: Colors.palette.secondary.main,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {" "}
                 <h5>Login</h5> 
                </NavLink>
              </Box>
        </Paper>
        </Grid>
        </Container>
        </Box>
      </Box>
      </>
  );
}

export default Email;
