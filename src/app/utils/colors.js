// import { createTheme } from "@mui/material/styles";

// const Colors = createTheme({
//   palette: {

//     primary: {
//       main: "#FFFFFF",
//       darkBlue:"#002C4F",
//       lightBlue:"#007DE1",
//       red:"#DF1E23",
//     },

//     secondary:{
//       darkBlue:"#013C6B",
//       blue:"#007DE1",
//       lightBlue:"#008EFF",
//       brown:"#353535",
//       // red:"#DF1E23",
//       lightGreen:"#00C1B6",
//       yellow:"#F0CA00",
//       purple:"#DC77FF",
//       darkPurple:"#A300F0" ,  
//     }
//   },
// });

// export default Colors;


import { createTheme } from '@mui/material/styles';

const Colors = createTheme({
  palette: {
    primary: {
      main:'#002C4F', 
      
    //  backgroundj: '#CCFFCC',
     color:' #FFFFFF',
    //  color1:' #00000080',
    //  inactive:"#FF0000",
    //  pending:"#ffc804"
    },

    background: {
      default:  '#002C4F',
       card: ' #7797FE',
      text:'#FFFFFF',
   
    },
    // color:{
    //    maincolor: '#000000',
    //    body:' #FFFFFF',
    //   HeadingText:'013C6B'

    // },
    shadows:{
      boxshadow: '4px 4px 4px 0px #00000040',
    }
  },
});

export default Colors;
