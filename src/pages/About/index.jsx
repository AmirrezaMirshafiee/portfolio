import { Box, Button, Stack, Typography, Divider, Rating, Link } from "@mui/material";
import React from "react";
import SouthIcon from "@mui/icons-material/South";
import CallMadeIcon from "@mui/icons-material/CallMade";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import gsap from "gsap";
import InstagramIcon from "@mui/icons-material/Instagram";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Atropos from "atropos/react";
import "atropos/css";
import Image from "mui-image";

export default function About() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".about-header", {
      y: -200,
      duration: 2,
      opacity: 0,
    });
    gsap.from(".about-me-desc", {
      scrollTrigger: {
        trigger: ".about-me-desc",
        start: "top 100%",
        end: "bottom 60%",
        scrub: true,
      },
      y: 250,
      duration: 1,
    });
    gsap.from(".about-me-btns", {
      scrollTrigger: {
        trigger: ".about-me-btns",
        start: "top 100%",
        end: "bottom 60%",
        scrub: true,
      },
      y: 200,
      duration: 1,
    });
    gsap.from(".about-me-awards", {
      scrollTrigger: {
        trigger: ".about-me-awards",
        start: "top 100%",
        end: "bottom 60%",
        scrub: true,
      },
      y: 200,
      duration: 1,
    });
    gsap.from(".about-me-skills", {
      scrollTrigger: {
        trigger: ".about-me-skills",
        start: "top 100%",
        end: "bottom 60%",
        scrub: true,
      },
      y: 200,
      duration: 1,
    });
  });
  return (
    <>
      <Stack
        sx={{
          width: "100%",
          // height: "2100px",
          backgroundColor: "#000000	",
          flexDirection: "column",
          overflow: "hidden",
          pt: "200px",
          pb: 10,
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            padding: "50px",
            justifyContent: "center",
          }}
        >
          {/* <Box
            sx={{
              width: { xl: "30%", lg: "30%", md: "0", sm: "0", xs: "0" },
              height: "590px",
              position: "sticky",
              top: 100,
              left: 0,
              display: {
                xl: "block",
                lg: "block",
                md: "none",
                sm: "none",
                xs: "none",
              },
            }}
          >
            <img
              width="100%"
              height="60%"
              src="assets/aboutimg1.jfif"
              alt="img"
            />
          </Box> */}
          <Box
            sx={{
              width: {
                xl: "60%",
                lg: "60%",
                md: "90%",
                sm: "90%",
                xs: "90%",
              },
              // height: "350px",
            }}
          >
            <Box className="about-header">
              <Typography variant="h3" color="#DAC5A7">
                Amirreza Mirshafiee
              </Typography>
              <Typography variant="body2" color="#DAC5A799">
                Delivering Premium Front-End and Back-End Development Services
                to Boost Your Online Presence.
              </Typography>
              <Button
                sx={{ color: "#DAC5A7", fontSize: "13px", marginTop: "25px" }}
                startIcon={
                  <SouthIcon
                    fontSize="small"
                    sx={{
                      color: "#DAC5A7",
                      borderRadius: "50%",
                      border: "1px solid #DAC5A726",
                      padding: "5px",
                    }}
                  />
                }
              >
                About Me
              </Button>
            </Box>
            <Stack
              mt={15}
              sx={{
                // height: "750px",
                width: "100%",
                backgroundColor: "#DAC5A726",
                padding: "50px ",
              }}
              className="about-me-desc"
            >
              <Stack flexDirection="column">
                {" "}
                <Box>
                  <Typography color="#DAC5A799" fontSize="13px">
                    Amirreza Mirshafiee
                  </Typography>
                  <Typography color="#DAC5A799" fontSize="40px">
                    Your Partner in Bringing Your Web Design Vision to Life
                  </Typography>
                  <Typography color="#DAC5A799" fontSize="13px">
                    As a freelance full stack developer, I bring a unique
                    combination of creativity and technical expertise to every
                    project. With a keen eye for design and a passion for
                    delivering user-friendly web experiences, I work closely
                    with clients to understand their needs and bring their
                    vision to life.
                    <br />
                    <br /> My approach is rooted in collaboration and
                    communication, and I take pride in my ability to explain
                    technical concepts in simple terms. Whether I'm developing a
                    new website from scratch or optimizing an existing site for
                    search engines, I always strive for excellence in both form
                    and function. With a dedication to quality and a commitment
                    to staying on top of the latest trends and technologies, I
                    am confident in my ability to deliver exceptional results
                    that exceed my clients' expectations.ّ
                  </Typography>
                  <Box mt={3} sx={{ width: "100%" }}>
                    <img
                      width="100%"
                      height="100%"
                      src="assets/IMG_0980.PNG"
                      alt="img"
                    />
                  </Box>
                </Box>
              </Stack>
            </Stack>
            <Stack width="100%" mt={5} gap="30px" flexDirection="row">
              <Link
                href="https://www.linkedin.com/in/amirreza-mirshafiee-a029a025b"
                target="_blank"
                sx={{ textDecoration: "none" }}
              >
                <Button
                  startIcon={<LinkedInIcon />}
                  sx={{
                    backgroundColor: "#DAC5A726",
                    width: "265px",
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
                    width: "265px",

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
                    width: "260px",

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
            <Stack
              mt={5}
              sx={{
                width: "100%",
                backgroundColor: "#DAC5A726",
                padding: "50px ",
                flexDirection: "column",
              }}
              className="about-me-awards"
            >
              <Typography color="#DAC5A799" fontSize="13px">
                Awards
              </Typography>
              <Box mt={3} sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px 0",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#DAC5A7", fontSize: "20px" }}
                  >
                    Awwwards SOTD
                  </Typography>
                  <Typography sx={{ color: "#DAC5A7" }}>2023</Typography>
                </Box>
                <Divider
                  sx={{
                    borderColor: "#DAC5A726",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px 0",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#DAC5A7", fontSize: "20px" }}
                  >
                    Awwwards SOTD
                  </Typography>
                  <Typography sx={{ color: "#DAC5A7" }}>2023</Typography>
                </Box>
                <Divider
                  sx={{
                    borderColor: "#DAC5A726",
                  }}
                />{" "}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px 0",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#DAC5A7", fontSize: "20px" }}
                  >
                    Awwwards SOTD
                  </Typography>
                  <Typography sx={{ color: "#DAC5A7" }}>2023</Typography>
                </Box>
                <Divider
                  sx={{
                    borderColor: "#DAC5A726",
                  }}
                />{" "}
              </Box>
            </Stack>
            <Stack
              mt={5}
              sx={{
                width: "100%",
                backgroundColor: "#DAC5A726",
                padding: "50px ",
                flexDirection: "column",
              }}
              className="about-me-skills"
            >
              <Typography color="#DAC5A799" fontSize="13px">
                Skills
              </Typography>
              <Box mt={3} sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px 0",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#DAC5A7", fontSize: "20px" }}
                  >
                    React JS
                  </Typography>
                  <Rating value={4.5} precision={0.5} />
                </Box>
                <Divider
                  sx={{
                    borderColor: "#DAC5A726",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px 0",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#DAC5A7", fontSize: "20px" }}
                  >
                    Node JS
                  </Typography>
                  <Rating value={4.5} precision={0.5} />
                </Box>
                <Divider
                  sx={{
                    borderColor: "#DAC5A726",
                  }}
                />{" "}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px 0",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#DAC5A7", fontSize: "20px" }}
                  >
                    Express
                  </Typography>
                  <Rating value={4.5} precision={0.5} />
                </Box>
                <Divider
                  sx={{
                    borderColor: "#DAC5A726",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px 0",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#DAC5A7", fontSize: "20px" }}
                  >
                    Square
                  </Typography>
                  <Rating value={4.5} precision={0.5} />
                </Box>
                <Divider
                  sx={{
                    borderColor: "#DAC5A726",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px 0",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#DAC5A7", fontSize: "20px" }}
                  >
                    Next JS
                  </Typography>
                  <Rating value={4.5} precision={0.5} />
                </Box>
                <Divider
                  sx={{
                    borderColor: "#DAC5A726",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px 0",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#DAC5A7", fontSize: "20px" }}
                  >
                    Redux
                  </Typography>
                  <Rating value={4.5} precision={0.5} />
                </Box>
                <Divider
                  sx={{
                    borderColor: "#DAC5A726",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px 0",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#DAC5A7", fontSize: "20px" }}
                  >
                    Java Script
                  </Typography>
                  <Rating value={4.5} precision={0.5} />
                </Box>
                <Divider
                  sx={{
                    borderColor: "#DAC5A726",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px 0",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#DAC5A7", fontSize: "20px" }}
                  >
                    Material UI
                  </Typography>
                  <Rating value={4.5} precision={0.5} />
                </Box>
                <Divider
                  sx={{
                    borderColor: "#DAC5A726",
                  }}
                />{" "}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px 0",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#DAC5A7", fontSize: "20px" }}
                  >
                    Ant Design
                  </Typography>
                  <Rating value={4.5} precision={0.5} />
                </Box>
                <Divider
                  sx={{
                    borderColor: "#DAC5A726",
                  }}
                />{" "}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px 0",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#DAC5A7", fontSize: "20px" }}
                  >
                    Testing React
                  </Typography>
                  <Rating value={4.5} precision={0.5} />
                </Box>
                <Divider
                  sx={{
                    borderColor: "#DAC5A726",
                  }}
                />{" "}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px 0",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#DAC5A7", fontSize: "20px" }}
                  >
                    Bootstrap
                  </Typography>
                  <Rating value={4.5} precision={0.5} />
                </Box>
                <Divider
                  sx={{
                    borderColor: "#DAC5A726",
                  }}
                />{" "}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px 0",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#DAC5A7", fontSize: "20px" }}
                  >
                    Html
                  </Typography>
                  <Rating value={4.5} precision={0.5} />
                </Box>
                <Divider
                  sx={{
                    borderColor: "#DAC5A726",
                  }}
                />{" "}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px 0",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#DAC5A7", fontSize: "20px" }}
                  >
                    MongoDB
                  </Typography>
                  <Rating value={4.5} precision={0.5} />
                </Box>
                <Divider
                  sx={{
                    borderColor: "#DAC5A726",
                  }}
                />{" "}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px 0",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#DAC5A7", fontSize: "20px" }}
                  >
                    Formik
                  </Typography>
                  <Rating value={4.5} precision={0.5} />
                </Box>
                <Divider
                  sx={{
                    borderColor: "#DAC5A726",
                  }}
                />{" "}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px 0",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#DAC5A7", fontSize: "20px" }}
                  >
                    Yup
                  </Typography>
                  <Rating value={4.5} precision={0.5} />
                </Box>
                <Divider
                  sx={{
                    borderColor: "#DAC5A726",
                  }}
                />{" "}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px 0",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#DAC5A7", fontSize: "20px" }}
                  >
                    Swiper
                  </Typography>
                  <Rating value={4.5} precision={0.5} />
                </Box>
                <Divider
                  sx={{
                    borderColor: "#DAC5A726",
                  }}
                />{" "}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px 0",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#DAC5A7", fontSize: "20px" }}
                  >
                    GSAP
                  </Typography>
                  <Rating value={4.5} precision={0.5} />
                </Box>
                <Divider
                  sx={{
                    borderColor: "#DAC5A726",
                  }}
                />{" "}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px 0",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#DAC5A7", fontSize: "20px" }}
                  >
                    Chart JS
                  </Typography>
                  <Rating value={4.5} precision={0.5} />
                </Box>
                <Divider
                  sx={{
                    borderColor: "#DAC5A726",
                  }}
                />{" "}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px 0",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#DAC5A7", fontSize: "20px" }}
                  >
                    Redux
                  </Typography>
                  <Rating value={4.5} precision={0.5} />
                </Box>
                <Divider
                  sx={{
                    borderColor: "#DAC5A726",
                  }}
                />
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
