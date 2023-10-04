
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import car1 from "../../assests/images/car1guest.png"
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from '@mui/material';

const Mobile = () => {
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [errors, setErrors] = React.useState({ mobileNumber: '' });

  const handleMobileNumberChange = (e) => {
    const { value } = e.target;
    setMobileNumber(value);
  };

  const handleFormSubmit = () => {
    const newErrors = {};

    if (!mobileNumber) {
      newErrors.mobileNumber = 'Mobile Number is required';
    } else if (!/^\d{10}$/.test(mobileNumber)) {
      newErrors.mobileNumber = 'Invalid Mobile Number';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Valid form 
    }
  };

  return (
    <Box>
      <Box
        sx={{
          background: 'radial-gradient(circle at 100% 100%, #023159, #1F476A, #F5F5F5)',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid container justifyContent="center" sx={{}}>
          <Grid item xs={10} sm={8} md={6} lg={4}>
            
            <Box
              sx={{
                // minHeight: '50vh',
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${car1})`,
                borderRadius: '20px',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '16px',
              }}
            >
            <Box>

                <Button  sx={{fontSize: "40px", marginRight: "22rem"}}>
            <b>{"<"}</b>
        </Button>

            </Box>
            
              <Typography variant="h6" color="darkblue" sx={{ marginTop: '10%' }}>
                Enter your mobile number here
              </Typography>&nbsp;&nbsp;
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '100%', maxWidth: '300px', height: '40px' },
                  marginBottom: '8%',
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="mobileNumber"
                  label="Mobile Number"
                  variant="outlined"
                  fullWidth
                  value={mobileNumber}
                  onChange={handleMobileNumberChange}
                  error={!!errors.mobileNumber}
                  helperText={errors.mobileNumber}
                />
              </Box>
              <Button  
                onClick={handleFormSubmit}
                sx={{
                    borderRadius:4,
                //   border: '1px solid darkblue',
                  backgroundColor: '#023159',
                  color: 'white',
                }}
                variant="contained"
              >
                <Typography fontWeight={600}>Submit &gt;</Typography>
              </Button>
              <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '16px' }}>
               <Link > Already have an account?Login  </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Mobile;