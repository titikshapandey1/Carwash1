
import {
    Box,
    Grid,
    Typography,
    styled,
    Paper,
    Container,
    TextField,
    Button,
    Card,
  } from "@mui/material";
//   import { ErrorMessage } from "formik";
//   import { useFormik, Formik } from "formik";
//   import * as Yup from "yup";
  import ExploreIcon from "@mui/icons-material/Explore";
  import CallIcon from "@mui/icons-material/Call";
  import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
  import { createTheme } from "@mui/material/styles";
  // import imageUrl from '../assets/group_carwash.png';
  import Nav from "../../partials/Nav";
  import Guest1 from "../../components/Background";
  import Question from "../../components/Question";
  import Ourplan from "../users/Ourplan";
  import Footer from "../../partials/Footer";
  import Colors from "../../utils/colors";

  const boxStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    //   backgroundImage: `url(${car1})`,
  };
  
  const formStyle = {
    width: "100%",
    marginTop: "5%",
  };
  
  const buttonBoxStyles = {
    display: "flex",
    justifyContent: "center",
  };
  
  const submitButtonStyle = {
    width: "",
    padding: "10px",
    margin: "20px 0",
    color:  Colors.palette.primary.main,
    borderRadius: "10px",
    backgroundColor: Colors.palette.primary.darkBlue,
  };
  
  const img = {
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  
//   const validationSchema = Yup.object().shape({
//     firstName: Yup.string().required("First Name is required"),
//     lastName: Yup.string().required("Last Name is required"),
//     contactNumber: Yup.string().required("Contact Number is required"),
//     alternateNumber: Yup.string().required("Alternate Number is required"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//   });
  
  function ContactUs() {
    //   const formik = useFormik({
    //       initialValues: {
    //         firstName: "",
    //         lastName: "",
    //         contactNumber: "",
    //         alternateNumber: "",
    //         email: "",
    //         message: "", 
            
    //       },
    //       validationSchema: validationSchema,
    //       onSubmit: (values) => {
    //         formik.handleSubmit();
    //         console.log(values);
    //       },
    //     });
        
    return (
      <>
        <Nav />
        <Guest1 />
        <Box
          sx={{
            backgroundColor:  Colors.palette.secondary.cardBackground,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Ourplan />
            <Box sx={{ mt: 2 }}>
              <Container>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{}}>
                      <Card
                        sx={{
                          width: "50%",
                          my: 1,
                          mx: 1,
                          p: 2,
                          marginBottom: "2%",
                          borderRadius: "20px",
                        }}
                      >
                        <Grid container wrap="nowrap" spacing={6}>
                          <Grid item marginTop="5%">
                            <HourglassEmptyIcon />
                          </Grid>
                          <Grid item>
                            <Typography>
                              <b>Hours</b>
                              <br />
                              Mon-Fri : 9 AM - 7 PM
                              <br />
                              Sat : 9 AM - 2 PM
                            </Typography>
                          </Grid>
                        </Grid>
                      </Card>
                      <Card
                        sx={{
                          width: "60%",
                          my: 1,
                          mx: 1,
                          p: 2,
                          marginBottom: "2%",
                          borderRadius: "20px",
                        }}
                      >
                        <Grid container wrap="wrap" spacing={6}>
                          <Grid item marginTop="5%">
                            <CallIcon />
                          </Grid>
                          <Grid item xs>
                            <Typography>
                              <b>Contact:</b>
                              <br />
                              mifs@info.com
                              <br />
                              (303) 985-0105, (303) 355-0105
                            </Typography>
                          </Grid>
                        </Grid>
                      </Card>
                      <Card
                        sx={{
                          my: 1,
                          mx: 1,
                          p: 2,
                          width: "70%",
                          borderRadius: "20px",
                        }}
                      >
                        <Grid container wrap="nowrap" spacing={6}>
                          <Grid item marginTop="5%">
                            <ExploreIcon />
                          </Grid>
                          <Grid item xs>
                            <Typography>
                              <b>Address:</b>
                              <br />
                              2972 Westheimer Rd. Santa Ana,
                              <br /> Illinois 85486
                            </Typography>
                          </Grid>
                        </Grid>
                      </Card>
                    </Box>
                  </Grid>
  
                  <Grid item xs={12} sm={6}>
                    <Card>
                      <Container component="main" maxWidth="xs">
                        <Grid container style={img}>
                          <Box
                            style={{
                              ...boxStyle,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          >
                            <form
                              style={formStyle}
                              noValidate
                            //   onSubmit={formik.handleSubmit}
                            >
                              <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                  <TextField
                                   variant="outlined"
                                   required
                                   fullWidth
                                   id="firstName"
                                   label="First Name"
                                   name="firstName"
                                //    onChange={formik.handleChange} 
                                //    value={formik.values.firstName}
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
                                    // onChange={formik.handleChange} 
                                    // value={formik.values.firstName}
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
                                    // onChange={formik.handleChange} 
                                    // value={formik.values.firstName}
                                  />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                  <TextField
                                    variant="outlined"
                                    fullWidth
                                    id="alternateNumber"
                                    label="Alternate Number"
                                    name="alternateNumber"
                                    // onChange={formik.handleChange} 
                                    // value={formik.values.firstName}
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
                                    // onChange={formik.handleChange} 
                                    // value={formik.values.firstName}
                                  />
                                </Grid>
                                <Grid item xs={12}>
                                  <Typography variant="h5">
                                    Address
                                    <br />
                                  </Typography>
                                </Grid>
  
                                <Grid item xs={12}>
                                  <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="Locality / Building / Street / Society"
                                    label="Locality / Building / Street / Society"
                                    name="Locality / Building / Street / Society"
                                    // onChange={formik.handleChange} 
                                    // value={formik.values.firstName}
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
                                    // onChange={formik.handleChange} 
                                    // value={formik.values.firstName}
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
                                    // onChange={formik.handleChange} 
                                    // value={formik.values.firstName}
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
                                    // onChange={formik.handleChange} 
                                    // value={formik.values.firstName}
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
                                    // onChange={formik.handleChange} 
                                    // value={formik.values.firstName}
                                  />
                                </Grid>
                                <Grid item xs={12}>
                                  <Typography variant="h5">
                                    Message
                                    <br />
                                  </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    multiline
                                    rows={4}
                                    placeholder="Send us your queries and suggestions.."
                                    id="message"
                                    name="message"
                                    // onChange={formik.handleChange}
                                    // value={formik.values.message}
                                  />
                                  {/* <ErrorMessage name="firstName" component="div" style={{ color: "red" }} />
                                  <ErrorMessage name="lastName" component="div" style={{ color: "red" }} />
                                  <ErrorMessage name="contactNumber" component="div" style={{ color: "red" }} />
                                  <ErrorMessage name="alternateNumber" component="div" style={{ color: "red" }} />
                                  <ErrorMessage name="email" component="div" style={{ color: "red" }} />
                                  <ErrorMessage name="message" component="div" style={{ color: "red" }} /> */}
                                  
                                </Grid>
                              </Grid>
                              <Box style={buttonBoxStyles}>
                                <Button
                                  type="submit"
                                  variant="contained"
                                  style={submitButtonStyle}
                                >
                                  Submit
                                </Button>
                              </Box>
                            </form>
                          </Box>
                        </Grid>
                      </Container>
                    </Card>
                  </Grid>
                </Grid>
              </Container>
            </Box>
            <Question />
          </Box>
        </Box>
        <Footer />
      </>
    );
  }
  
  export default ContactUs;