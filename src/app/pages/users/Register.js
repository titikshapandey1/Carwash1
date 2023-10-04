
// import React from 'react';
// import {
//   Container,
//   Grid,
//  TextField,
//   Button,
//   Typography,
//   Box,
//   Paper,
// } from '@mui/material';
// // import car1 from '../../assests/images/car1guest.png';
// import Sedan from "../../assests/images/sedan.png"
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import Colors from '../../utils/colors';

// function RegisterPage() {
  
//   const paperStyle = {
//     padding: "20px",
//     display: "flex",
//     flexDirection: "column",
//     borderRadius: 15,
//     opacity: ".5",
//     // height:'25%'
    
//   };
//   const formStyle = {
   
//     // width: "100%",
//     // marginTop: "20%",
//     position: "center",
//     color: Colors.palette.secondary.main,

//   };
//   // const textFieldStyles = setTextFieldStyles("black", "gray");

//   const buttonBoxStyles = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   };
//   const submitButtonStyle = {
//     margin: '20px 0',
//     width: '150px',
//     borderRadius: '10px',
//     display: 'block',
//     textAlign: 'center',
//     marginTop: '5%',
//     marginLeft: { xs: '20%', sm: '30%' },
//   };
//   const textFieldStyles = {
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         borderColor: "black", 
//       },
//       "& input": {
//         color: "black",
//       },
//       "& input::placeholder": {
//         color: "darkblack", 
//       },
//     },
//   };
//   const img = {
//     // backgroundImage: `url(${car1})`,
//     backgroundImage: `url(${Sedan})`,

//     backgroundPosition: "center",
//     backgroundSize: "contain",
//     backgroundRepeat: "no-repeat",
//     borderRadius: 50,
//     // height: "100%",
//   };

//   const validationSchema = Yup.object().shape({
//     firstName: Yup.string().required('First Name is required'),
//     lastName: Yup.string().required('Last Name is required'),
//     contactNumber: Yup.string()
//       .required('Contact Number is required')
//       .matches(/^\d{10}$/, 'Invalid Contact Number'),
//     alternateNumber: Yup.string(),
//     email: Yup.string()
//       .required('Email Address is required')
//       .email('Invalid Email Address'),
//     address: Yup.string()
//     .required('Field is required')
    
//   });

//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       contactNumber: '',
//       alternateNumber: '',
//       email: '',
//       address:'',
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });

//   return (
//     <Box 
//       sx={{
    
//         // backgroundImage: 'url("car1")',
       
// background:"radial-gradient(circle at 100% 100%, #023159, #1F476A, #F5F5F5)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         display: "flex",
//         justifyContent: "center",
//           // alignItems: "center",
//       }}
//     >
//        <Box 
      
//           sx={{
        
//             width: "170vh",
//             height: "50%",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
        
//       <Container  maxWidth="sm" sx={{mt:'8%', mb:'8%',ml:'20%',mr:'20%',backgroundImage: 'url("car1")'}} >
//         <Grid container style={{
//                 // backgroundImage: `url(${car1})`,
//     backgroundImage: `url(${Sedan})`,


//                 backgroundPosition: "center",
//                 backgroundSize: "contain",
//                 backgroundRepeat: "no-repeat",
//                 // borderRadius: 50,
//                 height: "100%",
//               }} >
//           <Paper elevation={10} style={paperStyle}>

//              <Box style={{ display: "flex" }}>
//                   <Button
//                       sx={{  
//                       color: Colors.palette.secondary.main,
//                         marginLeft: '1%', fontSize: '600' }}
//                   >
//                     <ArrowBackIosIcon />Login
//                   </Button>
//                 </Box>
//             <Typography variant="h6" sx={{mt:'35px',mb:'30px', justifyContent:'center', color: Colors.palette.secondary.main, }}>
//               Enter your credentials here:
//             </Typography>
//             <form
//               style={formStyle}
//               noValidates
//               onSubmit={formik.handleSubmit}
//             >
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     variant="outlined"
//                     required
//                     fullWidth
//                     size="small"
//                     id="firstName"
//                     placeholder="First Name"
//                     name="firstName"
//                     onChange={formik.handleChange}
//                     value={formik.values.firstName}
//                     error={
//                       formik.touched.firstName &&
//                       Boolean(formik.errors.firstName)
//                     }
//                     helperText={
//                       formik.touched.firstName && formik.errors.firstName
//                     }
//                     sx={textFieldStyles}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     variant="outlined"
//                     required
//                     fullWidth
//                     size="small"
//                     id="lastName"
//                  placeholder="Last Name"
//                     name="lastName"
//                     onChange={formik.handleChange}
//                     value={formik.values.lastName}
//                     error={
//                       formik.touched.lastName &&
//                       Boolean(formik.errors.lastName)
//                     }
//                     helperText={
//                       formik.touched.lastName && formik.errors.lastName
//                     }
//                     sx={textFieldStyles}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     variant="outlined"
//                     required
//                     fullWidth
//                     size="small"
//                     id="contactNumber"
//                     placeholder="Contact Number"
//                     name="contactNumber"
//                     onChange={formik.handleChange}
//                     value={formik.values.contactNumber}
//                     error={
//                       formik.touched.contactNumber &&
//                       Boolean(formik.errors.contactNumber)
//                     }
//                     helperText={
//                       formik.touched.contactNumber &&
//                       formik.errors.contactNumber
//                     }
//                     sx={textFieldStyles}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     id="alternateNumber"
//                     placeholder="Alternate Number"
//                     name="alternateNumber"
//                     onChange={formik.handleChange}
//                     value={formik.values.alternateNumber}
//                     sx={textFieldStyles}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     variant="outlined"
//                     required
//                     fullWidth
//                     size="small"
//                     id="email"
//                     placeholder="Email Address"
//                     name="email"
//                     onChange={formik.handleChange}
//                     value={formik.values.email}
//                     error={
//                       formik.touched.email && Boolean(formik.errors.email)
//                     }
//                     helperText={
//                       formik.touched.email && formik.errors.email
//                     }
//                     sx={textFieldStyles}
//                   />
//                 </Grid>
                
//                 <Grid item xs={12}>
//                   <Typography variant="h6" sx={{ color: Colors.palette.secondary.main}}>Address</Typography>
//                 </Grid>
                
//                 <Grid item xs={12}>
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     required
//                     fullWidth
//                     id="Locality / Building / Street / Society"
//                     placeholder="Locality / Building / Street / Society"
//                     name="Locality / Building / Street / Society"
//                     onChange={formik.handleChange}
//                     value={formik.values.address}
//                     error={
//                       formik.touched.address && Boolean(formik.errors.address)
//                     }
//                     helperText={
//                       formik.touched.address && formik.errors.address
//                     }
//                     sx={textFieldStyles}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                                 <TextField
//                                   variant="outlined"
//                                   required
//                                   fullWidth
//                                   size="small"
//                                   id="city/Town"
//                                   placeholder="City / Town  District"
//                                   name="city/Town"
//                                   onChange={formik.handleChange}
//                                   error={
//                                     formik.touched.address && Boolean(formik.errors.address)
//                                   }
//                                   helperText={
//                                     formik.touched.address && formik.errors.address
//                                   }
//                                   sx={textFieldStyles}
//                                 />
//                               </Grid>
//                               <Grid item xs={12} sm={6}>
//                                 <TextField
//                                   variant="outlined"
//                                   required
//                                   fullWidth
//                                   size="small"
//                                   id=" District"
//                                   placeholder=" District"
//                                   name=" District"
//                                   onChange={formik.handleChange}
//                                   error={
//                                     formik.touched.District && Boolean(formik.errors.District)
//                                   }
//                                   helperText={
//                                     formik.touched.District && formik.errors.District
//                                   }
//                                   sx={textFieldStyles}
//                                 />
//                               </Grid>
//                               <Grid item xs={12} sm={8}>
//                                 <TextField
//                                   variant="outlined"
//                                   required
//                                   fullWidth
//                                   size="small"
//                                   id="State"
//                                   placeholder="State"
//                                   name="State"
//                                   onChange={formik.handleChange}
//                                   error={
//                                     formik.touched.District && Boolean(formik.errors.District)
//                                   }
//                                   helperText={
//                                     formik.touched.District && formik.errors.District
//                                   }
//                                   sx={textFieldStyles}
//                                 />
//                               </Grid>

//                 <Grid item xs={12} sm={4}>
//             <TextField
//                     variant="outlined"
//                     required
//                     fullWidth
//                     size="small"
//                     id="Pincode"
//                     placeholder=" Pincode"
//                     name="Pincode"
//                     onChange={formik.handleChange}
//                     error={
//                       formik.touched.Pincode && Boolean(formik.errors.Pincode)
//                     }
//                     helperText={
//                       formik.touched.Pincode && formik.errors.Pincode
//                     }
//                     sx={textFieldStyles}
//                   />
//                 </Grid>
               
//               </Grid>
//               <Box style={buttonBoxStyles}>
//                               <Button
//                                 type="submit"
//                                 variant="contained"
//                                 style={submitButtonStyle}
//                               >
//                                 Submit&nbsp;&nbsp;{" "}
//                                 <ArrowForwardIosIcon
//                                   sx={{ fontSize: "16px" }}
//                                 />
//                               </Button>
//                             </Box>
//             </form>
//           {/* </card> */}
//           </Paper>
//         </Grid>
//       </Container>
      
//       </Box>
//     </Box>
//   );
// }

// export default RegisterPage;
import React from 'react';
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from '@mui/material';
import car1 from '../../assets/images/car1guest.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Colors from '../../utils/colors';

function RegisterPage() {
  
  const paperStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    borderRadius: 15,
    opacity: ".8",
    // height:'25%'
  };

  const formStyle = {
    width: "100%",
  };

  const buttonBoxStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const submitButtonStyle = {
    margin: '20px 0',
    width: '150px',
    borderRadius: '10px',
    display: 'block',
    textAlign: 'center',
    marginTop: '5%',
    marginLeft: { xs: '20%', sm: '30%' },
  };

  const img = {
    // backgroundImage: `url(${car1})`,
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
    address: Yup.string().required('Address is required'),
  });
 
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      contactNumber: '',
      alternateNumber: '',
      email: '',
      address: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box 
      sx={{
        // backgroundImage: 'url("car1")',
        backgroundColor: "#023159",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
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
        <Container  maxWidth="md" sx={{ mt: '8%', mb: '8%', ml: '20%', mr: '20%' }}>
          <Grid container >
            <Paper elevation={10} style={paperStyle} sx={{backgroundImage: 'url("img")',}}> 

              <Box style={{ display: "flex" }}>
                <Button
                  sx={{  
                    color: Colors.palette.secondary.main,
                    marginLeft: '1%', fontSize: '600' }}
                >
                  <ArrowBackIosIcon />Login
                </Button>
              </Box>
              <Typography variant="h6" sx={{ mt: '35px', mb: '30px', justifyContent: 'center', color: Colors.palette.secondary.main }}>
                Enter your credentials here:
              </Typography>
              <form
                style={formStyle}
                noValidates
                onSubmit={formik.handleSubmit}
              >
                <Grid container spacing={2}>
                  <Grid item xs={5} sm={6}>
                    <TextField
                      variant="standard"
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
                      inputProps={{ style: { height: '40px' } }} // Adjust the height here
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="standard"
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
                      inputProps={{ style: { height: '40px' } }} // Adjust the height here
                    />
                  </Grid>
                  {/* Rest of the form fields */}
                  <Grid item xs={12}>
                    <Typography variant="h6" sx={{ color: Colors.palette.secondary.main }}>Address</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      id="address"
                      placeholder="Address"
                      name="address"
                      onChange={formik.handleChange}
                      value={formik.values.address}
                      error={
                        formik.touched.address &&
                        Boolean(formik.errors.address)
                      }
                      helperText={
                        formik.touched.address && formik.errors.address
                      }
                      inputProps={{ style: { height: '40px' } }} // Adjust the height here
                    />
                  </Grid>
                  {/* Rest of the address fields */}
                </Grid>
                <Box style={buttonBoxStyles}>
                  <Button
                    type="submit"
                    variant="contained"
                    style={submitButtonStyle}
                  >
                    Submit&nbsp;&nbsp;
                    <ArrowForwardIosIcon sx={{ fontSize: "16px" }} />
                  </Button>
                </Box>
              </form>
            </Paper>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default RegisterPage;
