import React, { useRef } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Atropos from "atropos/react";
import "atropos/css";
import {Helmet} from "react-helmet";


const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".home-header", {
      y: 200,
      duration: 2,
      opacity: 0,
      // delay:0.5
    });
    gsap.from(".triple-boxes", {
      scrollTrigger: {
        trigger: ".triple-boxes",
        start: "top 100%",
        end: "bottom 60%",
        scrub: true,
      },
      y: 300,
      duration: 1,
      opacity: 0.7,
    });
    gsap.from(".img-box", {
      scrollTrigger: {
        trigger: ".img-box",
        start: "top 100%",
        end: "bottom 60%",
        scrub: true,
      },
      y: 300,
      duration: 1,
    });
    gsap.from(".step-header", {
      scrollTrigger: {
        trigger: ".step-header",
        start: "top 100%",
        end: "bottom 80%",
        scrub: true,
      },
      y: 200,
      // duration: .5,
      opacity: 0,
    });
    gsap.from(".step-header-small", {
      scrollTrigger: {
        trigger: ".step-header-small",
        start: "top 100%",
        end: "bottom 80%",
        scrub: true,
      },
      y: 200,
      duration: 1,
      opacity: 0,
    });
    gsap.from(".step-desc", {
      scrollTrigger: {
        trigger: ".step-desc",
        start: "top 100%",
        end: "bottom 80%",
        scrub: true,
      },
      y: 200,
      // duration: 1,
      opacity: 0,
    });
    gsap.from(".step-box1", {
      scrollTrigger: {
        trigger: ".step-box1",
        start: "top 100%",
        end: "bottom 80%",
        scrub: true,
      },
      x: 500,
      duration: 1.5,
      opacity: 0.2,
    });
    gsap.from(".step-box2", {
      scrollTrigger: {
        trigger: ".step-box2",
        start: "top 100%",
        end: "bottom 80%",
        scrub: true,
      },
      x: -500,
      duration: 1.5,
      opacity: 0.2,
    });
    gsap.from(".step-box3", {
      scrollTrigger: {
        trigger: ".step-box3",
        start: "top 100%",
        end: "bottom 80%",
        scrub: true,
      },
      x: 500,
      duration: 1.5,
      opacity: 0.2,
    });
    gsap.from(".step-box4", {
      scrollTrigger: {
        trigger: ".step-box4",
        start: "top 100%",
        end: "bottom 80%",
        scrub: true,
      },
      x: -500,
      duration: 1.5,
      opacity: 0.2,
    });
    gsap.from(".step-box5", {
      scrollTrigger: {
        trigger: ".step-box5",
        start: "top 100%",
        end: "bottom 80%",
        scrub: true,
      },
      x: 500,
      duration: 1.5,
      opacity: 0.2,
    });
    gsap.from(".about-me-name", {
      scrollTrigger: {
        trigger: ".about-me-name",
        start: "center 100%",
        end: "bottom 80%",
        scrub: true,
      },
      // x: 500,
      duration: 2,
      opacity: 0,
    });
    gsap.from(".about-me", {
      scrollTrigger: {
        trigger: ".about-me",
        start: "center 100%",
        end: "bottom 80%",
        scrub: true,
      },
      // x: 500,
      duration: 2,
      opacity: 0,
    });
  });

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pb: 10,
        }}
      >
        <Helmet>
          <title>Amirreza Mirshafiee-Home</title>
          <meta name="Amirreza Mirshafiee" content="Amirreza Mirshafiee" />
        </Helmet>
        <Box
          sx={{
            backgroundImage: "url(assets/IMG_0997.JPEG)",
            width: "100%",
            height: "100vh",
            backgroundPosition: "top",
            backgroundSize: "700px",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "end",
          }}
          className="home-header"
        >
          <Stack sx={{ translate: "0 -80px" }}>
            <Typography
              sx={{
                color: "#DAC5A7",
                textAlign: "center",
                fontSize: { lg: "70px", md: "60px", sm: "40px", xs: "30px" },
              }}
            >
              Full Stack <br />{" "}
              <Typography
                sx={{
                  fontStyle: "italic",
                  fontSize: { lg: "70px", md: "60px", sm: "40px", xs: "30px" },
                }}
              >
                {" "}
                Mern Developer
              </Typography>
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.3)",
                textAlign: "center",
                fontSize: "18px",
              }}
            >
              Premium Front-End and Back-End development and SEO <br /> services
              in help your business stand out
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: 5,
            mt: 7,
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
          }}
          className="triple-boxes"
        >
          <Box
            sx={{
              width: { lg: "30%", md: "30%", sm: "40%", xs: "50%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "4px",
              border: "1px solid #262421",
              bgcolor: "#181716",
              p: 4,
            }}
          >
            <Stack direction={"column"}>
              <Typography sx={{ color: "#DAC5A7" }}>01</Typography>
              <Typography sx={{ color: "#DAC5A7", my: 1 }}>
                FRONT-END
              </Typography>
              <Typography sx={{ color: "#DAC5A7" }}>
                Visually appealing websites, with a clean and
                <br />
                modern design. Your website layout is responsive <br />
                and adapts to different screen sizes and devices.
                <br />
              </Typography>
            </Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "start",
                my: 3,
                width: "100%",
                gap: 3,
                ml: 4,
              }}
            >
              <Button
                sx={{
                  color: "#DAC5A7",
                  border: "2px solid #262421",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              >
                <ArrowOutwardIcon />
              </Button>{" "}
              <Typography sx={{ color: "#DAC5A7" }}>ABOUT FRONT-END</Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              width: { lg: "30%", md: "30%", sm: "40%", xs: "50%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "4px",
              border: "1px solid #262421",
              bgcolor: "#181716",
              p: 4,
            }}
          >
            <Stack direction={"column"}>
              <Typography sx={{ color: "#DAC5A7" }}>02</Typography>
              <Typography sx={{ color: "#DAC5A7", my: 1 }}>BACK-END</Typography>
              <Typography sx={{ color: "#DAC5A7" }}>
                Security measures are carefully implemented <br />
                to protect sensitive information and prevent <br />
                unauthorized access to your website.
              </Typography>
            </Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "start",
                my: 3,
                width: "100%",
                gap: 3,
                ml: 4,
              }}
            >
              <Button
                sx={{
                  color: "#DAC5A7",
                  border: "2px solid #262421",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              >
                <ArrowOutwardIcon />
              </Button>{" "}
              <Typography sx={{ color: "#DAC5A7" }}>ABOUT BACK-END</Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              width: { lg: "30%", md: "30%", sm: "40%", xs: "50%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "4px",
              border: "1px solid #262421",
              bgcolor: "#181716",
              p: 4,
            }}
          >
            <Stack direction={"column"}>
              <Typography sx={{ color: "#DAC5A7" }}>03</Typography>
              <Typography sx={{ color: "#DAC5A7", my: 1 }}>
                CONTENT & SEO
              </Typography>
              <Typography sx={{ color: "#DAC5A7" }}>
                Proven SEO strategies that enhance your <br /> online
                performance, bringing you to the <br /> forefront of organic web
                result.
              </Typography>
            </Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "start",
                my: 3,
                width: "100%",
                gap: 3,
                ml: 4,
              }}
            >
              <Button
                sx={{
                  color: "#DAC5A7",
                  border: "2px solid #262421",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              >
                <ArrowOutwardIcon />
              </Button>{" "}
              <Typography sx={{ color: "#DAC5A7" }}>ABOUT SEO</Typography>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            width: "84%",
            mt: 7,
          }}
          className="img-box"
        >
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
            <Typography
              sx={{
                color: "#DAC5A7",
                fontSize: {
                  xl: "50px",
                  lg: "50px",
                  md: "40px",
                  sm: "30px",
                  xs: "25px",
                },
              }}
            >
              Selected Work
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Button
                sx={{
                  color: "#DAC5A7",
                  border: "2px solid #262421",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: { lg: "block", md: "block", sm: "none", xs: "none" },
                }}
              >
                <ArrowOutwardIcon />
              </Button>{" "}
              <Typography sx={{ color: "#DAC5A7" }}>SEE ALL</Typography>
            </Box>
          </Stack>
          <Stack
            sx={{
              mt: 3,
              gap: 2,
              width: "100%",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
                xl: "row",
              },
            }}
          >
            <Atropos rotate="true">
              <img
                className="img1"
                src="assets/ecommerce/ecomm-img1.png"
                alt="img"
                style={{ width: "100%" }}
              />
            </Atropos>
            <Atropos rotate="true">
              <img
                className="img2"
                src="assets/pannel/panel-img1.png"
                alt="img"
                style={{ width: "100%" }}
              />
            </Atropos>
          </Stack>
          {/* <Stack flexDirection={"row"} sx={{ mt: 3, gap: 2, width: "100%" }}>
            <Atropos rotate="true">
              <img
                className="img3"
                src="assets/HomepageIMG3.png"
                alt="img"
                style={{ width: "100%" }}
              />
            </Atropos>
            <Atropos rotate="true">
              <img
                className="img4"
                src="assets/HomepageIMG4.png"
                alt="img"
                style={{ width: "100%" }}
              />
            </Atropos>
          </Stack> */}
        </Box>
        <Box sx={{ mt: "150px", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Typography className="step-header-small" sx={{ color: "#DAC5A7" }}>
              THE PROCESS
            </Typography>
            <Typography
              sx={{
                color: "#DAC5A7",
                textAlign: "center",
                fontSize: {
                  xl: "150px",
                  lg: "150px",
                  md: "100px",
                  sm: "80px",
                  xs: "60px",
                },
              }}
              className="step-header"
            >
              Your Website <br /> in 5 steps
            </Typography>
            <Typography
              sx={{
                color: "#DAC5A7",
                textAlign: "center",
                fontSize: {
                  xl: "30px",
                  lg: "30px",
                  md: "24px",
                  sm: "20px",
                  xs: "20px",
                },
              }}
              className="step-desc"
            >
              Our process ensures that we create a website
              <br /> tailored to your business needs.{" "}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: {
              xl: "flex",
              lg: "flex",
              md: "flex",
              xs: "none",
              sm: "none",
            },
            justifyContent: "center",
            mt: 10,
          }}
        >
          <Stack sx={{ width: "100%", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "4px",
                border: "1px solid #262421",
                bgcolor: "#181716",
                p: 4,
                width: "70%",
                mt: "900px",
              }}
              className="step-box2"
            >
              <Stack direction={"column"}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#DAC5A7",
                      borderRadius: "2px",
                      border: "1px solid #3d3932",
                      width: "20%",
                      p: "5px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      fontSize: { md: "9px", lg: "12px", xl: "13px" },
                    }}
                  >
                    1 WEEK
                  </Typography>
                </Box>
                <Typography sx={{ color: "#8c7f6d" }}>Guide Step</Typography>
                <Typography
                  sx={{ color: "#DAC5A7", mt: 1, mb: 2, fontSize: "22px" }}
                >
                  CONCEPT & STRATEGY
                </Typography>
                <Typography sx={{ color: "#8c7f6d" }}>
                  Together, we develop a strategy that successfully combines{" "}
                  <br />
                  your goals with needs of your target audience. Based on <br />
                  this concepts, I create the first wireframes and an
                  interactive <br />
                  prototype. This provides us with a very good impression of the{" "}
                  <br />
                  website and the user interface.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 3,
                    gap: 3,
                  }}
                >
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    UX Design
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    Wireframes
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    interactive Prototype
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "4px",
                border: "1px solid #262421",
                bgcolor: "#181716",
                p: 4,
                width: "70%",
                mt: "650px",
              }}
              className="step-box4"
            >
              <Stack direction={"column"}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#DAC5A7",
                      borderRadius: "2px",
                      border: "1px solid #3d3932",
                      width: "20%",
                      p: "5px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      fontSize: { md: "9px", lg: "12px", xl: "13px" },
                    }}
                  >
                    2 WEEK
                  </Typography>
                </Box>
                <Typography sx={{ color: "#8c7f6d" }}>MORE MAGIC</Typography>
                <Typography
                  sx={{ color: "#DAC5A7", mt: 1, mb: 2, fontSize: "22px" }}
                >
                  DEVELOPMENT
                </Typography>
                <Typography sx={{ color: "#8c7f6d" }}>
                  In this step, we breathe life into your new high-end design.
                  You
                  <br />
                  will receive a custom-built website using a modular web design
                  <br />
                  system and CMS integration. Animation will ad the necessary
                  <br />
                  flair to your site and set you apart from the boring
                  competition
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 3,
                    gap: 3,
                  }}
                >
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    Custom framer website
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    Modular web design systems
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    CMS integration
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Stack>
          <Stack>
            <Root>
              <Button
                sx={{
                  color: "#DAC5A7",
                  border: "2px solid #262421",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              >
                <ArrowDownwardIcon />
              </Button>
              <Divider
                orientation="vertical"
                sx={{ color: "#DAC5A7", borderColor: "#181716", mx: 4 }}
              />
              <Button
                sx={{
                  color: "#DAC5A7",
                  border: "2px solid #262421",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              >
                01
              </Button>
              <Divider
                orientation="vertical"
                sx={{ color: "#DAC5A7", borderColor: "#181716", mx: 4 }}
              />
              <Button
                sx={{
                  color: "#DAC5A7",
                  border: "2px solid #262421",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              >
                02
              </Button>
              <Divider
                orientation="vertical"
                sx={{ color: "#DAC5A7", borderColor: "#181716", mx: 4 }}
              />
              <Button
                sx={{
                  color: "#DAC5A7",
                  border: "2px solid #262421",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              >
                03
              </Button>
              <Divider
                orientation="vertical"
                sx={{ color: "#DAC5A7", borderColor: "#181716", mx: 4 }}
              />
              <Button
                sx={{
                  color: "#DAC5A7",
                  border: "2px solid #262421",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              >
                04
              </Button>
              <Divider
                orientation="vertical"
                sx={{ color: "#DAC5A7", borderColor: "#181716", mx: 4 }}
              />
              <Button
                sx={{
                  color: "#DAC5A7",
                  border: "2px solid #262421",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              >
                05
              </Button>
            </Root>
          </Stack>
          <Stack
            sx={{ width: "100%", alignItems: "center", overflow: "hidden" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "4px",
                border: "1px solid #262421",
                bgcolor: "#181716",
                p: 4,
                width: "70%",
                mt: "350px",
              }}
              className="step-box1"
            >
              <Stack direction={"column"}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#DAC5A7",
                      borderRadius: "2px",
                      border: "1px solid #3d3932",
                      width: "20%",
                      p: "5px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      fontSize: { md: "9px", lg: "12px", xl: "13px" },
                    }}
                  >
                    2 HOURS
                  </Typography>
                </Box>
                <Typography sx={{ color: "#8c7f6d" }}>DO WE MATCH?</Typography>
                <Typography
                  sx={{ color: "#DAC5A7", mt: 1, mb: 2, fontSize: "22px" }}
                >
                  DISCOVERY CALL
                </Typography>
                <Typography sx={{ color: "#8c7f6d" }}>
                  Before we start, we determine if and how I can help you. What{" "}
                  <br />
                  are your requirements for your new website? Why do you need a{" "}
                  <br />
                  new website? What goals do you have, and what problems can we{" "}
                  <br />
                  solve with a new website?
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 3,
                    gap: 3,
                  }}
                >
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    We get to know each other better
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    Determine how I can best assist you
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    Understand the goals you have for your website
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "4px",
                border: "1px solid #262421",
                bgcolor: "#181716",
                p: 4,
                width: "70%",
                mt: "700px",
              }}
              className="step-box3"
            >
              <Stack direction={"column"}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#DAC5A7",
                      borderRadius: "2px",
                      border: "1px solid #3d3932",
                      width: "20%",
                      p: "5px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      fontSize: { md: "9px", lg: "12px", xl: "13px" },
                    }}
                  >
                    2 WEEK
                  </Typography>
                </Box>
                <Typography sx={{ color: "#8c7f6d" }}>SOME MAGIC</Typography>
                <Typography
                  sx={{ color: "#DAC5A7", mt: 1, mb: 2, fontSize: "22px" }}
                >
                  WEB DESIGN
                </Typography>
                <Typography sx={{ color: "#8c7f6d" }}>
                  Now comes the magic. Based on the previously developed <br />
                  concept, I create a high-end screen design perfectly tailored{" "}
                  <br />
                  to your brand. A web design that sets you apart from your{" "}
                  <br />
                  competition, fits your target audience ideally, and provides{" "}
                  <br />
                  an excellent user experience.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 3,
                    gap: 3,
                  }}
                >
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    High-end web design tailored to your brand
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    Interactive prototype of the design
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "4px",
                border: "1px solid #262421",
                bgcolor: "#181716",
                p: 4,
                width: "70%",
                mt: "550px",
              }}
              className="step-box5"
            >
              <Stack direction={"column"}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#DAC5A7",
                      borderRadius: "2px",
                      border: "1px solid #3d3932",
                      width: "20%",
                      p: "5px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      fontSize: { md: "9px", lg: "12px", xl: "13px" },
                    }}
                  >
                    2 HOURS
                  </Typography>
                </Box>
                <Typography sx={{ color: "#8c7f6d" }}>READY TO GO</Typography>
                <Typography
                  sx={{ color: "#DAC5A7", mt: 1, mb: 2, fontSize: "22px" }}
                >
                  WEBSITE ONBOARDING
                </Typography>
                <Typography sx={{ color: "#8c7f6d" }}>
                  In a personal Framer workshop, I will show you how to make{" "}
                  <br />
                  changes to your new website quickly and easily. Additionally,{" "}
                  <br />
                  you will receive personalized Framer video tutorials that you{" "}
                  <br />
                  can access at any time. Edit your Framer website without a{" "}
                  <br />
                  complicated backend or the need for an additional programmer.{" "}
                  <br />
                  It's as simple as that.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 3,
                    gap: 3,
                  }}
                >
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    Personal workshop
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    Personalized video tutorials
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    Edit text and images directly on your website
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: {
              xl: "none",
              lg: "none",
              md: "none",
              xs: "flex",
              sm: "flex",
            },
            justifyContent: "center",
            mt: 5,
            overflow: "hidden",
          }}
        >
          <Stack sx={{ width: "100%", alignItems: "center", gap: 5, mt: 5 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "4px",
                border: "1px solid #262421",
                bgcolor: "#181716",
                p: 4,
                width: "70%",
              }}
              className="step-box1"
            >
              <Stack direction={"column"}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#DAC5A7",
                      borderRadius: "2px",
                      border: "1px solid #3d3932",
                      width: "20%",
                      p: "5px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "9px",
                    }}
                  >
                    2 HOURS
                  </Typography>
                </Box>
                <Typography sx={{ color: "#8c7f6d" }}>DO WE MATCH?</Typography>
                <Typography
                  sx={{ color: "#DAC5A7", mt: 1, mb: 2, fontSize: "22px" }}
                >
                  DISCOVERY CALL
                </Typography>
                <Typography sx={{ color: "#8c7f6d" }}>
                  Before we start, we determine if and how I can help you. What{" "}
                  <br />
                  are your requirements for your new website? Why do you need a{" "}
                  <br />
                  new website? What goals do you have, and what problems can we{" "}
                  <br />
                  solve with a new website?
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 3,
                    gap: 3,
                  }}
                >
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    We get to know each other better
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    Determine how I can best assist you
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    Understand the goals you have for your website
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "4px",
                border: "1px solid #262421",
                bgcolor: "#181716",
                p: 4,
                width: "70%",
              }}
              className="step-box2"
            >
              <Stack direction={"column"}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#DAC5A7",
                      borderRadius: "2px",
                      border: "1px solid #3d3932",
                      width: "20%",
                      p: "5px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "9px",
                    }}
                  >
                    1 WEEK
                  </Typography>
                </Box>
                <Typography sx={{ color: "#8c7f6d" }}>Guide Step</Typography>
                <Typography
                  sx={{ color: "#DAC5A7", mt: 1, mb: 2, fontSize: "22px" }}
                >
                  CONCEPT & STRATEGY
                </Typography>
                <Typography sx={{ color: "#8c7f6d" }}>
                  Together, we develop a strategy that successfully combines{" "}
                  <br />
                  your goals with needs of your target audience. Based on <br />
                  this concepts, I create the first wireframes and an
                  interactive <br />
                  prototype. This provides us with a very good impression of the{" "}
                  <br />
                  website and the user interface.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 3,
                    gap: 3,
                  }}
                >
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    UX Design
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    Wireframes
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    interactive Prototype
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "4px",
                border: "1px solid #262421",
                bgcolor: "#181716",
                p: 4,
                width: "70%",
              }}
              className="step-box3"
            >
              <Stack direction={"column"}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#DAC5A7",
                      borderRadius: "2px",
                      border: "1px solid #3d3932",
                      width: "20%",
                      p: "5px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "9px",
                    }}
                  >
                    2 WEEK
                  </Typography>
                </Box>
                <Typography sx={{ color: "#8c7f6d" }}>SOME MAGIC</Typography>
                <Typography
                  sx={{ color: "#DAC5A7", mt: 1, mb: 2, fontSize: "22px" }}
                >
                  WEB DESIGN
                </Typography>
                <Typography sx={{ color: "#8c7f6d" }}>
                  Now comes the magic. Based on the previously developed <br />
                  concept, I create a high-end screen design perfectly tailored{" "}
                  <br />
                  to your brand. A web design that sets you apart from your{" "}
                  <br />
                  competition, fits your target audience ideally, and provides{" "}
                  <br />
                  an excellent user experience.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 3,
                    gap: 3,
                  }}
                >
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    High-end web design tailored to your brand
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    Interactive prototype of the design
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "4px",
                border: "1px solid #262421",
                bgcolor: "#181716",
                p: 4,
                width: "70%",
              }}
              className="step-box4"
            >
              <Stack direction={"column"}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#DAC5A7",
                      borderRadius: "2px",
                      border: "1px solid #3d3932",
                      width: "20%",
                      p: "5px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "9px",
                    }}
                  >
                    2 WEEK
                  </Typography>
                </Box>
                <Typography sx={{ color: "#8c7f6d" }}>MORE MAGIC</Typography>
                <Typography
                  sx={{ color: "#DAC5A7", mt: 1, mb: 2, fontSize: "22px" }}
                >
                  DEVELOPMENT
                </Typography>
                <Typography sx={{ color: "#8c7f6d" }}>
                  In this step, we breathe life into your new high-end design.
                  You
                  <br />
                  will receive a custom-built website using a modular web design
                  <br />
                  system and CMS integration. Animation will ad the necessary
                  <br />
                  flair to your site and set you apart from the boring
                  competition
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 3,
                    gap: 3,
                  }}
                >
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    Custom framer website
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    Modular web design systems
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    CMS integration
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "4px",
                border: "1px solid #262421",
                bgcolor: "#181716",
                p: 4,
                width: "70%",
              }}
              className="step-box5"
            >
              <Stack direction={"column"}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#DAC5A7",
                      borderRadius: "2px",
                      border: "1px solid #3d3932",
                      width: "20%",
                      p: "5px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "9px",
                    }}
                  >
                    2 HOURS
                  </Typography>
                </Box>
                <Typography sx={{ color: "#8c7f6d" }}>READY TO GO</Typography>
                <Typography
                  sx={{ color: "#DAC5A7", mt: 1, mb: 2, fontSize: "22px" }}
                >
                  WEBSITE ONBOARDING
                </Typography>
                <Typography sx={{ color: "#8c7f6d" }}>
                  In a personal Framer workshop, I will show you how to make{" "}
                  <br />
                  changes to your new website quickly and easily. Additionally,{" "}
                  <br />
                  you will receive personalized Framer video tutorials that you{" "}
                  <br />
                  can access at any time. Edit your Framer website without a{" "}
                  <br />
                  complicated backend or the need for an additional programmer.{" "}
                  <br />
                  It's as simple as that.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 3,
                    gap: 3,
                  }}
                >
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    Personal workshop
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    Personalized video tutorials
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    Edit text and images directly on your website
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Box
          sx={{
            backgroundImage: "url(assets/IMG_0997.JPEG)",
            width: "100%",
            height: "100vh",
            backgroundPosition: "60% top",
            backgroundSize: {
              xl: "900px",
              lg: "700px",
              md: "700px",
              sm: "500px",
              xs: "400px",
            },
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "end",
            mt: 5,
          }}
        >
          <Typography
            className="about-me-name"
            sx={{
              color: "#DAC5A7",
              fontSize: {
                xl: "80px",
                lg: "70px",
                md: "50px",
                sm: "40px",
                xs: "30px",
              },
              mb: 6,
            }}
          >
            Amirreza Mirshafiee
          </Typography>
          <Stack
            className="about-me"
            flexDirection={{
              lg: "row",
              xl: "row",
              md: "row",
              sm: "column",
              xs: "column",
            }}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            sx={{ gap: "90px", ml: { xl: 20, lg: 20, md: 15, xs: 0, sm: 0 } }}
          >
            <Typography
              sx={{ color: "#DAC5A7", fontSize: "20px" }}
              variant="button"
            >
              A website that leaves <br />a lasting impression !
            </Typography>
            <Typography sx={{ color: "#DAC5A7" }}>
              Hi, I'm Amirreza Mirshafiee - a freelancer specializing in premium
              web <br />
              development I'm passionate about creating unique and effective
              solutions <br />
              for my clients, and I bring a personal touch to every project.
              Let's <br />
              work together to bring your vision to life!
            </Typography>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
