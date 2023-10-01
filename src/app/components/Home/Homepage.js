import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import vector from '../../Vector.png'
import vector2 from '../../Vector2.png'

 
const HomePage = () => {
  return (
    <>
      <Container sx={{mt:35}}>
        <Grid container item spacing={15} justifyContent={'center'}>
          <Grid item>
            <Box height={250} width={{xs: 250, sm: 400, md: 400, lg: 400, xl: 400}}>
              <Typography fontSize={{xs: 25, sm: 30, md: 35, lg: 37, xl: 37}} color={"#001478"}>
                <b>Professional Washing And Cleaning.</b>
              </Typography>
              <Typography fontSize={{xs: 12, sm: 12, md: 13, lg: 15, xl: 15}} mt={3}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. <b>Call for book</b>
              </Typography>
              <Button
              variant="contained"
              size="large"
              sx={{
                background: "#FF4900",
                color: "white",
                height: 45,
                width: {
                  xl: "170px",
                  lg: "170px",
                  md: "170px",
                  sm: "170px",
                  xs: "170px",
                },
                mt: 5,
                
              }}
            >
              +91-0000-000000
            </Button>
            <Button 
              variant="contained"
              size="large"
              sx={{
                border:'1px solid black' ,
                background: "white",
                color: "black",
                height: 45,
                width: {
                  xl: "170px",
                  lg: "170px",
                  md: "170px",
                  sm: "170px",
                  xs: "170px",
                },
                mt: 5,
                ml:{xs: 0, sm: 2, md: 2, lg: 2, xl: 2},
              }}
            >
              Learn More 
            </Button>
            </Box>
          </Grid>
          <Grid item>
            <Box component={'img'} src={vector} height={{xs: 170, sm: 400, md: 550, lg: 550, xl: 550}} width={{xs: 250, sm: 500, md: 600, lg: 600, xl: 600}} mt={{xs: 15, sm: 0, md: 0, lg: 0, xl: 0}}/>
          </Grid>
        </Grid>
      </Container>

      {/* ..................................................................... */}

      <Container sx={{mt:10}}>
       <Grid container item spacing={10} justifyContent={'center'}>
       <Grid item>
       <Box component={'img'} src={vector2} height={250} width={250}/>
       </Grid>
       <Grid item >
        <Box width={{xs: 250, sm: 500, md: 700, lg: 800, xl: 800}}>
        <Typography fontSize={{xs: 25, sm: 30, md: 32, lg: 35, xl: 35}} color={"#001478"}>
        <b>Who We Are?</b>
        </Typography>
        <Typography fontSize={{xs: 12, sm: 12, md: 13, lg: 15, xl: 15}} mt={3}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </Typography>
        <Typography fontSize={{xs: 12, sm: 12, md: 13, lg: 15, xl: 15}} mt={2}>
       <b> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</b>
        </Typography>
        </Box>
       </Grid>
       </Grid>
      </Container>
    </>
  );
};

export default HomePage;
