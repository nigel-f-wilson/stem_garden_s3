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
        // padding: '2.0rem',
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
                <Typography align='justify' color='secondary' component='h2' variant='body1' >
                    I love teaching mathematical thinking through the lens of simple games.  
                    Both games of strategy and games of chance have something to teach us.
                     
                    The concept of Proof is the foundation of all mathematical thinking; 
                    we start with a few simple assumptions (axioms) and we put them together 
                    in creative ways to prove more complex and interesting theorems. 
                     
                    Similarly, games like chess, hex, and nim start with a few simple rules
                    and these rules provide a framework inside of which players can express their creativity.  <br /> <br />
                    
                    Most things that mathematicians have "proven" true started out as mere common sense and intuition. 
                    But mathematicians never accept something as true just becuse it seems to be common sense,
                    rather, they have a long tradition of breaking ideas down and asking "How can we be sure?"
                    
                    If we are playing a game and I ask you, "What is the best move in this position?"
                    you will probably have an idea that jumps out at you and seems like the <em>obvious</em>
                    answer.  If you are really determined to win though, you will not make the first move
                    that comes to mind, you will ask yourself, "How can I be sure this is the best move?" 
                    Getting students to develop the habit of thinking in this simultaneously creatve and critical 
                    way is a goal of most math classes, but it can be learned just as well (not to mention in a 
                    more fun way) over a game of tic-tac-toe! 
                </Typography>
                
            </Box>
            <Box className={classes.cardArea} >
                <MathGamesCards />
            </Box>
        </Container>
    )
}





