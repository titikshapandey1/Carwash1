// import React from "react";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import { Container, Card, Box } from "@mui/material";
// import red from "../assests/images/red1.png";
// import yellow from "../assests/images/yellow1.png";
// import blue from "../assests/images/blue1.png";
// import Colors from "../utils/colors";
// import Divider from "@mui/material/Divider";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// const imageStyles = {
//   width: "100%",
//   height: "auto",
//   display: "block",
//   transition: "transform 0.2s ease-in-out",
// };

// const OurServices = () => {
//   const handleImageHover = (event) => {
//     event.currentTarget.style.transform = "scale(1.1)"; // Enlarge the image on hover
//   };

//   const handleImageLeave = (event) => {
//     event.currentTarget.style.transform = "scale(1)"; // Reset the image size when the mouse leaves
//   };

//   return (
//     <Container sx={{ marginTop: "3%" }}>
//       <Box sx={{ display: "flex", alignItems: "center", marginBottom: "3%" }}>
//         <Typography
//           variant="h5"
//           sx={{ color: Colors.palette.secondary.main, fontWeight: "600" }}
//         >
//           Our Services&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;•
//         </Typography>
//         <Divider
//           sx={{
//             backgroundColor: Colors.palette.secondary.main,
//             height: "2px",
//             flex: 1,
//             marginLeft: "2%",
//           }}
//         />
//         <Typography
//           sx={{
//             color: Colors.palette.secondary.main,
//             display: "flex",
//             alignItems: "center",
//             marginLeft: "1.5%",
//           }}
//         >
//           see all <ArrowForwardIosIcon sx={{ fontSize: "12px" }} />
//         </Typography>
//       </Box>

//       <Grid container spacing={4}>
//         <Grid item xs={12} sm={4}>
//           <Card
//             sx={{ background: Colors.palette.primary.main, boxShadow: "none" }}
//           >
//             <Typography
//               variant="h5"
//               sx={{
//                 backgroundColor: Colors.palette.secondary.main,
//                 color: Colors.palette.primary.main,
//                 textAlign: "center",
//               }}
//             >
//               HatchBack
//             </Typography>
//             <img
//               src={red}
//               alt="Hatchback"
//               style={imageStyles}
//               onMouseEnter={handleImageHover}
//               onMouseLeave={handleImageLeave}
//             />
//           </Card>
//         </Grid>

//         <Grid item xs={12} sm={4}>
//           <Card sx={{ boxShadow: "none" }}>
//             <Typography
//               variant="h5"
//               sx={{
//                 textAlign: "center",
//                 color: Colors.palette.secondary.main,
//                 fontWeight: "600",
//               }}
//             >
//               Sedan
//             </Typography>
//             <img
//               src={yellow}
//               alt="Sedan"
//               style={imageStyles}
//               onMouseEnter={handleImageHover}
//               onMouseLeave={handleImageLeave}
//             />
//           </Card>
//         </Grid>

//         <Grid item xs={12} sm={4}>
//           <Card sx={{ boxShadow: "none" }}>
//             <Typography
//               variant="h5"
//               sx={{
//                 textAlign: "center",
//                 color: Colors.palette.secondary.main,
//                 fontWeight: "600",
//               }}
//             >
//               SUV
//             </Typography>
//             <img
//               src={blue}
//               alt="SUV"
//               style={imageStyles}
//               onMouseEnter={handleImageHover}
//               onMouseLeave={handleImageLeave}
//             />
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default OurServices;

import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container, Card, Box } from "@mui/material";
import red from "../assests/images/red1.png";
import yellow from "../assests/images/yellow1.png";
import blue from "../assests/images/blue1.png";
import Colors from "../utils/colors";
import Divider from "@mui/material/Divider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink } from "react-router-dom";

const imageStyles = {
  width: "100%",
  height: "auto",
  display: "block",
  transition: "transform 0.3s ease-in-out",
};

const OurServices = () => {
  const [hovered, setHovered] = useState([false, false, false]);

  const handleMouseEnter = (index) => {
    const newHoveredState = [...hovered];
    newHoveredState[index] = true;
    setHovered(newHoveredState);
  };

  const handleMouseLeave = (index) => {
    const newHoveredState = [...hovered];
    newHoveredState[index] = false;
    setHovered(newHoveredState);
  };

  const handleImageHover = (event) => {
    event.currentTarget.style.transform = "scale(1.1)";
  };

  const handleImageLeave = (event) => {
    event.currentTarget.style.transform = "scale(1)";
  };

  return (
    <Container sx={{ marginTop: "3%" }}>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "3%" }}>
        <Typography
          variant="h5"
          sx={{ color: Colors.palette.secondary.main, fontWeight: "600" }}
        >
          Our Services&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;•
        </Typography>
        <Divider
          sx={{
            backgroundColor: Colors.palette.secondary.main,
            height: "2px",
            flex: 1,
            marginLeft: "2%",
          }}
        />

        <Typography
          sx={{
            color: Colors.palette.secondary.main,
            display: "flex",
            alignItems: "center",
            marginLeft: "1.5%",
            fontSize: "16px",
          }}
        >
          <NavLink
            to="/services"
            style={{
              textDecoration: "none",
              color: Colors.palette.secondary.main,
            }}
          >
            See all{" "}
            <ArrowForwardIosIcon
              sx={{
                fontSize: "12px",
              }}
            />
          </NavLink>
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              background: Colors.palette.primary.main,
              boxShadow: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => handleMouseLeave(0)}
          >
            <Typography
              variant="h5"
              sx={{
                background: hovered[0]
                  ? Colors.palette.secondary.main
                  : Colors.palette.primary.main,
                color: hovered[0]
                  ? Colors.palette.primary.main
                  : Colors.palette.secondary.main,
                textAlign: "center",
                marginBottom: "5%",
                fontWeight: "600",
              }}
            >
              HatchBack
            </Typography>
            <img
              src={red}
              alt="Hatchback"
              style={imageStyles}
              onMouseEnter={(e) => handleImageHover(e, "HatchBack")}
              onMouseLeave={handleImageLeave}
            />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              background: Colors.palette.primary.main,
              boxShadow: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
          >
            <Typography
              variant="h5"
              sx={{
                background: hovered[1]
                  ? Colors.palette.secondary.main
                  : Colors.palette.primary.main,
                color: hovered[1]
                  ? Colors.palette.primary.main
                  : Colors.palette.secondary.main,
                textAlign: "center",
                marginBottom: "1%",
                fontWeight: "600",
                // backgroundColor:
                //   selectedService === "Sedan"
                //     ? Colors.palette.secondary.main
                //     : "transparent",
                // color:
                //   selectedService === "Sedan"
                //     ? Colors.palette.primary.main
                //     : Colors.palette.secondary.main,
              }}
            >
              Sedan
            </Typography>
            <img
              src={yellow}
              alt="Sedan"
              style={imageStyles}
              onMouseEnter={(e) => handleImageHover(e, "Sedan")}
              onMouseLeave={handleImageLeave}
            />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              background: Colors.palette.primary.main,
              boxShadow: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
          >
            <Typography
              variant="h5"
              sx={{
                background: hovered[2]
                  ? Colors.palette.secondary.main
                  : Colors.palette.primary.main,
                color: hovered[2]
                  ? Colors.palette.primary.main
                  : Colors.palette.secondary.main,
                textAlign: "center",
                marginBottom: "5%",
                fontWeight: "600",
                // backgroundColor:
                //   selectedService === "SUV"
                //     ? Colors.palette.secondary.main
                //     : "transparent",
                // color:
                //   selectedService === "SUV"
                //     ? Colors.palette.primary.main
                //     : Colors.palette.secondary.main,
              }}
            >
              SUV
            </Typography>
            <img
              src={blue}
              alt="SUV"
              style={imageStyles}
              onMouseEnter={(e) => handleImageHover(e, "SUV")}
              onMouseLeave={handleImageLeave}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurServices;
