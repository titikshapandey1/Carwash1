// import { Box, Button } from "@mui/material";
// import React from "react";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import Colors from "../utils/colors";

// const Searcher = () => {
//   return (
//     <>
//       <Box sx={{ background: Colors.palette.secondary.main }}>
//         <Button
//           variant="Text"
//           sx={{
//             background: Colors.palette.primary.main,
//             color: Colors.palette.secondary.black,
//             borderRadius: "10px",
//             margin: "2%",
//             "&:hover": {
//               backgroundColor: Colors.palette.primary.lightBlue,
//               color: Colors.palette.primary.main,
//               border: `1px solid ${Colors.palette.primary.main}`,
//             },
//           }}
//         >
//           Select Service Type <ArrowDropDownIcon />
//         </Button>

//         <Button
//           variant="Text"
//           sx={{
//             backgroundColor: Colors.palette.primary.main,
//             color: Colors.palette.secondary.black,
//             borderRadius: "10px",
            // margin: { xs: "2%", sm: "0.4%", md: "1%" },
//             "&:hover": {
//               backgroundColor: Colors.palette.primary.lightBlue,
//               color: Colors.palette.primary.main,
//               border: `1px solid ${Colors.palette.primary.main}`,
//             },
//           }}
//         >
//           Select Service Type <ArrowDropDownIcon />
//         </Button>

//         <Button
//           variant="Text"
//           sx={{
//             backgroundColor: Colors.palette.primary.main,
//             color: Colors.palette.secondary.black,
//             borderRadius: "10px",
            // margin: { xs: "2%", sm: "0.4%", md: "1%" },
//             "&:hover": {
//               backgroundColor: Colors.palette.primary.lightBlue,
//               color: Colors.palette.primary.main,
//               border: `1px solid ${Colors.palette.primary.main}`,
//             },
//           }}
//         >
//           Go
//         </Button>
//       </Box>
//     </>
//   );
// };

// export default Searcher;



import React, { useState } from "react";
import { TextField, Autocomplete, Button, Box, Grid} from "@mui/material";
import Colors from "../utils/colors";

const Searcher = () => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [options, 
    // setOptions
  ] = useState([
    "4Wheeler",
    "Audi",
    "BMW",
    "Option 4",
    "Option 5",
  ]);

  const handleInputChange1 = (event, newInputValue) => {
    setInputValue1(newInputValue);
  };

  const handleInputChange2 = (event, newInputValue) => {
    setInputValue2(newInputValue);
  };

  // const handleSearch = () => {
  //   // Handle the search based on the selected options or input values
  //   console.log("Search Field 1:", inputValue1);
  //   console.log("Search Field 2:", inputValue2);
  // };

  return (
    <Box sx={{ background: Colors.palette.secondary.main }}>
      <Grid container spacing={1} >
        <Grid item xs={12} sm={4}  sx={{marginLeft:'5px', marginRight:'5px'}} >
          <Autocomplete
            value={inputValue1}
            onChange={(event, newValue) => {
              setInputValue1(newValue);
            }}
            options={options}
            onInputChange={handleInputChange1}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Select Service Type"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",               
                  marginBottom: "2%", 
                 
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4} sx={{marginLeft:'5px', marginRight:'5px'}}>
          <Autocomplete
            value={inputValue2}
            onChange={(event, newValue) => {
              setInputValue2(newValue);
            }}
            options={options}
            onInputChange={handleInputChange2}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Select Service Type"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  marginBottom: "2%",
             
                }}
              />
            )}
          />
        </Grid>
        <Grid item sx={{ display: "flex", justifyContent: "center" ,marginLeft:'5px'}} >
          <Button
            variant="Text"
            sx={{
              backgroundColor: Colors.palette.primary.main,
              color: Colors.palette.secondary.black,
              borderRadius: "10px",
              marginBottom: "10%",
             

              "&:hover": {
                backgroundColor: Colors.palette.primary.lightBlue,
                color: Colors.palette.primary.main,
                border: `1px solid ${Colors.palette.primary.main}`,
              },
            }}
          >
            Go
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Searcher;
