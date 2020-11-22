import React from 'react';

// MY components
// import LandingHeader from "../components/LandingHeader";
import MobileLandingCards from "../components/LandingCards";
import DesktopLandingCards from "../components/DesktopLandingCards";
import Navbar from "../components/Navbar/Navbar";

// MY images
import bananas_and_loquat from "../images/bananas_and_loquat.jpg";
// import logo from "../images/incomplete_logo.png";
import leaves from "../images/leaves_cropped_for_mobile.jpg";
// import leaves from "../images/leaves_edited.jpg";
// import turmeric from "../images/turmeric.jpg";

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
        // minHeight: '100vh',
        // backgroundColor: theme.palette.common.white,

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
        backgroundSize: 'contain',
    },
    desktopBody: {
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
    desktopContainer: {
        backgroundImage: `
            linear-gradient(90deg, 
                rgba(58,94,22,0.00) 0%, 
                rgba(58,94,22,0.50) 5%,
                rgba(58,94,22,0.70) 10%, 
                rgba(58,94,22,0.70) 90%,
                rgba(58,94,22,0.50) 95%,
                rgba(58,94,22,0.00) 100%)
        `,
        backgroundPosition: 'center top',
        // yOffset: '12rem',
        backgroundRepeat: 'repeat-y',
        backgroundSize: 'cover',
    },


    mobileTitleText: {
        color: theme.palette.common.white,
        // maxWidth: '90%',
        padding: '2.5rem',
        paddingTop: '7.0rem',
        paddingBottom: '3.0rem',
        textShadow: '0.15rem 0.15rem 0.3rem black',
        // fontSize: 'calc(1rem + 5vw)',
        fontSize: '7vw'
    },
    mobileSubtitleText: {
        // border: 'solid red 1px',
        color: theme.palette.common.white,
        padding: '1rem 3rem 1rem 3rem',
        textShadow: '0.12rem 0.12rem 0.20rem black',
    },

    desktopTitleText: {
        color: theme.palette.common.white,
        padding: '2.5rem',
        paddingTop: '12.0rem',
        paddingBottom: '3.0rem',
        textShadow: '0.15rem 0.15rem 0.3rem black',
    },
    desktopSubtitleText: {
        // border: 'solid red 1px',
        color: theme.palette.common.white,
        padding: '1rem 5rem 2rem 5rem',
        // padding: '5rem',
        textShadow: '0.12rem 0.12rem 0.20rem black',
    },

    landingHeader: {
        width: '100%',
        height: '3rem',
    },
    cardArea: {
        // border: 'solid red 1px',
        height: 'auto',
        width: '100%',
        padding: '1rem'

    },
}));


// LandingPage is responsible for rendering a Navbar and either the Mobile or Desktop version
// depending on screen width. The Navbar contains its own M.vs.D. rendering logic. 
export default function LandingPage(props) {
    const classes = useStyles();
    return (
        <Box className={classes.root}  >
            <Navbar />
            <MobileBody />
            <DesktopBody />
        </Box>
    )
}

function MobileBody(props) {
    const classes = useStyles();
    return (
        <Box
            className={classes.mobileBody}
            display={{ xs: 'block', lg: 'none' }}
        >
            <Typography
                className={classes.mobileTitleText}
                align='center'
                color='textPrimary'
                component='h1'
                variant='h2'
            >
                COPIED THE LANDING PAGE
            </Typography>

            <Box
                className={classes.xsText}
                display={{ xs: 'block', sm: 'none' }}
            >
                <Typography
                    className={classes.mobileSubtitleText}
                    align='justify'
                    color='textPrimary'
                    component='h2'
                    variant='body1'
                >
                    COPIED THE LANDING PAGE
                </Typography>
            </Box>

            <Box
                className={classes.smText}
                display={{ xs: 'none', sm: 'block' }}
            >
                <Typography
                    className={classes.mobileSubtitleText}
                    align='justify'
                    color='textPrimary'
                    component='h2'
                    variant='body1'
                >
                    COPIED THE LANDING PAGE
            </Typography>
            </Box>

            <Box
                className={classes.cardArea}
                display={{ xs: 'block' }}
            >
                <MobileLandingCards />
            </Box>
        </Box>
    )
}


function DesktopBody(props) {
    const classes = useStyles();
    return (
        <Box
            className={classes.desktopBody}
            display={{ xs: 'none', lg: 'block' }}
        >
            <Container
                className={classes.desktopContainer}
                maxWidth='md'
                disableGutters
            >
                <Typography
                    className={classes.desktopTitleText}
                    align='center'
                    color='textPrimary'
                    component='h1'
                    variant='h2'
                >
                    COPIED THE LANDING PAGE
                </Typography>

                <Box
                    className={classes.smText}
                    display={{ xs: 'none', sm: 'block' }}
                >
                    <Typography
                        className={classes.desktopSubtitleText}
                        align='justify'
                        color='textPrimary'
                        component='h2'
                        variant='h5'
                    >
                        COPIED THE LANDING PAGE
                    </Typography>
                </Box>

                <Box
                    className={classes.cardArea}
                    display={{ xs: 'block' }}
                >
                    <MobileLandingCards />
                </Box>
            </Container>
        </Box>

    )
}

