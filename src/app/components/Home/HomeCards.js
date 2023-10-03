import { Box, Container, Grid, Paper, Rating, Typography} from "@mui/material";
import React from "react";
import crate1 from "../../assests/images/crate1.png";
import crate2 from "../../assests/images/crate2.png";
import crate3 from "../../assests/images/crate3.png";
import crate4 from "../../assests/images/crate4.png";
// import Cardshome from "../../assests/images/cardshome.png"
// import Color from "@mui/material"
// import Colors from "../../utils/colors"
const HomeCards = () => {
  return (
    <>
     {/* <Box component={'img'} src={cardshome} height={"25px"}> */}
     {/* <Box
        component={"img"}
        src={cardshome}
        sx={{ opacity: 1.2, position: "absolute", top: "338%", left: "15%", width: "88%", height: "105%" }}
      /> */}
      <Container sx={{mt:10 }}>
        {/* <Grid container item spacing={5} justifyContent={"center"}> */}
          <Grid
        container
          item
          spacing={5}
          justifyContent={"left"}
          sx={{
            backdropFilter: "blur(100%)", // Adjust the blur amount as needed
       marginTop:"12%",
      //  marginLeft:"1%"
          }}
        >
          
          <Grid item  sx={{
            backdropFilter: "blur(100%)", // Adjust the blur amount as needed
           
          }}>
            <Typography fontSize={60} color={"darkblue"} textAlign={"center"} >
              <b>Our Washing Services</b>
            </Typography>
          </Grid>
             
          <Grid item >
            <Typography
              fontSize={16}
              color={"darkblue"}
              textAlign={"center"}
              mt={3}
              sx={{marginTop:"16%"}}
            >WITH
              <b> MODERN EQUIPMENT</b>
            </Typography>
          </Grid>
        </Grid>
        
        {/* .................................... */}
        <Grid container item spacing={5} justifyContent={"center"} mt={5}  >
          {/* .......Card No. 1 */}
          <Grid item>
            <Paper
              elevation={10}
              sx={{ height: 260, width: 240, borderRadius: 5, padding: 1 }}
            >
              <Typography textAlign={"center"}>
                <Box
                  component={"img"}
                  src={crate1}
                  sx={{ height: 80, width: 80, mt: 1 }}
                />
              </Typography>
              <Typography
                fontSize={17}
                color={"darkblue"}
                textAlign={"center"}
                mt={2}
              >
                <b>Contactless Washing</b>
              </Typography>
              <Typography fontSize={15} textAlign={"center"} mt={1}>
                Vestibulum tortor risus, rutrum at congue sed ultricies finibus.
              </Typography>
              <Typography mt={2} textAlign={"center"}>
                <Rating name="size-medium" defaultValue={2} sx={{color:"darkblue"}} />
              </Typography>
            </Paper>
          </Grid>
          {/* .......Card No. 2 */}
          <Grid item>
            <Paper
              elevation={10}
              sx={{ height: 260, width: 240, borderRadius: 5, padding: 1,backdropFilter: "blur(10%)" }}
            >
              <Typography textAlign={"center"}>
                <Box
                  component={"img"}
                  src={crate2}
                  sx={{ height: 80, width: 80, mt: 1 }}
                />
              </Typography>
              <Typography
                fontSize={17}
                color={"#darkblue"}
                textAlign={"center"}
                mt={2}
              >
                <b>Safety Materials</b>
              </Typography>
              <Typography fontSize={15} textAlign={"center"} mt={1}>
              Cras aliquam tristique metus, eu gravida diam vestibulum gravida.
              </Typography>
              <Typography mt={2} textAlign={"center"}>
                <Rating name="size-medium" defaultValue={2} sx={{color:"darkblue"}}/>
              </Typography>
            </Paper>
          </Grid>
          {/* .......Card No. 3 */}
          <Grid item>
            <Paper
              elevation={10}
              sx={{ height: 260, width: 240, borderRadius: 5, padding: 1,backdropFilter: "blur(10%)" }}
            >
              <Typography textAlign={"center"}>
                <Box
                  component={"img"}
                  src={crate3}
                  sx={{ height: 80, width: 80, mt: 1 }}
                />
              </Typography>
              <Typography
                fontSize={17}
                color={"#darkblue"}
                textAlign={"center"}
                mt={2}
              >
                <b>Modern Equipment</b>
              </Typography>
              <Typography fontSize={15} textAlign={"center"} mt={1}>
              Fusce maximus molestie nisl, ut dapibus libero vestibulum aliquam.
              </Typography>
              <Typography mt={2} textAlign={"center"}>
                <Rating name="size-medium" defaultValue={2} sx={{color:"darkblue"}}/>
              </Typography>
            </Paper>
          </Grid>
          {/* .......Card No. 4 */}
          <Grid item>
            <Paper
              elevation={10}
              sx={{ height: 260, width: 240, borderRadius: 5, padding: 1 ,backdropFilter: "blur(10%)"}}
            >
              <Typography textAlign={"center"}>
                <Box
                  component={"img"}
                  src={crate4}
                  sx={{ height: 80, width: 80, mt: 1 }}
                />
              </Typography>
              <Typography
                fontSize={17}
                color={"#blue"}
                textAlign={"center"}
                mt={2}
              >
                <b>Extensive Cleaning</b>
              </Typography>
              <Typography fontSize={15} textAlign={"center"} mt={1}>
              Sestibulum non dolor sit amet mi moles tincidunt vel non velit.
              </Typography>
              <Typography mt={2} textAlign={"center"}>
                <Rating name="size-medium"  defaultValue={2} sx={{color:"darkblue"}}/>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    
    </>
  );
};

export default HomeCards;



