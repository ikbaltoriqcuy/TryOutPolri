import React from "react";
import Slider from "react-slick";
import { Box, Container, Typography, Avatar, styled } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  name: string;
  role: string;
  message: string;
  avatarUrl: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Audhira Putri Purnomo",
    role: "Taruna SIPSS T.A. 2023",
    message: "“Dibimbing dengan baik di Police Course. Tutor dan Coachnya perhatian dan gak perhitungan waktu. Terima kasih Tactical Jaya selalu.”",
    avatarUrl: "/images/adhitama.jpeg",
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    message: "“Great learning experience, highly recommend the platform!”",
    avatarUrl: "https://via.placeholder.com/150",
  },
];

const TestimonialList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 5,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 800,
          boxShadow: 3,
          p: 3,
          borderRadius: 2,
          bgcolor: "background.paper",
        }}
      >
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} sx={{ p: 3, textAlign: "center" }}>
              <Avatar
                src={testimonial.avatarUrl}
                alt={testimonial.name}
                sx={{ width: 56, height: 56, mx: "auto", mb: 2 }}
              />
              <Typography variant="h6" sx={{ fontStyle: "italic", mb: 2 }}>
                {testimonial.message}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {testimonial.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {testimonial.role}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default TestimonialList;
