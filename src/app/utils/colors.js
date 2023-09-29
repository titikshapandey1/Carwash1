import { createTheme } from "@mui/material/styles";

const Colors = createTheme({
  palette: {

    primary: {
      main: "#FFFFFF",
      darkBlue:"#002C4F",
      lightBlue:"#007DE1",
      red:"#DF1E23",
    },

    secondary:{
      darkBlue:"#013C6B",
      blue:"#007DE1",
      lightBlue:"#008EFF",
      brown:"#353535",
      // red:"#DF1E23",
      lightGreen:"#00C1B6",
      yellow:"#F0CA00",
      purple:"#DC77FF",
      darkPurple:"#A300F0" ,  
    }
  },
});

export default Colors;