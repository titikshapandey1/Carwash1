import React from 'react';
import Button from '@mui/material/Button';
import { Card } from '@mui/material';



function Cancel({color}) {
  const buttonStyle = {
    width: '124px',
    height: '44px',
    padding: '20px 40px',
    borderRadius: '20px',
    gap: '10px',
    backgroundColor: 'blue', 
    color: color,
    boxShadow:`1px,3px ${color}`
  };

  return (
    // <Button variant="contained" style={buttonStyle}>
    //       cancel
    // </Button>
    <div variant="contained" style={buttonStyle}>
          cancel
    </div>
  );
}

export default Cancel;
// const styles=StyleSheet