import { Box, Button } from '@mui/material';
import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Colors from '../../utils/colors';

const Searcher = () => {
  return (
    <>
  {/* hii */}
       <Box sx={{background: Colors.palette.secondary.main}}>
       <Button variant="Text" sx={{ background: Colors.palette.primary.main, color: Colors.palette.secondary.black,borderRadius:'10px' , margin: "2%"}}>
              Select Service Type   <ArrowDropDownIcon/>
            </Button>

            <Button variant="Text" sx={{ backgroundColor: "white", color: "black",borderRadius:'10px', margin: {xs: "2%", sm: "0.4%", md: "1%"}}}>
              Select Service Type   <ArrowDropDownIcon/>
            </Button>

            <Button variant="Text" sx={{ backgroundColor: "white", color: "black",borderRadius:'10px' , margin: {xs: "2%", sm: "0.4%", md: "1%"}}}>
              Go  
            </Button>
       </Box>
    </>
  )
}

export default Searcher;