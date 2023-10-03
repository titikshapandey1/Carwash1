import { Box, Button } from '@mui/material';
import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Searcher = () => {
  return (
    <>
    {/* hii */}
       <Box sx={{background: "#013C6B"}}>
       <Button variant="Text" sx={{ backgroundColor: "white", color: "black",borderRadius:'10px' , margin: "2%"}}>
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