import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import image1 from "../assests/images/Quote-Above.png";
import image2 from "../assests/images/Quote-Below.png";
import Colors from "../utils/colors";
const cards = [
  {
    content:
      "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/><br/> ~ Amet ipsum ",
  },
  {
    content:
      "sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/><br/> ~ Lorem ipsum",
  },
  {
    content:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, dolor sit amet, consectetur adipiscing elit. <br/><br/> ~ Adipiscing",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/><br/> ~ Amet ipsum",
  },
];

const Review = () => {
  return (
    <Container>
      <Box sx={{ marginTop: "5px" }}>
        <Typography
          variant="h4"
          sx={{ color: Colors.palette.secondary.main, marginBottom: "50px", fontWeight: "bold" }}
        >
          Review
        </Typography>

        <Grid container spacing={2}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  border: `2px dashed ${Colors.palette.secondary.main}`,
                  // border: `2px dotted ${Colors.palette.secondary.main}`,
                  // border: `2px dot-dot-dash ${Colors.palette.secondary.main}`,

                  position: "relative",
                }}
              >
                <img
                  src={image1}
                  alt="TopImage"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "30px",
                    height: "30px",
                    zIndex: 1,
                  }}
                />

                <img
                  src={image2}
                  alt="BottomImage"
                  style={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    width: "30px",
                    height: "30px",
                    zIndex: 1,
                  }}
                />

                <CardContent
                  sx={{
                    marginTop: "40px",
                    flex: 1,
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ color: Colors.palette.secondary.black }}
                    dangerouslySetInnerHTML={{ __html: card.content }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Review;
