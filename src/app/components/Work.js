
import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  Paper,

} from '@mui/material';
import Star from "../assests/images/5star.png";
import Book from "../assests/images/bookslot.jpg";
import Payment from "../assests/images/payme.jpg";
import Colors from '../utils/colors';

const steps = [
  {
    title: 'Book Slot',
    description: 'Book your car wash online at your convenience.',
    image: Book,
  },
  {
    title: '5Star Services',
    description: 'Our experienced team arrives to clean your car thoroughly, We provide Best services.',
    image: Star,
  },
  {
    title: 'Payment',
    description: 'Payment can be made securely, and you can rate our service. We provide Best services.',
    image: Payment,
  },
];

function Work() {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <Container>
      <Typography variant="h1" align="center" sx={{ marginTop: '20px', color: Colors.palette.secondary.main }}>
        How We Works
      </Typography>
      <Grid container spacing={3}>
        {steps.map((step, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper
              elevation={3}
              style={{
                padding: '20px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.5s',
                transform: hoveredStep === index ? 'scale(1.1)' : 'scale(1)',
              }}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <img
                src={step.image}
                alt={step.title}
                title={step.title}
                style={{ maxWidth: '100%', height: '200px' }}
              />
              <Typography variant="h5">
                {step.title}
              </Typography>
              <Typography
                style={{
                  opacity: hoveredStep === index ? 1 : 0.7,
                  transition: 'opacity 0.3s',
                }}
              >
                {step.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
      
      
      </div>
    </Container>
  );
}

export default Work;
