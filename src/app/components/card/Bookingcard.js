
import React from 'react';
import { Card, CardContent,Grid} from '@mui/material';

function BookingCard() {
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

  const contentStyle = {
    padding: '20px',
  };

  return (
    <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',mt:'5%' }}>
      <Card style={cardStyle}>
        <CardContent style={contentStyle}>
         
        </CardContent>
      </Card>
    </Grid>
  );
}

export default BookingCard;
