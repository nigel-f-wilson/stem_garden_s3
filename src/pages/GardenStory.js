import React from 'react';

// MY components
import Navbar from "../components/Navbar/Navbar";

// MY images
import street_view_before from "../images/garden_before.jpg";


// MUI Imports
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        // border: 'solid red 2px',
        height: 'auto',
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: theme.palette.common.black,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    container: {
        // border: 'solid green 2px',
        minHeight: '100vh',
        height: 'auto',
        backgroundColor: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        color: theme.palette.common.white,
        padding: '4.0rem',
    },
    subtitleText: {
        color: theme.palette.common.white,
        padding: '2.0rem 4.0rem',
    },
    header: {
        color: theme.palette.common.white,
        padding: '0.0rem 0.0rem',
    },
    body: {
        color: theme.palette.common.white,
        padding: '0.0rem 0.0rem',
        paddingBottom: '1.5rem',
        // maxWidth: '640px'
    },

    grid: {
        border: 'solid blue 1px',
        height: 'auto',
        width: '100%',
        padding: '1rem'

    },
    card: {
        // maxWidth: 345,
    },
    cardImage: {
        height: 0,
        // paddingTop: '56.25%', // 16:9
        // paddingTop: '75%', // 4:3
        paddingTop: '100%', // square
    },
    cardCaption: {
        // backgroundColor: theme.palette.common.black
        padding: '0 16px',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));


export default function GardenStoryPage(props) {
    const classes = useStyles();
    return (
        <Box className={classes.root}  >
            <Navbar />
            <PageBody />
        </Box>
    )
}

function PageBody(props) {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Container className={classes.container} maxWidth='md' >
                <Typography className={classes.titleText} align='center' color='textPrimary' component='h1' variant='h1'>
                    Our Story
                </Typography>
                <Typography className={classes.body} align='justify' color='textPrimary' component='h2' variant='body1' >
                    I got into gardening when I was a student at Ohio University. 
                    I had an easy time meeting other people who were interested in gardening and willing to teach me what they knew.
                    One of the first lessons I learned is that gardening (at least the way I want to practice it) is not just about 
                    taking care of plants, it is about taking care of the soil and the whole mini-ecosystem. 
                    That is only really possible when you commit to gardening in one place for a long time. 
                </Typography>
                <Typography className={classes.body} align='justify' color='textPrimary' component='h2' variant='body1' >
                    The first three years that I gardened I grew in a different palce each year.
                    When I finished University, one of the first things I wanted to do was purchase 
                    some land so that I could establish a garden, feed the soil, and plant some trees
                    knowing that I'd be able to watch them grow up.
                    As a kid I dreamed of travelling from my backyard on the Scioto River all the way 
                    to New Orleans in a canoe. Besides this lingering facination, I was curious as a 
                    teacher to see the resuslts of the post-Katrina swing toward charter schools 
                    firsthand. I wanted to escape winter so that I could rely on my bicycle for transportation comfortably get around by bicycle year round. 
                    
                </Typography>
            </Container>

        </Box>
    )
}