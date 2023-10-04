
// import React from 'react';
// import {
//   Container,
//   Grid,
//   Paper,
//   TextField,
//   Button,
//   Typography,
//   Box,
// } from '@mui/material';
// import car1 from "../../assests/images/car1guest.png"


// function RegisterPage() {
//   const paperStyle = {
//     padding: '20px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     width: '100%',
    
//   };

//   const formStyle = {
//     width: '100%', // Full width
//     marginTop: '10%',
//   };

//   const submitButtonStyle = {
//      margin: '20px 0',
//     width: '150px', // Adjust the width as needed
//   borderRadius: '10px', // Adjust the border radius as needed
//   //margin: '0 auto', // Center the button horizontally
//   display: 'block', // Ensure the button takes up the full width of its container
//   textAlign: 'center',
//   marginTop:"5%" ,
//   marginLeft:{xs:"20%",sm:"30%"}
//   };
//   const img={
//     backgroundImage: `url(${car1})`,
//     backgroundPosition: 'center', // Center the background image
//   backgroundSize: 'cover',      // Make the background image cover the container



//   };

//   return (
//     <Box
//       sx={{
//         backgroundImage: 'url("your-background-image-url.jpg")',
//         backgroundColor: '#023159',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '100%',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <Container component="main" maxWidth="xs">
//         <Grid container style={img}>
//           <Paper elevation={3} style={paperStyle} >
//             <Button sx={{ marginLeft: '-80%', fontSize: '800' }}>
//               <b>{"<"}Log in</b>
//             </Button>
//             <Typography variant="h6">Enter your credentials here:</Typography>
//             <form style={formStyle} noValidate>
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     variant="outlined"
//                     required
//                     fullWidth
//                     id="firstName"
//                     placeholder="First Name"
//                     name="firstName"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     variant="outlined"
//                     required
//                     fullWidth
//                     id="lastName"
//                     placeholder="Last Name"
//                     name="lastName"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     variant="outlined"
//                     required
//                     fullWidth
//                     id="contactNumber"
//                     placeholder="Contact Number"
//                     name="contactNumber"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     variant="outlined"
//                     fullWidth
//                     id="alternateNumber"
//                     placeholder="Alternate Number"
//                     name="alternateNumber"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     variant="outlined"
//                     required
//                     fullWidth
//                     id="email"
//                     placeholder="Email Address"
//                     name="email"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                 <Typography variant='h4'>Address<br/></Typography>
//                 </Grid>

//                 <Grid item xs={12}>
//                   <TextField
//                     variant="outlined"
//                     required
//                     fullWidth
//                     id="Locality / Building / Street / Society"
//                     placeholder="Locality / Building / Street / Society"
//                     name="Locality / Building / Street / Society"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     variant="outlined"
//                     required
//                     fullWidth
//                     id="city/Town"
//                     placeholder="City / Town  District"
//                     name="city/Town"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     variant="outlined"
//                     required
//                     fullWidth
//                     id=" District"
//                     placeholder=" District"
//                     name=" District"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={8}>
//                   <TextField
//                     variant="outlined"
//                     required
//                     fullWidth
//                     id="State"
//                     placeholder="State"
//                     name="State"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={4}>
//                   <TextField
//                     variant="outlined"
//                     required
//                     fullWidth
//                     id="Pincode"
//                     placeholder=" Pincode"
//                     name="Pincode"
//                   />
//                 </Grid>
//               </Grid>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 style={submitButtonStyle}
//               >
//               submit
//               </Button>
//             </form>
//           </Paper>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

// export default RegisterPage;



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
import car1 from '../../assests/images/car1guest.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";


function RegisterPage() {
  const paperStyle = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  };
  const formStyle = {
    width: "100%",
    marginTop: "10%",
    position: "center",
    // height:"100%",
    // width:"100%",
  };
  // const formStyle = {
  //   width: '100%', // Full width
  //   marginTop: '10%',
  // };

  // const submitButtonStyle = {
  //   margin: '20px 0',
  //   width: '150px',
  //   borderRadius: '10px',
  //   display: 'block',
  //   textAlign: 'center',
  //   marginTop: '5%',
  //   marginLeft: { xs: '20%', sm: '30%' },
  // };
  const submitButtonStyle = {
    margin: "20px 0",
    // width: '450px',
    borderRadius: 15,
    display: "block",
    textAlign: "center",
    marginTop: "5%",
    marginLeft: { xs: "20%", sm: "30%" },
  };
  // const img = {
  //   backgroundImage: `url(${car1})`,
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover',
  // };

  const img = {
    backgroundImage: `url(${car1})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    borderRadius: 50,
    height: "100%",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    contactNumber: Yup.string()
      .required('Contact Number is required')
      .matches(/^\d{10}$/, 'Invalid Contact Number'),
    alternateNumber: Yup.string(),
    email: Yup.string()
      .required('Email Address is required')
      .email('Invalid Email Address'),
    address: Yup.string()
    .required('Field is required')
    
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      contactNumber: '',
      alternateNumber: '',
      email: '',
      address:'',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box
      sx={{
    
        // backgroundImage: 'url("your-background-image-url.jpg")',
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
            width: "150vh",
            height: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
      <Container  maxWidth="xs">
        <Grid container style={img}>
          <Paper elevation={3} style={paperStyle} sx={{ width: "100%" }}>

            {/* <Button sx={{ marginLeft: '-80%', fontSize: '800' }}>
              <b>{'<'}Log in</b>
            </Button> */}
             <Box style={{ display: "flex" }}>
                  <Button
                    sx={{ color: "#013C6B",   marginLeft: '-80%', fontSize: '800' }}
                  >
                    <ArrowBackIosIcon />Login
                  </Button>
                </Box>
            <Typography variant="h6">
              Enter your credentials here:
            </Typography>
            <form
              style={formStyle}
              // noValidate
              onSubmit={formik.handleSubmit}
            >
              <Grid container spacing={2}>
                <Grid item xs={5} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    placeholder="First Name"
                    name="firstName"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    error={
                      formik.touched.firstName &&
                      Boolean(formik.errors.firstName)
                    }
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                 placeholder="Last Name"
                    name="lastName"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    error={
                      formik.touched.lastName &&
                      Boolean(formik.errors.lastName)
                    }
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="contactNumber"
                    placeholder="Contact Number"
                    name="contactNumber"
                    onChange={formik.handleChange}
                    value={formik.values.contactNumber}
                    error={
                      formik.touched.contactNumber &&
                      Boolean(formik.errors.contactNumber)
                    }
                    helperText={
                      formik.touched.contactNumber &&
                      formik.errors.contactNumber
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="alternateNumber"
                    placeholder="Alternate Number"
                    name="alternateNumber"
                    onChange={formik.handleChange}
                    value={formik.values.alternateNumber}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    placeholder="Email Address"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={
                      formik.touched.email && Boolean(formik.errors.email)
                    }
                    helperText={
                      formik.touched.email && formik.errors.email
                    }
                  />
                </Grid>
                {/* Add other form fields here */}
                <Grid item xs={12}>
                  <Typography variant="h4">Address</Typography>
                </Grid>
                {/* Add address fields */}
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="Locality / Building / Street / Society"
                    placeholder="Locality / Building / Street / Society"
                    name="Locality / Building / Street / Society"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                    error={
                      formik.touched.address && Boolean(formik.errors.address)
                    }
                    helperText={
                      formik.touched.address && formik.errors.address
                    }
                  />
                </Grid>
                {/* Add more address fields */}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={submitButtonStyle}
              >
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>
      </Container>
      </Box>
    </Box>
  );
}

export default RegisterPage;
