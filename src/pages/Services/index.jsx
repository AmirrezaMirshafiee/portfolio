import React from "react";
import { Stack, Box, Typography, Button, Divider } from "@mui/material";
import SouthIcon from "@mui/icons-material/South";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Atropos from "atropos/react";
import "atropos/css";
import Image from "mui-image";
import { Link, ScrollRestoration } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Services() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".services-header", {
      y: -200,
      duration: 2,
      opacity: 0,
      // delay:0.5
    });
    gsap.from(".services-header-img", {
      y: 200,
      duration: 2,
      opacity: 0,
      // delay:0.5
    });
    gsap.from(".service-1", {
      scrollTrigger: {
        trigger: ".service-1",
        start: "top 100%",
        end: "bottom 60%",
        scrub: true,
      },
      y: 200,
      duration: 1,
      opacity: 0.7,
    });
    gsap.from(".service-2", {
      scrollTrigger: {
        trigger: ".service-2",
        start: "top 100%",
        end: "bottom 60%",
        scrub: true,
      },
      y: 200,
      duration: 1,
      opacity: 0.7,
    });
    gsap.from(".service-3", {
      scrollTrigger: {
        trigger: ".service-3",
        start: "top 100%",
        end: "bottom 60%",
        scrub: true,
      },
      y: 200,
      duration: 1,
      opacity: 0.7,
    });
  });

  return (
    <>
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "#000000",
          flexDirection: "column",
          pt: "20px",
          pb: 10,
        }}
      >

        <Helmet>
          <title>Amirreza Mirshafiee-Services</title>
          <meta name="Amirreza Mirshafiee" content="Amirreza Mirshafiee" />
        </Helmet>
        <Stack
          sx={{
            width: "100%",
            height: "100%",
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "column",
            mx: "auto",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              backgroundImage: "url(assets/me1.JPEG)",
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
            <Typography
              sx={{
                color: "#DAC5A7",
                textAlign: "center",
                fontSize: { lg: "90px", md: "60px", sm: "40px", xs: "30px" },
              }}
            >
              Full Stack <br />{" "}
              <Typography
                sx={{
                  fontStyle: "italic",
                  fontSize: { lg: "90px", md: "60px", sm: "40px", xs: "30px" },
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
          </Box>
        </Stack>
        <Stack
          sx={{
            width: "100%",
            height: "100%",
          }}
          className="service-1"
        >
          <Stack
            mt={10}
            sx={{
              backgroundColor: "#383735",
              alignContent: "center",
              justifyContent: "center",
              flexDirection: "column",
              mx: "auto",
              textAlign: "center",
              width: "70%",
              padding: "40px",
            }}
          >
            {" "}
            <Box
              sx={{
                alignContent: "start",
                justifyContent: "flex-start",
                flexDirection: "column",
                textAlign: "start",
              }}
            >
              <Typography variant="h6" color="#DAC5A7" fontSize="13px">
                Front-End
              </Typography>
              <Typography variant="h4" color="#DAC5A7" fontSize="25px">
                Transforming Your Ideas into Reality
              </Typography>
            </Box>
            <Box mt={2} sx={{ width: "100%", height: "100%" }}>
              <Atropos rotate="true">
                <img
                  width="100%"
                  height="100%"
                  src="assets/servicesimg3.jfif"
                  alt="img"
                />
              </Atropos>
            </Box>
            <Box mt={5} width="100%" height="100%">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography color="#DAC5A7" textAlign="center" width="20%">
                  User Interface
                </Typography>
                <Typography color="#DAC5A799" textAlign="center" width="80%">
                  I provide a visually appealing and easy-to-navigate user
                  interface that enhances the overall user experience
                </Typography>
              </Box>
              <Divider
                sx={{
                  borderColor: "#DAC5A726",
                  margin: "20px",
                  height: "100%",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography color="#DAC5A7" textAlign="center" width="20%">
                  Performance
                </Typography>
                <Typography color="#DAC5A799" textAlign="center" width="80%">
                  I optimize your website for fast loading times and smooth
                  operation to ensure a seamless user experience.
                </Typography>
              </Box>
              <Divider
                sx={{
                  borderColor: "#DAC5A726",
                  margin: "20px",
                  height: "100%",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography color="#DAC5A7" textAlign="center" width="20%">
                  Mobile responsiveness
                </Typography>
                <Typography color="#DAC5A799" textAlign="center" width="80%">
                  I create website that responsive and adaptable to various
                  devices and screen sizes, including mobile phones, tablets,
                  and desktops.
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Stack>
        <Stack
          sx={{
            width: "100%",
            height: "100%",
          }}
          className="service-2"
        >
          <Stack
            mt={5}
            sx={{
              backgroundColor: "#383735",
              alignContent: "center",
              justifyContent: "center",
              flexDirection: "column",
              mx: "auto",
              textAlign: "center",
              width: "70%",
              padding: "40px",
            }}
          >
            {" "}
            <Box
              sx={{
                alignContent: "start",
                justifyContent: "flex-start",
                flexDirection: "column",
                textAlign: "start",
              }}
            >
              <Typography variant="h6" color="#DAC5A7" fontSize="13px">
                Back-End
              </Typography>
              <Typography variant="h4" color="#DAC5A7" fontSize="25px">
                Developing High-Performance and secure Websites{" "}
              </Typography>
            </Box>
            <Box mt={2} sx={{ width: "100%", height: "100%" }}>
              <Atropos rotate="true">
                <img
                  width="100%"
                  height="100%"
                  src="assets/servicesimg2.jfif"
                  alt="img"
                />
              </Atropos>
            </Box>
            <Box mt={5} width="100%" height="100%">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography color="#DAC5A7" textAlign="center" width="20%">
                  Data storage and management
                </Typography>
                <Typography color="#DAC5A799" textAlign="center" width="80%">
                  I provide a secure and efficient way to store and manage data,
                  ensuring that it is organized, accessible, and easily
                  retrievable when needed.
                </Typography>
              </Box>
              <Divider
                sx={{
                  borderColor: "#DAC5A726",
                  margin: "20px",
                  height: "100%",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography color="#DAC5A7" textAlign="center" width="20%">
                  Security
                </Typography>
                <Typography color="#DAC5A799" textAlign="center" width="80%">
                  I implement strong security measures to protect sensitive
                  data, prevent unauthorized access, and mitigate potential
                  security threats, such as SQL injection or cross-site
                  scripting attacks.
                </Typography>
              </Box>
              <Divider
                sx={{
                  borderColor: "#DAC5A726",
                  margin: "20px",
                  height: "100%",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography color="#DAC5A7" textAlign="center" width="20%">
                  Performance optimization
                </Typography>
                <Typography color="#DAC5A799" textAlign="center" width="80%">
                  I optimize your website performance, ensuring that it runs
                  efficiently and quickly processes requests to provide a
                  seamless user experience.
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Stack>
        <Stack
          sx={{
            width: "100%",
            height: "100%",
          }}
          className="service-3"
        >
          <Stack
            mt={5}
            sx={{
              backgroundColor: "#383735",
              alignContent: "center",
              justifyContent: "center",
              flexDirection: "column",
              mx: "auto",
              textAlign: "center",
              width: "70%",
              padding: "40px",
            }}
          >
            {" "}
            <Box
              sx={{
                alignContent: "start",
                justifyContent: "flex-start",
                flexDirection: "column",
                textAlign: "start",
              }}
            >
              <Typography variant="h6" color="#DAC5A7" fontSize="13px">
                SEO & content{" "}
              </Typography>
              <Typography variant="h4" color="#DAC5A7" fontSize="25px">
                Boosting Your Website's Organic Search Traffic
              </Typography>
            </Box>
            <Box mt={2} sx={{ width: "100%", height: "100%" }}>
              <Atropos rotate="true">
                <img
                  width="100%"
                  height="100%"
                  src="assets/servicesimg4.jfif"
                  alt="img"
                />
              </Atropos>
            </Box>
            <Box mt={5} width="100%" height="100%">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography color="#DAC5A7" textAlign="center" width="20%">
                  website visibility
                </Typography>
                <Typography color="#DAC5A799" textAlign="center" width="80%">
                  I help improve your website's ranking on search engine results
                  pages, making it easier for users to find and visit the site.
                </Typography>
              </Box>
              <Divider
                sx={{
                  borderColor: "#DAC5A726",
                  margin: "20px",
                  height: "100%",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography color="#DAC5A7" textAlign="center" width="20%">
                  Competing with competitors
                </Typography>
                <Typography color="#DAC5A799" textAlign="center" width="80%">
                  I allow your business to stay competitive in your industry by
                  improving your online visibility and ranking relative to
                  competitors.
                </Typography>
              </Box>
              <Divider
                sx={{
                  borderColor: "#DAC5A726",
                  margin: "20px",
                  height: "100%",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography color="#DAC5A7" textAlign="center" width="20%">
                  Driving organic traffic
                </Typography>
                <Typography color="#DAC5A799" textAlign="center" width="80%">
                  I help attract users who are actively searching for relevant
                  content, products, or services, leading to higher quality
                  traffic and potential conversions.
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
