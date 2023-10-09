import React from "react";
import { Card, CardContent, Grid } from "@mui/material";

function Subscribecard({children}) {
  const cardstyle1 = {
    width: '380px',
    borderRadius: "20px",
    backgroundColor: '#FFFFFF',
    gap:'20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: "20px"
    // height: '535px', 
    // mt:'428px',
    // mb:'428px'
    // opacity: ".8",
  };

  // const contentStyle = {
  //   padding: "20px",
  // };

  return (
    <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',mt:'5%' ,mb:'5%',padding: "20px"}}>
      <Card style={cardstyle1} >
        {children}
        {/* <CardContent style={contentStyle}>
         
        </CardContent> */}
      </Card>
    </Grid>
  );
}

export default Subscribecard;
