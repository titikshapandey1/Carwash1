import React, { useState, useEffect } from "react";
import { Select, MenuItem, Button, Box, Grid } from "@mui/material";
import Colors from "../utils/colors";
import Axios from "../utils/Axios";

const Searcher = ({ selectedService, selectedCar }) => {
  const [inputValue1, setInputValue1] = useState(selectedService || "");
  const [inputValue2, setInputValue2] = useState(selectedCar || "");
  const [serviceTypes, setServiceTypes] = useState([]);
  const [carTypes, setCarTypes] = useState([]);

  const handleServiceTypeChange = (event) => {
    setInputValue1(event.target.value);
  };

  const handleCarTypeChange = (event) => {
    setInputValue2(event.target.value);
  };

  const fetchData = async () => {
    try {
      const responseService = await Axios.get("/get-all-service");
      if (Array.isArray(responseService.data.srv)) {
        setServiceTypes(responseService.data.srv);
      } else {
        console.error("Error:", responseService.data);
      }

      const responseCarType = await Axios.get("/get-cartype");
      if (Array.isArray(responseCarType.data.c)) {
        setCarTypes(responseCarType.data.c);
      } else {
        console.error("Error:", responseCarType.data);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    console.log("Service Type:", serviceTypes);
    console.log("Car Type:", carTypes);
  };

  return (
    <Box sx={{ background: Colors.palette.secondary.main }}>
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ marginLeft: "5px", marginRight: "5px" }}
        >
          <Select
            value={inputValue1}
            onChange={handleServiceTypeChange}
            displayEmpty
            placeholder="Select Service Type"
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              marginBottom: "2%",
            }}
          >
            <MenuItem value="" disabled>
              Select Service Type
            </MenuItem>
            {serviceTypes.map((type) => (
              <MenuItem key={type._id} value={type._id}>
                {type.serviceName}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ marginLeft: "5px", marginRight: "5px" }}
        >
          <Select
            value={inputValue2}
            onChange={handleCarTypeChange}
            displayEmpty
            placeholder="Select Car Type"
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              marginBottom: "2%",
            }}
          >
            <MenuItem value="" disabled>
              Select Car Type
            </MenuItem>
            {carTypes.map((type) => (
              <MenuItem key={type._id} value={type._id}>
                {type.carName}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid
          item
          sx={{ display: "flex", justifyContent: "center", marginLeft: "5px" }}
        >
          <Button
            variant="Text"
            onClick={handleSearch}
            sx={{
              width: "100px",
              borderRadius: "10px",
              marginBottom: "10%",
              backgroundColor: Colors.palette.primary.main,
              color: Colors.palette.secondary.black,
              "&:hover": {
                backgroundColor: Colors.palette.primary.lightBlue,
                color: Colors.palette.primary.main,
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
