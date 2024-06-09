import React from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { Stack, Box, Typography, Button, Divider, Link } from "@mui/material";
import List from "@mui/material/List";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import InstagramIcon from "@mui/icons-material/Instagram";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListSubheader from "@mui/material/ListSubheader";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function Footer() {
  return (
    <>
      <Stack
        flexDirection="column"
        // mt={3}
        sx={{
          backgroundColor: "#171616",
          width: "100%",
          height: "70%",
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "column",
          mx: "auto",
          textAlign: "center",
        }}
      >
        <Stack>
          <Box mt={20} mb={5} padding="20px">
            <Typography color="#DAC5A7" variant="body1">
              Project in mind?
            </Typography>
            <Typography color="#DAC5A7" variant="h2">
              Let’s make your
            </Typography>
            <Typography color="#DAC5A7" variant="h3" fontStyle="italic">
              Website shine
            </Typography>
            <Typography color="#DAC5A799" variant="body1" fontSize="13">
              Premium web development, and SEO services to help your business
              stand out.
            </Typography>
            <Link href='/services'>
            <Button
              sx={{
                backgroundColor: "#DAC5A7",
                fontSize: "13px",
                marginTop: "30px",
                padding: "10px",
                color: "#0E0E0E",
                "&:hover": {
                  backgroundColor: "#DAC5A7",
                },
              }}
              endIcon={
                <CallMadeIcon
                  fontSize="small"
                  sx={{
                    border: "1px solid #DAC5A726",
                    padding: "5px",
                  }}
                />
              }
            >
              My Services
            </Button>
            </Link>
          </Box>
        </Stack>
        <Stack
          width="100%"
          sx={{
            backgroundColor: "#171616",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { md: "row" },
            gap: 1,
          }}
        >
          <Stack>
            <Typography
              sx={{
                color: "#DAC5A7",
              }}
            >
              Social Communities :
            </Typography>
          </Stack>
          
          <Stack  
          gap={'25px'}
            flexDirection={{md:'row',xs:'column',sm:'column'}}
          >
            <Link
              href="https://www.instagram.com/amirwrezam?igsh=MTl6dGx6NzVqbHEyMw=="
              target="_blank"
              sx={{ textDecoration: "none" }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <Link>
                    <InstagramIcon
                      sx={{
                        backgroundColor: "#DAC5A726",
                        padding: "8px",
                        borderRadius: "50%",
                        width: "38px",
                        height: "38px",
                        color: "#DAC5A799",
                      }}
                    />
                  </Link>
                </ListItemIcon>
                <ListItemText sx={{ color: "#DAC5A799" }} primary="Instagram" />
              </ListItemButton>
            </Link>
            <Link
              href="https://www.linkedin.com/in/amirreza-mirshafiee-a029a025b"
              target="_blank"
              sx={{ textDecoration: "none" }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <LinkedInIcon
                    sx={{
                      backgroundColor: "#DAC5A726",
                      padding: "8px",
                      borderRadius: "50%",
                      width: "38px",
                      height: "38px",
                      color: "#DAC5A799",
                    }}
                  />
                </ListItemIcon>
                <ListItemText sx={{ color: "#DAC5A799" }} primary="LinkedIn" />
              </ListItemButton>
            </Link>
            <Link
              href="https://github.com/AmirrezaMirshafiee"
              target="_blank"
              sx={{ textDecoration: "none" }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <GitHubIcon
                    sx={{
                      backgroundColor: "#DAC5A726",
                      padding: "8px",
                      borderRadius: "50%",
                      width: "38px",
                      height: "38px",
                      color: "#DAC5A799",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  sx={{ color: "#DAC5A799" }}
                  primary="GitHubIcon"
                />
              </ListItemButton>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
