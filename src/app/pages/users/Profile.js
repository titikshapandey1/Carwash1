
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
import CircleIcon from '@mui/icons-material/Circle';
import car1 from "../../assests/images/car1guest.png"
import PaymentOptions from "../../components/Paymentoption";
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import Colors from '../../utils/colors';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    surname: Yup.string().required('Surname is required'),
    contactNumber: Yup.string().required('Contact Number is required'),
    alternateNumber: Yup.string().required('Alternate Number is required'),
    email: Yup.string().required('Email Number is required'),


});
const buttonBoxStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const submitButtonStyle = {
    width: "auto",
    textTransform: "capitalize",
    fontSize: "16px",
    padding: "10px",
    margin: "20px 0",
    color: "white",
    borderRadius: "10px",
    backgroundColor: Colors.palette.secondary.main,
};




function Profile() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            surname: '',
            contactNumber: '',
            // Initialize other form fields here
            // ...
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // Handle form submission here
            console.log(values);
        },
    });




    const paperStyle = {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        marginTop: "0.5%"
    };

    const formStyle = {
        width: '100%', // Full width
        marginTop: '3%',
    };



    // const img={
    //   backgroundImage: `url(${car1})`,
    //   backgroundPosition: 'center', // Center the background image
    // backgroundSize: 'cover',      // Make the background image cover the container

    // };

    return (
        <Box
            sx={{
                // backgroundImage: 'url("${car1}")',
                backgroundColor: ' #F5F5F5',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // mt:2,
            }}
        >
            <Container component="main" maxWidth="sm" >
                <Grid container sx={{ marginBlock: "20%" }}>
                    <Paper elevation={10} style={paperStyle} sx={{ borderRadius: "30px" }} >
                        <Box sx={{ marginLeft: "80%", color: Colors.palette.primary.darkBlue, fontWeight: "600", fontSize: "20px", cursor: "pointer" }}>
                            Edit
                        </Box>

                        <CircleIcon sx={{ fontSize: "200px", color: "#D9D9D9" }} />


                        <form style={formStyle} noValidate>

                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} >
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="firstName"
                                        placeholder="First Name"
                                        name="firstName"
                                        onChange={formik.handleChange}
                                        value={formik.values.firstName}
                                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                        helperText={formik.touched.firstName && formik.errors.firstName}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="surname"
                                        placeholder="Surname"
                                        name="Surname"
                                         onChange={formik.handleChange}
                                        value={formik.values.surname}
                                        error={formik.touched.surname && Boolean(formik.errors.surname)}
                                        helperText={formik.touched.surname && formik.errors.surname}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="contactnumber"
                                        placeholder="Contact Number"
                                        name="contactNumber"
                                         onChange={formik.handleChange}
                                        value={formik.values.contactNumber}
                                        error={formik.touched.contactNumber && Boolean(formik.errors.contactNumber)}
                                        helperText={formik.touched.contactNumber && formik.errors.contactNumber}
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
                                        error={formik.touched.alternateNumber && Boolean(formik.errors.alternateNumber)}
                                        helperText={formik.touched.alternateNumber && formik.errors.alternateNumber}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        placeholder="Email ID"
                                        name="email"
                                         onChange={formik.handleChange}
                                        value={formik.values.email}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant='h6'>Address<br /></Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Locality / Building / Street / Society"
                                        placeholder="Locality / Building / Street / Society"
                                        name="Locality / Building / Street / Society"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="city/Town"
                                        placeholder="City / Town  District"
                                        name="city/Town"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id=" District"
                                        placeholder=" District"
                                        name=" District"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="State"
                                        placeholder="State"
                                        name="State"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Pincode"
                                        placeholder=" Pincode"
                                        name="Pincode"
                                    />
                                </Grid>








                            </Grid>

                            <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    style={submitButtonStyle}
                  >
                    Submit
                  </Button>
                </Grid>

                        </form>
                    </Paper>
                </Grid>
            </Container>
        </Box>
    );
}

export default Profile;
