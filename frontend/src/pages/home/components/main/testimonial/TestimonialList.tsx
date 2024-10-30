import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Avatar, Container, Grid, styled } from '@mui/material';
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
        role: "Bintara Polri T.A. 2023",
        message: "“Dibimbing dengan baik di Police Course. Tutor dan Coachnya perhatian dan gak perhitungan waktu. Terima kasih Tactical Jaya selalu.”",
        avatarUrl: "/images/adhitama.jpeg",
    },
    // {
    //     name: "John Doe",
    //     role: "Software Engineer",
    //     message: "“Great learning experience, highly recommend the platform!”",
    //     avatarUrl: "https://via.placeholder.com/150",
    // },
];

const StyledSliderBox = styled(Box)({
    '.slick-slide': {
        display: 'flex !important',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const TestimonialList: React.FC = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', mt: 5, marginTop: "120px", marginBottom: "120px", }}>
            <Grid
                container
                sx={{
                    bgcolor: '#f1db25',
                    borderRadius: 3,
                    overflow: 'hidden',
                    width: '100%',
                    maxWidth: 1200,
                    boxShadow: 3,
                }}
            >
                {/* Slider Section */}
                <Grid item xs={12} md={8} sx={{ bgcolor: 'grey.900', color: 'white', p: 4 }}>
                    <StyledSliderBox sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '200px' }}>
                        <Slider {...settings}>
                            {testimonials.map((testimonial) => (
                                <Box key={testimonial.name} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                    <Typography variant="h6" sx={{ fontStyle: 'italic', mb: 2 }}>
                                        {testimonial.message}
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 3 }}>
                                        <Avatar src={testimonial.avatarUrl} alt={testimonial.name} sx={{ width: 56, height: 56, mr: 2 }} />
                                        <Box>
                                            <Typography variant="body1">{testimonial.name}</Typography>
                                            <Typography variant="body2">
                                                {testimonial.role}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Slider>
                    </StyledSliderBox>
                </Grid>

                {/* Static Title Section */}
                <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center', p: 4 }}>
                    <Typography variant="overline" color="text.secondary">
                        TESTIMONIALS
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 1 }}>
                        Kata Alumni
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default TestimonialList;
