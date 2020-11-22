import React from 'react';

// MY components
import Navbar from "../components/Navbar/Navbar";
// import LandingHeader from "../components/LandingHeader";
// import LandingCards from "../components/LandingCards";

// MY images
import bamboo from "../images/bamboo.jpg";
// import logo from "../images/incomplete_logo.png";
import street_view_before from "../images/garden_before.jpg";


// MUI Imports
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';



import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        height: 'auto',
        minHeight: '100vh',
        backgroundColor: theme.palette.primary.main,

        width: '100%',


        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,

        backgroundImage: `
            
            url(${bamboo})  
        `,
        backgroundPosition: 'top',
        backgroundRepeat: 'repeat',
        backgroundSize: '40%',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    body: {
        // border: 'solid red 1px',
        maxWidth: theme.breakpoints.values.md,
        margin: 'min(10%, 50px)',
        height: 'auto',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderRadius: '1rem',
        boxShadow: '0px 0px 5px 5px rgba(58,94,22,1)'

    },
    paragraph: {
        textIndent: '2rem',
        paddingBottom: '1rem',
    },
    cardArea: {
        // border: 'solid red 1px',
        height: 'auto',
        width: '100%',


    },
    street_view_before: {
        backgroundImage: `
            url(${street_view_before})  
        `,
        backgroundSize: 'cover',
    }

}));


export default function GardenStoryPage(props) {
    const classes = useStyles();

    return (
        <Box className={classes.root}  >

            <Navbar />

            <Container
                className={classes.body}
                maxWidth='md'
            >
                <Grid container>
                    <Grid item xs={12}>
                        <Typography component='h1' variant='h2' gutterBottom >
                            Teaching Services
                        </Typography>
                    </Grid>
                    


                </Grid>
            </Container>

        </Box>
    )
}