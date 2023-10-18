import * as React from "react";
import { Container, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Colors from "../utils/colors";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { NavLink } from "react-router-dom";

const buttonStyle = {
  color: Colors.palette.primary.darkBlue,
  textTransform: "capitalize",
  fontSize: "18px",
  transition: "background-color 0.3s, color 0.3s",
};

const buttonHoverStyle = {
  backgroundColor: Colors.palette.secondary.cardBackground,
  color: Colors.palette.secondary.main,
};

const faqData = [
  {
    question: "What is the FAQ page?",
    answer:
      "The FAQ page contains frequently asked questions and their answers.",
  },
  {
    question: "How do I use the FAQ page?",
    answer:
      "You can click on the question to reveal the answer. Click again to hide it.",
  },
  {
    question: "Can I add more questions and answers?",
    answer:
      "Yes, you can easily extend the FAQ page by adding more items to the data array.",
  },
];

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  background: Colors.palette.primary.main,
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  height: "auto",
}));

const SmallerFontSizeTypography = styled(Typography)({
  fontSize: "20px",
  fontWeight: "600",
  color: Colors.palette.primary.darkBlue,
});

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container sx={{ mt: 10, mb: 5 }}>
      <Typography
        variant="h4"
        sx={{ color: Colors.palette.secondary.main, mb: 5 }}
      >
        <b>Frequently Asked Question:</b>
      </Typography>

      {faqData.map((item, index) => (
        <Accordion
          key={index}
          sx={{
            marginBottom: "20px",
            border: `1px solid ${Colors.palette.background.lightBlue}`,
            boxShadow: "none",
            padding: "20px",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <SmallerFontSizeTypography variant="h5">
              {item.question}
            </SmallerFontSizeTypography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: Colors.palette.secondary.grey }}>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <NavLink to="/faqs" style={{ textDecoration: "none" }}>
          <Button
            variant="text"
            endIcon={<KeyboardDoubleArrowDownIcon />}
            sx={{
              ...buttonStyle,
              "&:hover": {
                ...buttonHoverStyle,
              },
            }}
          >
            More
          </Button>
        </NavLink>
      </Box>
    </Container>
  );
}
