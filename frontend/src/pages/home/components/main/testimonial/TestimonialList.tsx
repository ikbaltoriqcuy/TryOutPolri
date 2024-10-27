// src/TestimonialList.tsx
import React from "react";
import { Grid, Container, Typography, Box } from "@mui/material";
import Testimonial from "./Testmonial";

interface TestimonialData {
  name: string;
  message: string;
  avatarUrl: string;
}

const testimonials: TestimonialData[] = [
  {
    name: "John Doe",
    message: "This is a great product! I highly recommend it.",
    avatarUrl: "https://cdn0-production-images-kly.akamaized.net/0Ba7VKYlZbIvRHZ9fDYasaw7Sck=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4119862/original/065226400_1660189533-i_m_Groot.jpg",
  },
  {
    name: "Jane Smith",
    message: "Amazing service and support. Would use again.",
    avatarUrl: "https://cdn0-production-images-kly.akamaized.net/0Ba7VKYlZbIvRHZ9fDYasaw7Sck=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4119862/original/065226400_1660189533-i_m_Groot.jpg",
  },
  {
    name: "John Doe",
    message: "This is a great product! I highly recommend it.",
    avatarUrl: "https://cdn0-production-images-kly.akamaized.net/0Ba7VKYlZbIvRHZ9fDYasaw7Sck=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4119862/original/065226400_1660189533-i_m_Groot.jpg",
  },
  {
    name: "Jane Smith",
    message: "Amazing service and support. Would use again.",
    avatarUrl: "https://cdn0-production-images-kly.akamaized.net/0Ba7VKYlZbIvRHZ9fDYasaw7Sck=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4119862/original/065226400_1660189533-i_m_Groot.jpg",
  },
  {
    name: "John Doe",
    message: "This is a great product! I highly recommend it.",
    avatarUrl: "https://cdn0-production-images-kly.akamaized.net/0Ba7VKYlZbIvRHZ9fDYasaw7Sck=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4119862/original/065226400_1660189533-i_m_Groot.jpg",
  },
  {
    name: "Jane Smith",
    message: "Amazing service and support. Would use again.",
    avatarUrl: "https://cdn0-production-images-kly.akamaized.net/0Ba7VKYlZbIvRHZ9fDYasaw7Sck=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4119862/original/065226400_1660189533-i_m_Groot.jpg",
  }
];

const TestimonialList: React.FC = () => {
  return (
    <Container
      sx={{
        paddingY: "16px",
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Testimoni
      </Typography>
      <Container
        sx={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingRight: "32px",
        }}
      >
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ textAlign: "center", width: "400px", paddingRight: "64px" }}
        >
          sub title1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
      </Container>
      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid item key={index}>
            <Testimonial
              name={testimonial.name}
              message={testimonial.message}
              avatarUrl={testimonial.avatarUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TestimonialList;
