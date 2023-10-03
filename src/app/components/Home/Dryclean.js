// import { Box,  Container, Grid, Typography } from '@mui/material'
// import React from 'react'
// import wolks from '../../images/wolks.png'
// const Dryclean = () => {
//   return (
//     <>
//     <Container sx={{mt:10}}>
//         <Grid container item spacing={15} justifyContent={'center'}>
//           <Grid item>
//             <Box height={250} width={{xs: 350, sm: 500, md: 500, lg: 600, xl: 600}}>
//               <Typography fontSize={{xs: 25, sm: 30, md: 35, lg: 37, xl: 37}} color={"#001478"}>
//                 <b>Dry Cleaning Any Dirt Inside The Car.</b>
//               </Typography>
//               <Typography fontSize={{xs: 13, sm: 13, md: 13, lg: 15, xl: 15}} mt={3}>
//               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
// mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
//               </Typography>
             
//           </Box>
//           </Grid>
//           <Grid item>
//             <Box component={'img'} src={wolks} height={{xs: 150, sm: 300, md: 400, lg: 400, xl: 400}} width={{xs: 250, sm: 500, md: 600, lg: 600, xl: 600}} mt={{xs: 8, sm: 0, md: 0, lg: 0, xl: 0}}/>
//           </Grid>
//         </Grid>
//       </Container>

//     </>
//   )
// }

// export default Dryclean
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import wolks from '../../images/wolks.png';

const Dryclean = () => {
  return (
    <>
    <Container sx={{ mt: 10 }}>
      <Grid container item spacing={3} alignItems="center">
        <Grid item xs={12} sm={12} md={6}>
          <Box>
            <Typography variant='h6'
              fontSize={{ xs: 25, sm: 30, md: 35, lg: 37, xl: 37 }}
              color="darkblue"
            >
              <b>Dry Cleaning Any Dirt Inside The Car.</b>
            </Typography>
            <Typography fontSize={{ xs: 13, sm: 13, md: 13, lg: 15, xl: 15 }} mt={3}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
              Nulla consequat massa quis enim.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box component="img" src={wolks} alt="Car" width="100%" height="auto" />
        </Grid>
      </Grid>
    </Container>
    </>
  );
};

export default Dryclean;
