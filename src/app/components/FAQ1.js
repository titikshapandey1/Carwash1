import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Colors from '../utils/colors';
import FAQ1 from './FAQSearcher';

const faqData = [
  {
    question: 'What is the FAQ page?',
    answer: 'The FAQ page contains frequently asked questions and their answers.',
  },
  {
    question: 'How do I use the FAQ page?',
    answer: 'You can click on the question to reveal the answer. Click again to hide it.',
  },
  {
    question: 'Can I add more questions and answers?',
    answer: 'Yes, you can easily extend the FAQ page by adding more items to the data array.',
  },
  {
    question: 'Can I add more questions and answers?',
    answer: 'Yes, you can easily extend the FAQ page by adding more items to the data array.',
  },
  {
    question: 'Can I add more questions and answers?',
    answer: 'Yes, you can easily extend the FAQ page by adding more items to the data array.',
  },
  {
    question: 'Can I add more questions and answers?',
    answer: 'Yes, you can easily extend the FAQ page by adding more items to the data array.',
  },
];

function FAQPage() {
  return (
    <Container>
      <Typography variant="h2" align="center" sx={{ marginTop: '20px', color: Colors.palette.secondary.main }}>
        Website FAQ
      </Typography>
    <FAQ1/>

      {faqData.map((item, index) => (
        <Accordion key={index} sx={{marginBottom:"10px"}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} >
            <Typography variant="h5">{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails >
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}

export default FAQPage;


