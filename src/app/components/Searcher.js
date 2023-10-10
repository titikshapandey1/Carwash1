import { Box, Button } from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Colors from "../utils/colors";

const Searcher = () => {
  return (
    <>
      <Box sx={{ background: Colors.palette.secondary.main }}>
        <Button
          variant="Text"
          sx={{
            background: Colors.palette.primary.main,
            color: Colors.palette.secondary.black,
            borderRadius: "10px",
            margin: "2%",
            "&:hover": {
              backgroundColor: Colors.palette.primary.lightBlue,
              color: Colors.palette.primary.main,
              border: `1px solid ${Colors.palette.primary.main}`,
            },
          }}
        >
          Select Service Type <ArrowDropDownIcon />
        </Button>

        <Button
          variant="Text"
          sx={{
            backgroundColor: Colors.palette.primary.main,
            color: Colors.palette.secondary.black,
            borderRadius: "10px",
            margin: { xs: "2%", sm: "0.4%", md: "1%" },
            "&:hover": {
              backgroundColor: Colors.palette.primary.lightBlue,
              color: Colors.palette.primary.main,
              border: `1px solid ${Colors.palette.primary.main}`,
            },
          }}
        >
          Select Service Type <ArrowDropDownIcon />
        </Button>

        <Button
          variant="Text"
          sx={{
            backgroundColor: Colors.palette.primary.main,
            color: Colors.palette.secondary.black,
            borderRadius: "10px",
            margin: { xs: "2%", sm: "0.4%", md: "1%" },
            "&:hover": {
              backgroundColor: Colors.palette.primary.lightBlue,
              color: Colors.palette.primary.main,
              border: `1px solid ${Colors.palette.primary.main}`,
            },
          }}
        >
          Go
        </Button>
      </Box>
    </>
  );
};

export default Searcher;
