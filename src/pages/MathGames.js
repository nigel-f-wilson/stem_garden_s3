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
        padding: '4.0rem, 0.0rem',
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
            <Typography className={classes.titleText} align='left' color='textPrimary' component='h3' variant='h3' gutterBottom>
                Tic-Tac-Toe and the Fifteen Game
            </Typography>
            
            <Typography className={classes.titleText} align='left' color='textPrimary' component='h4' variant='h4'>
                Mathematical Proof and Tic-Tac-Toe
            </Typography>
            <Typography align='justify' color='secondary' component='body1' variant='body1' gutterBottom >
                Math is all about things that can be prooven using logic. 
                In the same way a song is an expression of a musician's creativity, a written proof is an expression of a mathematician's creativity.
                To the trained eye, mathematical proofs have the potential to be stunningly beautiful and elegant. 
                However, they often involve a lot of abstraction and formality, making them inaccessible to beginners. 
                This lesson introduces students to the concept of proof without depending on mathematical jargon or 
                students having experience with algebra.  <br />

                If you have played Tic-Tac-Toe much, you have probably observed that the player who goes first seems to have an advantage but the game 
                usually ends in a draw. In the first part of this lesson, students take this casual observation to the 
                next level, prooving that the game will <em>always</em> end in a draw unless one of the players makes a mistake and lets the other win.
                To do this students will articulate a move-by-move plan for player two that anticipates every startegy player one might try to use and 
                explains how player two can avoid losing.  Competitive games like Tic-Tac-Toe are a good medium for introducing proof because they make 
                the student take the matter personally, it's not just true or false, it's win or lose.
            </Typography>

            <Typography className={classes.titleText} align='left' color='textPrimary' component='h4' variant='h4'>
                Similarity Beneath the Surface
            </Typography>
            <Typography align='justify' color='secondary' component='body1' variant='body1' gutterBottom>
                Many problems can be solved by adapting solutions that worked for other problems before. 
                The first step in reusing a solution is realizing that the two problems fit the same pattern.
                Often times two real-world problems will seem unrelated on their surfaces even though at a deeper level they are behaving according to the same pattern. 
                Being familiar with common mathematical patterns makes you better at noticing when this is the case.

                My second goal in creating this lesson was to get students to experience for themselves a situation where they are 
                able to adapt and reuse their own solution to another problem. Once you have mastered Tic-Tac-Toe and written a complete strategy that lets you guarantee 
                you will never lose, try playing the Fifteen Game. At first, you will probably think that these two games feel totally unalike.
                You would never guess that by mastering one you had gotten any closer to mastering the other.  But you have!
                Once you are familiar with the mechanics of the Fifteen Game, take a look at the lesson on Magic Squares, a mathematical curiosity first 
                discovered in China about 4200 years ago. Equipped with this mathematical knowledge, you will soon realize that Tic-Tac-Toe and the Fifteen Game 
                have a lot more in common that you thought!
            </Typography>



            <Box className={classes.cardArea} >
                <MathGamesCards />
            </Box>
        </Container>
    )
}





