import React, { useState } from "react";
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  Button,
  Typography,
  useTheme,
  Grid,
} from "@mui/material";
import Colors from "../../utils/colors";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { NavLink } from "react-router-dom";

const buttonStyle = {
  background: Colors.palette.secondary.lightBlue,
  color: Colors.palette.primary.main,
  height: "40px",
  width: "100%",
  marginTop: "7px",
};

const searcherContainerStyle = {
  background: Colors.palette.primary.main,
  borderRadius: "10px",
  padding: "2px",
};

const Searcher = () => {
  const [servicetype, setservicetype] = useState("");
  const [subcategory, setsubcategory] = useState("");

  const handleServiceTypeChange = (event) => {
    setservicetype(event.target.value);
  };

  const handleSubcategoryChange = (event) => {
    setsubcategory(event.target.value);
  };

  return (
    <Box
      sx={{
        ...searcherContainerStyle,
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={12} md={4}>
          <FormControl
            fullWidth
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: Colors.palette.primary.main,
              },
            }}
          >
            <Select
              value={servicetype}
              onChange={handleServiceTypeChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <Typography>Select Service Type</Typography>
              </MenuItem>
              <MenuItem value={1}>HatchBack</MenuItem>
              <MenuItem value={2}>Sedan</MenuItem>
              <MenuItem value={3}>SUV</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <FormControl
            fullWidth
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: Colors.palette.primary.main,
              },
            }}
          >
            <Select
              value={subcategory}
              onChange={handleSubcategoryChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <Typography>Select Subcategory</Typography>
              </MenuItem>
              <MenuItem value={1}>Routine Clean</MenuItem>
              <MenuItem value={2}>Dry Clean</MenuItem>
              <MenuItem value={3}>Deep Clean</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <FormControl
            fullWidth
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <NavLink
              to="/services"
              style={{
                textDecoration: "none",
                color: Colors.palette.primary.main,
              }}
            >
              <Button
                variant="contained"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={buttonStyle}
              >
                Go for it
              </Button>
            </NavLink>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Searcher;
