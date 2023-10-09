
import React from 'react';
import { Card, CardContent,Grid} from '@mui/material';

const BookingCard=()=> {
  const cardStyle = {
    width: '340px',
    borderRadius: "20px",
    backgroundColor: '#FFFFFF',
    // opacity: ".8",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '398px', 
    gap:'20px',
    // mt:'5%'
  };

  // const contentStyle = {
  //   padding: '20px',
  // };
  const hoverCardStyle = {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Box shadow on hover
  };

  return (
    <>
    <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',mt:'5%' }}>
      <Card style={cardStyle}>
        <CardContent style={hoverCardStyle}>
         
        </CardContent>
      </Card>
    </Grid>
    </>
  );
}

export default BookingCard;


