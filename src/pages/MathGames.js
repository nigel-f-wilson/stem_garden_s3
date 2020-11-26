import React from 'react';

// MY components
import Navbar from "../components/Navbar/Navbar";
import MathGamesCards from "../components/MathGamesCards";

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
        width: '100vw',
        height: 'auto',
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
    // body: {
    //     color: theme.palette.common.white,
    //     padding: '0.0rem 0.0rem',
    //     paddingBottom: '1.5rem',
    //     // maxWidth: '640px'
    // },
    
    cardArea: {
        padding: '2.0rem',
    },

}));


export default function MathGamesPage(props) {
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
        <Container className={classes.pageBody} maxWidth='md' >
            <Typography className={classes.titleText} align='center' color='textPrimary' component='h1' variant='h1'>
                Math Games
            </Typography>
            <Box  p={4} >
                <Typography className={classes.body} align='justify' color='secondary' component='h2' variant='body1' >
                    I love teaching mathematical thinking through the lens of simple games.  
                    Both games of strategy and games of chance have something to teach us.
                    Mathem


                    Proof is the heart of all mathematical thinking; we start with a few simple assumptions (axioms) 
                    and we put them together in creative ways to prove more complex and interesting theorems. 
                    But what does it really mean to "prove" something is true?
                    That is a question philosophers and mathematicians have struggled with for a long time. 
                    It's deeper than just showing your work or explaining your reasoning. 
                    Mathematical proof is subtle and difficult explain, yet a game as simple as tic-tac-toe offers us 
                    an excellent gateway to understanding this elusive concept. 
                </Typography>
                
            </Box>
            <Box className={classes.cardArea} >
                <MathGamesCards />
            </Box>
        </Container>
    )
}





