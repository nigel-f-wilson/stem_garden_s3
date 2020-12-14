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
            <Typography className={classes.titleText} align='left' color='textPrimary' component='h3' variant='h3'>
                Tic-Tac-Toe and the Fifteen Game
            </Typography>
            <Typography className={classes.titleText} align='left' color='textPrimary' component='subtitle' variant='subtitle'>
                A math lesson in two simple games.
            </Typography>
            <Typography className={classes.titleText} align='left' color='textPrimary' component='h4' variant='h4'>
                Proof in Tic-Tac-Toe
            </Typography>
            <Typography align='justify' color='secondary' component='body1' variant='body1' >
                Math is all about things that can be prooven with logic. 
                A written proof is an expression of a mathematician's creativity in the same way a song is an expression of a musician's creativity.
                To a trained eye, mathematical proofs have the potential to be stunningly beautiful, however, they often involve a lot of abstraction and formality, 
                making them inaccessible to beginners. 
                In creating this lesson, my first goal was to help students understand what it means to proove something. 
                I wanted it to be accessible to very young students, with still developing arithmetic skills and no knowledge of algebra,
                while also being interesting to advanced students
                
                writing a proofwhat it means to proove something.  by getting them to proove 
                things about the g
                
                ()
                I wanted to help young kids understand what it means to proove something
                mathematically. How could this be related to a student with emerging arithmatic skills and no knowledge of algebra?
                Through Tic-Tac-Toe! 
                
                
                 though,   If we strip away the abstraction and formality though, good proofs 
                
                
                I like to introduce students to the concept of proof through a concrete example: the game of Tic-Tac-Toe. 
                Starting with nothing more than the rules of the game, young children left to play will discover the idea
                of a double attack, a position where there are two unblocked two in a rows and a win on the next turn is guaranteed. <br />
                
                Once they have made this discovery, challenge them to proove something more complicated: That the player who goes 
                second can always mount a successful defence. No matter what the first player does they cannot guarantee a win, 
                unless the other player makes a 'mistake'. Exploring this game has a lot in common with the way math is done.
                We start                 
                
                

                we can think backwards and proove that 
                
                In certain 
                
                

            </Typography>



            {/* <Typography className={classes.titleText} align='center' color='textPrimary' component='h1' variant='h1'>
                Math Games
            </Typography>
            <Box  p={4} >
                <Typography align='justify' color='secondary' component='h2' variant='body1' >
                    Simple strategy games are full of oportunities to practice mathematical thinking.  
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
                
            </Box> */}
            <Box className={classes.cardArea} >
                <MathGamesCards />
            </Box>
        </Container>
    )
}





