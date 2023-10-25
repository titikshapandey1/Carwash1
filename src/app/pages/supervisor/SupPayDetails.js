import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import SupDash from "../../components/SupDash";
import Table from "../../components/Table";
import Colors from "../../utils/colors";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

const SupPayDetails = () => {
  return (
    <>
      <Box
        display="block"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        className="wrapper"
      >
        <SupDash />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            marginTop: { xs: "15%", sm: "10%", md: "8%" },
            marginLeft: { sm: "0%", md: "21.5%", lg: "17%" },
          }}
        >
          <Box align="center">
            <Button
              variant="outlined"
              size="large"
              sx={{
                backgroundColor: Colors.palette.secondary.main,
                color: Colors.palette.primary.main,
                borderRadius: "5px",
                "&:hover": { backgroundColor: Colors.palette.secondary.blue },
                mt: "5%",
              }}
            >
              Print
            </Button>
          </Box>

          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: "3%",
              mb: "5%",
            }}
          >
            <Box
              sx={{
                background: Colors.palette.secondary.cardBackground,
                width: { xs: "100%", sm: "100%", md: "60%" },
                height: "100%",
                padding: "20px",
              }}
            >
              <Box
                sx={{
                  display: { xs: "block", sm: "flex", md: "flex" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: Colors.palette.primary.darkBlue,
                  padding: "10px",
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: "600" }}>
                  LOGO
                </Typography>
                <Typography>Booking ID: #7102023</Typography>
              </Box>

              <Box
                sx={{
                  display: { xs: "block", sm: "flex", md: "flex" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: Colors.palette.primary.darkBlue,
                  padding: "10px",
                }}
              >
                <Typography>Booking Date: 07/10/2023</Typography>
                <Typography>Scheduled Date: 10/10/2023</Typography>
              </Box>

              <Paper sx={{ height: "auto", padding: "20px" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    padding: "5px",
                  }}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: Colors.palette.primary.darkBlue,
                    }}
                  >
                    <PhoneIcon sx={{}} />
                    7017866149 / 7017866149
                  </Typography>
                </Box>
                <br />

                <Box
                  sx={{
                    display: { xs: "block", sm: "flex", md: "flex" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: Colors.palette.primary.darkBlue,
                    padding: "10px",
                  }}
                >
                  <Typography>Full Name + Surname</Typography>
                  <Typography>
                    {" "}
                    <MailIcon />
                    kushbhardwaj7017@gmail.com
                  </Typography>
                </Box>

                <Box sx={{ marginTop: "2%" }}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h6"
                      sx={{ color: Colors.palette.secondary.main }}
                    >
                      Address
                    </Typography>
                  </Grid>
                  <br />
                  <Box
                    sx={{
                      width: "50%",
                      backgroundColor: Colors.palette.secondary.lightGrey,
                      padding: "15px",
                    }}
                  ></Box>{" "}
                  <br />
                  <Box
                    sx={{
                      width: "30%",
                      backgroundColor: Colors.palette.secondary.lightGrey,
                      padding: "15px",
                    }}
                  ></Box>{" "}
                  <br />
                  <Box
                    sx={{
                      width: "50%",
                      backgroundColor: Colors.palette.secondary.lightGrey,
                      padding: "15px",
                    }}
                  ></Box>
                </Box>
              </Paper>

              <Box
                sx={{
                  marginTop: "5%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: Colors.palette.primary.main,
                  background: Colors.palette.primary.darkBlue,
                  padding: "5px",
                }}
              >
                <Typography variant="h6">Service Type</Typography>
                <Typography variant="h6">Amount (in Rupee)</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "5px",
                  background: Colors.palette.primary.main,
                }}
              >
                <Typography>Routine Clean</Typography>
                <Typography>Rs. 499</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "40%",
                  padding: "20px",
                  background: Colors.palette.primary.main,
                  marginTop: "5%",
                  marginLeft: "auto",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography>Total Amount :</Typography>
                  <Typography>Rs. 499</Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography>Mode Of Payment :</Typography>
                  <Typography>Cash on Delivery</Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography>Status :</Typography>
                  <Typography sx={{ color: "red" }}>Pending</Typography>
                </div>
              </Box>
            </Box>
          </Container>
          {/* <Table /> */}
        </Box>
      </Box>
    </>
  );
};

export default SupPayDetails;