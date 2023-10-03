
import React from 'react'
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import car1 from "../../assests/images/car1guest.png"
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
// import color from "../utils"
const otp1 = () => {
  return (
    <>
     <Box>
      <Box
        sx={{
          background: 'radial-gradient(circle at 100% 100%, #023159, #1F476A, #F5F5F5)',
         minHeight: '100vh',
          width:'100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* <Grid container justifyContent="center" sx={{}}> */}

        <Grid container item justifyContent={"center"}>
        <Box
              sx={{
                minHeight: '70vh',
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)) , url(${car1})`,
                borderRadius: '20px',
                backgroundSize: '100% ,100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '16px',
              }}
            >
    <Box 
   
      sx={{
        height: { xs: 50, sm: 50, md: 50, lg: 50, xl: 50 },
        width: { xs: 150, sm: 150, md: 150, lg: 150, xl: 150 },
        position:"relative",
        
      }} />
    <Box mt={15} ml={{ xs: 3, sm: 7, md: 30, lg: 15, xl: 20 }} sx={{marginRight:"30%"}}>
      <Typography variant=''
        color={"darkblue"}
        // fontSize={{ xs: 8, sm: 8, md: 9, lg: 10, xl: 10 }}
 >
        <b>You have received an OTP on your number xxxxxx6149</b>
      </Typography><br/>
     
      <TextField
        name="number"
        type="text"
        placeholder="-"
        variant="outlined"
        sx={{
            // displayPrint:"solid",
          width: {
            xl: "40px",
            lg: "40px",
            md: "40px",
            sm: "35px",
            xs: "35px",
          },
          mt: 1,
        //   ml: 0.3,
        }}
        InputProps={{
          sx: {
            height: "40px",
            color: "#001478",
            border: "1px solid #001478",
          },
        }} />
        <TextField
        name="number"
        type="text"
        placeholder="-"
        variant="outlined"
        sx={{
          width: {
            xl: "40px",
            lg: "40px",
            md: "40px",
            sm: "35px",
            xs: "35px",
          },
          mt: 1,
          ml: 1,
        }}
        InputProps={{
          sx: {
            height: "40px",
            color: "#001478",
            border: "1px solid #001478",
          },
        }} />
        <TextField
        name="number"
        type="text"
        placeholder="-"
        variant="outlined"
        sx={{
          width: {
            xl: "40px",
            lg: "40px",
            md: "40px",
            sm: "35px",
            xs: "35px",
          },
          mt: 1,
          ml: 1,
        }}
        InputProps={{
            sx: {
              height: "40px",
              color: "#001478",
              border: "1px solid #001478",
            },
          }} />
             <TextField
        name="number"
        type="text"
        placeholder="-"
        variant="outlined"
        sx={{
          width: {
            xl: "40px",
            lg: "40px",
            md: "40px",
            sm: "35px",
            xs: "35px",
          },
          mt: 1,
          ml: 3.5,
        }}
        
        InputProps={{
            sx: {
              height: "40px",
              color: "#001478",
              border: "1px solid #001478",
            },
          }} />
        <TextField
        name="number"
        type="text"
        placeholder="-"
        variant="outlined"
        sx={{
          width: {
            xl: "40px",
            lg: "40px",
            md: "40px",
            sm: "35px",
            xs: "35px",
          },
          mt: 1,
          ml: 1,
        }}
        InputProps={{
          sx: {
            height: "40px",
            color: "#001478",
            border: "1px solid #001478",
          },
        }} />
         <TextField
        name="number"
        type="text"
        placeholder="-"
        variant="outlined"
        sx={{
          width: {
            xl: "40px",
            lg: "40px",
            md: "40px",
            sm: "35px",
            xs: "35px",
          },
          mt: 1,
          ml:1,
        }}
        InputProps={{
          sx: {
            height: "40px",
            color: "#001478",
            border: "1px solid #001478",
          },
        }} />{" "}
      <br />
      <Grid container>
      <Grid item>
      <Typography  mt={3} variant=''
    //   fontSize={{ xs: 13, sm: 13, md: 14, lg: 15, xl: 15 }} 
      >
      Didn’t received the OTP ?

      </Typography>
      </Grid>
      <Grid item>
      <Typography  mt={2} variant=''
    //   fontSize={{ xs: 13, sm: 13, md: 14, lg: 15, xl: 15 }} 
      >
        <Link >resend</Link>

      </Typography>
      </Grid>
      <Grid item>
       <Typography color={'darkblue'} mt={1} mb={1} 
    //    fontSize={{ xs: 13, sm: 13, md: 14, lg: 15, xl: 15 }} ml={1} 
       >
       <TimerOutlinedIcon/> 00:56
       </Typography>
      </Grid>
      </Grid>
      <Button
        variant="contained"
        size="large" 
        sx={{
            borderRadius:3,
          background: "darkblue",
          color: "white",
        //   height: 45,
          width: {
            xl: "300px",
            lg: "300px",
            md: "300px",
            sm: "300px",
            xs: "220px",
          },
          mt: 1,
          ml: 0.3,
        }}
      >
        Send
      </Button>
      
       </Box>
    </Box>
    </Grid>
    {/* </Grid> */}
    </Box>
    </Box>
 
    </>
  )
}

export default otp1




