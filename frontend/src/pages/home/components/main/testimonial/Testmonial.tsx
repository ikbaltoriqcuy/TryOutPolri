import React from "react";
import { makeStyles} from '@mui/styles';
import { Card, CardContent, Typography, Avatar, Grid, Box } from '@mui/material';

interface TestimonialProps {
    name: string;
    title: string;
    message: string;
    avatarUrl: string;
}

const useStyles = makeStyles( () => ({
    card: {
        maxWidth: 345,
        margin: "16px",
    },
    avatar: {
        width: "16px",
        height: "16px",
        marginBottom: "16px",
    },
    name: {
        fontWeight: 'bold',
    },
    title: {
        color: "#f5cb42",
    },
    message: {
        marginTop: "8px",
        textAlign: "center"
    },
}));

 
const Testimonial : React.FC<TestimonialProps> = ({ name, message, avatarUrl }) => {
    const classes = useStyles();
    
    return (
        <Card className={classes.card}>
            <CardContent sx={{ boxShadow: "none" }}>
                <Grid container direction="column" alignItems="center">
                    <Box>
                        <Avatar alt={name} src={avatarUrl} className={classes.avatar} />
                    </Box>
                    <Typography variant="h6" className={classes.name}>
                        {name}
                    </Typography>
                    <Typography variant="subtitle1" className={classes.message}>
                        {message}
                    </Typography>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Testimonial;