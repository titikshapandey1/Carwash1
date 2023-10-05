import React from 'react';
import Button from '@mui/material/Button';

const buttonStyle = {
  width: '124px',
  height: '44px',
  padding: '20px 40px',
  borderRadius: '20px',
  gap: '10px',
  backgroundColor: 'blue', 
  color: 'white',
};

function Cancel() {
  return (
    <Button variant="contained" style={buttonStyle}>
      Custom Button
    </Button>
  );
}

export default Cancel;