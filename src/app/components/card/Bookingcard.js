import {React, useState} from "react";
import { Card, CardContent, Grid } from "@mui/material";
import Colors from "../../utils/colors";

function BookingCard({ children , shadowColor }) {
  const [isHovered, setIsHovered] = useState(false);
  // const cardstyle1 = {
  //   width: "380px",
  //   borderRadius: "20px",
  //   border:"1px solid #e0e0e0",
  //   backgroundColor : "#FFFFFF",
    

  //   // gap: "20px",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   height: "auto",
  //   boxShadow: isHovered ? `10px 5px 5px `: "none",
  //   // boxShadow: isHovered ? "0px 5px 15px" : "none", // Box shadow on hover
  //   transition: "box-shadow 0.3s",
   
  //   // },
  //   // mt:'428px',
  //   // mb:'428px'
  //   // opacity: ".8",
  // };
  const cardstyle1 = {
    width: '380px',
    borderRadius: "20px",
    backgroundColor: '#FFFFFF',
    gap: '20px',
    border:"1px solid #e0e0e0",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: shadowColor,
    boxShadow: isHovered ? "0px 5px 15px" : "none", 
    transition: "box-shadow 0.5s, color 0.5s", 
  };


  return (
    <>
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: "5%",
        mb: "5%",
      }}
    >
      <Card style={cardstyle1} 
       onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        >
        {children}
        {/* <CardContent style={contentStyle}></CardContent> */}
       
      </Card>
    </Grid>
    </>
  );
}

export default BookingCard;


