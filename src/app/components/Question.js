import { Box, Typography } from '@mui/material';
import React from 'react';
import Colors from '../utils/colors';

const Question = () => {
  return (
   <>
    <Box marginLeft={"3%"} sx={{mt:10}}>

        <Box >
        <Typography variant="h4" sx={{color:Colors.palette.primary.darkBlue}}>

           <b>
           Frequently Asked Question:
           </b> 
        </Typography><br/>
        </Box>

        <Typography>

        <b>Ques.</b>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, ea commodo consequat. Duis aute irure dolor in reprehenderit ?
 <br/>
        <b>Ans</b>
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography> <br/> <br/>

        <Typography>

<b>Ques.</b>
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ? <br/>
<b>Ans</b>
Lorem ipsum dolor sit amet. At laboriosam maiores in illum nihil aut voluptatum dignissimos.
</Typography><br/> <br/>
 <Typography>

<b>Ques.</b>
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ? <br/>
<b>Ans</b>
Lorem ipsum dolor sit amet. At laboriosam maiores in illum nihil aut voluptatum dignissimos.
</Typography>



    </Box>
   </>
  )
}

export default Question;