import React from 'react';

// MY components
import Navbar from "../components/Navbar/Navbar";
import SpacerBox from "../components/Navbar/SpacerBox";
import LandingCards from "../components/LandingCards";

// MY images
import leaves from "../images/leaves_cropped_for_mobile.jpg";

// MUI Imports
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        width: '100vw',
    },
    mobileBody: {
        // border: 'solid red 1px',
        // height: 'calc(100% - 3.5rem)',   // 3.5rem is the height of the mobileNavbar 
        height: 'auto',
        width: '100%',
        minHeight: '100vh',
        backgroundImage: `
            linear-gradient(90deg, 
                rgba(58,94,22,0.70) 0%, 
                rgba(58,94,22,0.80) 100%),
            url(${leaves})
        `,
        backgroundPosition: 'center top',
        backgroundRepeat: 'repeat-y',
        backgroundSize: 'cover',
    },
    desktopBody: {
        // border: 'solid red 1px',
        height: 'auto',
        minHeight: '100vh',
        width: '100%',
        backgroundImage: `
            linear-gradient(90deg, 
                rgba(58,94,22,0.70) 0%, 
                rgba(58,94,22,0.80) 100%),
            url(${leaves})
        `,
        backgroundPosition: 'center top',
        backgroundRepeat: 'repeat-y',
        backgroundSize: 'cover',
    },
    desktopContainer: {
        backgroundImage: `
            linear-gradient(90deg, 
                rgba(58,100,22,0.00) 0%, 
                rgba(58,100,22,0.50) 11%,
                rgba(58,100,22,0.70) 14%, 
                rgba(58,100,22,0.70) 86%,
                rgba(58,100,22,0.50) 89%,
                rgba(58,100,22,0.00) 100%)
        `,
        backgroundPosition: 'center top',
        // yOffset: '12rem',
        backgroundRepeat: 'repeat-y',
        backgroundSize: 'cover',
        padding: '0rem 9rem'
    },


    titleText: {
        // border: 'solid red 1px',
        padding: '4.0rem 3.0rem',
        textShadow: '0.15rem 0.15rem 0.3rem black',
        fontSize: 'min(2.5rem, 8vw)'
    },
    subtitleText: {
        padding: '0.0rem 4.0rem',
        textShadow: '0.12rem 0.12rem 0.20rem black',
    },
    cardArea: {
        padding: '2.0rem',
    },

}));


// LandingPage is responsible for rendering a Navbar and either the Mobile or Desktop version
// depending on screen width. The Navbar contains its own M.vs.D. rendering logic. 
export default function LandingPage(props) {
    const classes = useStyles();
    return (
        <Box className={classes.root}  >
            <Navbar />
            <MobileBody  />
            <DesktopBody />
        </Box>
    )
}

function MobileBody(props) {
    const classes = useStyles();
    return (
        <Box 
            className={classes.mobileBody}
            display={{ xs: 'block', md: 'none' }}  
        >
            <Typography className={classes.titleText} align='center' color='textPrimary' component='h1' variant='h2' >
                Sowing the seeds of life&#8209;long learning and DIY&#8209;spirit
                through hands&#8209;on teaching of math, physics, chess, biology,
                and programming.
            </Typography>
            <Typography
                className={classes.subtitleText}
                align='justify'
                color='textPrimary'
                component='h2'
                variant='body1'
            >
                The STEM Garden is an off-grid urban teaching garden, rooted in New Orleans.
                We offer private tutoring and small group lessons, both in the garden and online.
                We help students meet all common core math standards but see learning math as
                so much more than that! We emphacize the playful side of mathematical thinking and
                use many puzzles, games, hands-on projects to engage young imaginations.
            </Typography>
            <Box className={classes.cardArea} >
                <LandingCards  />
            </Box>
        </Box>
    )
}


function DesktopBody(props) {
    const classes = useStyles();
    return ( 
        <Box
            className={classes.desktopBody}
            display={{ xs: 'none', md: 'block' }}
        >
            <Container
                className={classes.desktopContainer}
                maxWidth='lg'
                // disableGutters
            >
                <Typography
                    className={classes.titleText}
                    align='center'
                    color='textPrimary'
                    component='h1'
                    variant='h2'
                >
                    Sowing the seeds of life&#8209;long learning and DIY&#8209;spirit
                    through integrated teaching of math, physics, chess, biology,
                    and computer programming.
                </Typography>

                <Box
                    className={classes.smText}
                    display={{ xs: 'none', sm: 'block' }}
                >
                    <Typography
                        className={classes.subtitleText}
                        align='justify'
                        color='textPrimary'
                        component='h2'
                        variant='h5'
                    >
                        The STEM Garden is an off-grid urban teaching garden, rooted in New Orleans.
                        We offer private tutoring and small group lessons, both in the garden and online.
                        We help students excell on the SAT and ACT and meet all Common Core math standards, 
                        but we see learning math as so much more than that! We emphacize the playful side of 
                        mathematical thinking and make use of many puzzles, games, and hands-on projects to engage young imaginations.
                    </Typography>
                </Box>

                <Box className={classes.cardArea}  >
                    <LandingCards />
                </Box>
            </Container>
        </Box>
    
    )
}

