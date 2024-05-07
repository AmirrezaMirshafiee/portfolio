import { Stack, Box, Typography, TextField, Button, Link } from "@mui/material";
import TextareaAutosize from "react-textarea-autosize";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Contact() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [disable, setDisabled] = useState(false);

  const handleClick = () => {
    setUsername("");
    setEmail("");
    setMessage("");
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
  };

  const grey = {
    50: "#F3F6F9",
    100: "#E5EAF2",
    200: "#DAE2ED",
    300: "#C7D0DD",
    400: "#B0B8C4",
    500: "#9DA8B7",
    600: "#6B7A90",
    700: "#434D5B",
    800: "#303740",
    900: "#1C2025",
  };

  useGSAP(() => {
    gsap.from(".contact-img", {
      x: -400,
      duration: 2,
      opacity: 0,
      // delay:0.5
    });
    gsap.from(".contact-form", {
      x: 400,
      duration: 2,
      opacity: 0,
      // delay:0.5
    });
  });

  return (
    <>
      <Stack
        sx={{
          backgroundColor: "#000000",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "12%",
            pb: 10,
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "40%",
              height: "600px",
              alignItems: "center",
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <img
              width="100%"
              height="100%"
              src="./assets/IMG_0997.JPEG"
              alt=""
              className="contact-img"
            />
          </Box>
          <Stack flexDirection="column" className="contact-form">
            <Box
              sx={{
                backgroundColor: "#DAC5A726",
                width: { lg: "600px", md: "550px", sm: "550px", xs: "100%" },
                display: "flex",
                flexDirection: "column",
                padding: "30px 50px",
              }}
            >
              <Typography sx={{ color: "#DAC5A799", fontSize: "13px" }}>
                Contact
              </Typography>
              <Typography
                variant="h3"
                fontSize="bold"
                sx={{ color: "#DAC5A7" }}
              >
                Let’s get in touch.
              </Typography>
              <Box
                mt={3}
                gap={2}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <TextField
                  label="Username"
                  value={username}
                  required
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  variant="outlined"
                  sx={{
                    backgroundColor: "#DAC5A726",
                    border: "1px solid #DAC5A726",
                    "&:focus": {
                      color: "red !important",
                    },
                  }}
                />

                <TextField
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  required
                  style={{
                    backgroundColor: "#DAC5A726",
                    border: "1px solid #DAC5A726",
                  }}
                />
                <TextareaAutosize
                  placeholder="Message"
                  label="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  minRows={7}
                  style={{
                    backgroundColor: "#DAC5A726",
                    border: "1px solid #DAC5A726",
                    color: "black",
                    resize: "none",
                  }}
                />
                <Button
                  variant="text"
                  onClick={handleClick}
                  sx={{
                    backgroundColor: "#DAC5A7",
                    width: "100%",
                    color: "#0E0E0E",
                    border: "1px solid #DAC5A726",
                    "&:hover": {
                      backgroundColor: "#DAC5A7",
                    },
                    "&:focus": {
                      border: "1px solid #DAC5A726",
                    },
                  }}
                >
                  Send Message
                </Button>

                <Snackbar
                  open={open}
                  autoHideDuration={3000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                  >
                    Message Sent Successfully
                  </Alert>
                </Snackbar>
              </Box>
            </Box>
            <Stack width="100%" mt={5} gap="30px" flexDirection="column">
              <Link
                href="https://www.linkedin.com/in/amirreza-mirshafiee-a029a025b"
                target="_blank"
                sx={{ textDecoration: "none" }}
              >
                <Button
                  disabled={!email || !username || !message}
                  startIcon={<LinkedInIcon />}
                  sx={{
                    backgroundColor: "#DAC5A726",
                    width: "100%",
                    height: "56px",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    padding: "1px",
                    color: "#DAC5A7",
                  }}
                >
                  Linkedin
                </Button>
              </Link>
              <Link
                href="https://github.com/AmirrezaMirshafiee"
                target="_blank"
                sx={{ textDecoration: "none" }}
              >
                <Button
                  startIcon={<GitHubIcon />}
                  sx={{
                    backgroundColor: "#DAC5A726",
                    width: "100%",
                    height: "56px",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    padding: "1px",
                    color: "#DAC5A7",
                  }}
                >
                  Github
                </Button>
              </Link>
              <Link
                href="https://www.instagram.com/amirwrezam?igsh=MTl6dGx6NzVqbHEyMw=="
                target="_blank"
                sx={{ textDecoration: "none" }}
              >
                <Button
                  startIcon={<InstagramIcon />}
                  sx={{
                    backgroundColor: "#DAC5A726",
                    width: "100%",
                    height: "56px",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    padding: "1px",
                    color: "#DAC5A7",
                  }}
                >
                  Instagram
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
