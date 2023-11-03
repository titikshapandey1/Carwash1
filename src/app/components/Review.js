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
      "Outstanding service! Impeccable cleaning, prompt pickup, and a gleaming car. Highly recommended for car care. <br/><br/> ~ Amet ipsum ",
  },
  {
    content:
      "Exceptional service, the deep clean was immaculate, and the pick-up/drop-off option made it hassle-free. Highly recommended !! <br/><br/> ~ Lorem ipsum",
  },
  {
    content:
      "A few days ago, encountered exceptional service. The clean was immaculate, drop-off and pick-up offered utmost convenience. A remarkable experience. <br/><br/> ~ Adipiscing",
  },
  {
    content:
      "My car's now a gleaming showstopper, thanks to the exceptional service, shining, spotless, and absolutely stunning after cleaning. <br/><br/> ~ Amet ipsum",
  },
];

const Review = () => {
  return (
    <Container>
      <Box sx={{ mt: 10 }}>
        <Typography
          variant="h4"
          sx={{
            color: Colors.palette.secondary.main,
            marginBottom: "50px",
            fontWeight: "bold",
          }}
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
