import {React, useState} from "react";
import { Card, CardContent, Grid } from "@mui/material";
import Colors from "../../utils/colors";

function BookingCard({ children }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardstyle1 = {
    width: "380px",
    borderRadius: "20px",

    backgroundColor : "#FFFFFF",


    // gap: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    boxShadow: isHovered ? `10px 5px 5px ${Colors.palette.secondary.lightBlue}` : "none",
    transition: "box-shadow 0.3s",
   
    // },
    // mt:'428px',
    // mb:'428px'
    // opacity: ".8",
  };

  const contentStyle = {
    padding: "20px",
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


