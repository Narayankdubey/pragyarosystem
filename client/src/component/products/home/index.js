import React from "react";
import { Button, Typography, Paper } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import Products from "../product";
import ContactUsForm from "../contact/ContactUsForm";
import "./style.css";
import offer from "../../../asset/img/offer.jpeg";
import navvarsh from "../../../asset/img/navvarsh.jpeg";
import carosel_black from "../../../asset/img/carosel_black.jpg";

const feedback = [
  {
    feedback:
      "I am using the product since last 4 years .when this company was in its early stages & I'm first user of these product .\nI am very happy that this company has stood on its feet today with good performance and pocket friendly.",
    name: "PRAVEEN TIWARI",
    address: "Arrah",
  },
  {
    feedback: "Awesome    highly satisfied.....loved it",
    name: "Phullchandra kumar",
    address: "Fazalganj Sasaram",
  },
  {
    feedback:
      "Best service I have ever seen and quality of work, customer satisfaction is best. RO water quality is also suoerb",
    name: "Akshay kr ojha",
    address: "VILLAGE : OJHAWALIA, POST : MILKY",
  },
  {
    feedback: "very good service and good nature",
    name: "Roshan",
    address: "Moula bagh",
  },
  {
    feedback:
      "Such a great experience with Pragya RO.  RO filter is working fine and water test is also good. Best thing is service bcz after installation I found water leakage and called Pragya RO system and within  an hour issue got fixed 😀 👍 😉 👌 👏",
    name: "Rajeev Kumar Srivastava",
    address: " ",
  },
  {
    feedback: "One of the best place for purchase water purifier.",
    name: "Adarsh Ranjan",
    address: " ",
  },
  {
    feedback:
      "Product is very good and service is mind blowing at very low cost.",
    name: "Saurabh Kumar",
    address: " ",
  },
  {
    feedback: "Good product😃👍👍👍👍",
    name: "Manish Pandey",
    address: " ",
  },
];

const Home = () => {
  const carouselItem = [
    { name: "newYearOffer", link: offer },
    { name: "newYearOffer", link: navvarsh },
  ];
  const carouselItemMobile = [
    "https://png.pngtree.com/element_our/sm/20171226/sm_5a4246e30634c.png",
    carosel_black,
    "https://www.draquaguard.co.in/under-the-sink-counter-water-purifier/images/banner-mobile.jpg",
  ];
  return (
    <>
      <div
        style={{
          minHeight: "calc(100vh - 128px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#f8f9fa",
        }}
      >
        <Carousel className="carousel-bigscreen">
          {carouselItem.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={item.link}
                  alt="First slide"
                  width="100%"
                  height="348.87px"
                  loading="lazy"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
        <Carousel className="carousel-mobile">
          {carouselItemMobile.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={item}
                  alt="First slide"
                  width="100%"
                  loading="lazy"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
        <div className="mobie-banner">
          <h2>
            Buy Water Purifiers <br /> At Lowest Price
          </h2>
          <img
            src="https://www.kent.co.in/images/banner/mobile-banner-product.webp"
            width="80%"
            loading="lazy"
            alt="banner"
          />
          <p>Best Place to Buy</p>
          <div className="contact-banner">
            <Button
              href="tel:8920310622"
              variant="contained"
              color="secondary"
              startIcon={<CallIcon />}
            >
              8920310622
            </Button>
            <Button
              href="https://wa.me/918920310622?text=I'm%20interested"
              variant="contained"
              color="success"
              startIcon={<WhatsAppIcon />}
            >
              Whatsapp
            </Button>
          </div>
        </div>
        <div className="product-intro">
          <h2>RO Water Purifiers</h2>
          <div className="product-intro-left">
            <p>
              Trusted by Millions, India’s Cheapest and most awarded RO Water
              Purifiers make your water 100% pure. With its revolutionary
              Mineral ROTM technology and multiple purification process of
              RO+UV+UF, Pragya RO System ensures 100% pure & healthier drinking
              water.
            </p>
            <Link to="/products">
              <Button variant="contained">View More</Button>
            </Link>
          </div>
          <div className="product-intro-right">
            <img
              src="https://www.kent.co.in/images/ro/water-purifiers.png"
              alt="RO purifiers"
              width="300px"
              loading="lazy"
            ></img>
          </div>
        </div>
        <div className="product-intro">
          <h2>UV Water Purifiers</h2>
          <div className="product-intro-left">
            <p>
              Pragya RO System offers innovative UV Water Purifiers that are
              easy to use and disinfect water without altering its taste and
              odour. These purifiers are equipped with UV followed by UF
              membrane to disinfect water, making it free from deadly bacteria,
              viruses and cysts.
            </p>
            <Link to="/products">
              <Button variant="contained">View More</Button>
            </Link>
          </div>
          <div className="product-intro-right">
            <img
              src="https://www.kent.co.in/images/water-purifiers/uv/uv-water-purifiers-main-banner.png"
              alt="RO purifiers"
              width="300px"
              loading="lazy"
            ></img>
          </div>
        </div>
        <div className="product-intro">
          <h2>Gravity Water Purifiers</h2>
          <div className="product-intro-left">
            <p>
              Pragya RO System has brought up its high end non electric Gravity
              Water Purifiers that use natural force of gravity to eliminate
              suspended impurities, bacteria and cyst to make your drinking
              water pure. This eradicates the rising problem of contaminated
              water in rural areas.
            </p>
            <Link to="/products">
              <Button variant="contained">View More</Button>
            </Link>
          </div>
          <div className="product-intro-right">
            <img
              src="https://www.kent.co.in/images/water-purifiers/gravity-uf/gravity-uf-banner-mobile.png"
              alt="RO purifiers"
              width="300px"
              loading="lazy"
            ></img>
          </div>
        </div>
        <div className="product-intro">
          <h2>Customer Service</h2>
          <div className="product-intro-left">
            <p>
              Service is an essential part of a Water Purifier as you may
              require to change the filters. Getting Genuine Service from Pragya
              RO System is important as only from Pragya RO System you can get
              Genuine Spares which will continue to ensure that you get 100%
              Pure Water. Call only 89203 10622 from anywhere in Ara. Please do
              not call any other number or dealers directly. Service Request can
              also be made here.
            </p>
            <Link to="/service">
              <Button variant="contained">Request Service</Button>
            </Link>
          </div>
          <div className="product-intro-right">
            <img
              src="https://www.kent.co.in/images/home-img/kent-employee.png"
              alt="RO purifiers"
              width="300px"
              loading="lazy"
            ></img>
          </div>
        </div>
        <div className="filterdProduct">
          <Typography
            component={"h6"}
            variant="h5"
            p={"20px 20px 0px 20px"}
            mx={2}
            sx={{
              fontWeight: "bold",
              borderBottom: "2px solid black",
            }}
          >
            Aquaguard
          </Typography>
          <Products filterData="Aqua" />
          <div
            style={{
              padding: "10px",
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <Link
              to={"/products"}
              style={{
                padding: "8px",
                border: "1px solid black",
                borderRadius: "25px",
                textDecoration: "none",
              }}
            >
              see all
            </Link>
          </div>
        </div>
      </div>
      <div className="feed-view-container">
        {feedback.map((data, index) => (
          <Paper className="feed-container" elevation={18} key={index}>
            <q>
              <i>{data.feedback}</i>
            </q>
            <Typography variant="body2" mt={2} align="right">
              <strong>{data.name}</strong>
            </Typography>
            <Typography variant="caption" display="block" mt={0} align="right">
              {data.address}
            </Typography>
          </Paper>
        ))}
      </div>
      <ContactUsForm />
    </>
  );
};

export default Home;
