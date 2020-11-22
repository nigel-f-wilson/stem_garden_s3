import React from 'react';
import {
    Link as RouterLink,
} from "react-router-dom";

// MY images
import tic_tac_toe from "../images/projects/tic_tac_toe_screenshot.JPG";
import logo from "../images/incomplete_logo.png";


// MUI Imports
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


import { makeStyles } from '@material-ui/core/styles';

const cardHeight = '1000px';

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    card: {
        height: '100%',
        width: '100%',
        // color: theme.palette.common.white,
        // backgroundColor: theme.palette.common.black,
        // backgroundColor: theme.palette.common.white,
        // backgroundColor: theme.palette.primary.light,
        // backgroundColor: '#444',
        backgroundColor: '#ddd',
        padding: '0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    cardImage: {
        height: 0,
        paddingTop: '100%', // 1:1  Sets the "height" in terms of the Width since % units for padding are based on the width
        // paddingTop: '56.25%', // 16:9
        // width: '100%',
    },
    cardButtonArea: {
        height: { cardHeight },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    }

}));

// DESCRIPTION:   

export default function ProjectCards(props) {
    const classes = useStyles();

    return (
        <Grid container
            className={classes.gridContainer}
            id='grid'
            maxWidth='md'
            spacing={4}
        >

            {/* TIC TAC TOE and the FIFTEEN GAME */}
            <Grid item xs={12} sm={6} md={4} >
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.cardImage}
                            image={tic_tac_toe}
                            alt="Student doing an experiment"
                            title="Student doing an experiment"
                        />
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Tic-Tac-Toe and the Fifteen Game
                            </Typography>

                            <Box>
                                <Typography
                                    // display={{ xs: 'none', sm: 'block' }}
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    Math lets us see when things that seem different on the surface are actually following the 
                                    the same patterns deep down.
                                    These two games feel very different to play at first, but once you complete the lesson on Magic Squares
                                    you will notice some surprizing similarity between them!
                                </Typography>
                            </Box>
                        </CardContent>
                    </CardActionArea>


                    <CardActions>
                        <Button
                            href='https://nolastemgarden.github.io/tic-tac-toe-and-the-fifteen-game/#/'
                            variant='contained'
                            size="medium"
                            color="primary"
                        >
                            Play Now!
                        </Button>
                    </CardActions>
                </Card>
            </Grid>



            {/* CONNECT FOUR with MATH FACT PRACTICE */}
            <Grid item xs={12} sm={6} md={4} >
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.cardImage}
                            image={tic_tac_toe}
                            alt="Student doing an experiment"
                            title="Student doing an experiment"
                        />
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Math Fact Connect Four
                            </Typography>

                            <Box>
                                <Typography
                                    // display={{ xs: 'none', sm: 'block' }}
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    Play connect four in classic mode or use the game as a way to practice your fluency with the 
                                    foundation multiplication and division facts. I originally created a version of this game made 
                                    with laminated cards. My desire to share it with more than just the kids in my own class was a 
                                    big part of what motivated me to learn to code!
                                </Typography>
                            </Box>
                        </CardContent>
                    </CardActionArea>


                    <CardActions>
                        <Button
                            href='https://nolastemgarden.github.io/tic-tac-toe-and-the-fifteen-game/#/'
                            variant='contained'
                            size="medium"
                            color="primary"
                        >
                            Play Now!
                        </Button>
                    </CardActions>
                </Card>
            </Grid>


            {/* CHESS CLUB RATING TRACKER */}
            <Grid item xs={12} sm={6} md={4} >
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.cardImage}
                            image={tic_tac_toe}
                            alt="Student doing an experiment"
                            title="Student doing an experiment"
                        />
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Chess Club Tracker
                            </Typography>

                            <Box>
                                <Typography
                                    // display={{ xs: 'none', sm: 'block' }}
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    I love playing chess and spreading the love of the game by hosting youth chess clubs.
                                    I created this tool to track players' growth and to help them visualize their progress
                                    relative to the other members of their club.
                                </Typography>
                            </Box>
                        </CardContent>
                    </CardActionArea>

                    <CardActions>
                        <Button
                            href='https://nolastemgarden.github.io/tic-tac-toe-and-the-fifteen-game/#/'
                            variant='contained'
                            size="medium"
                            color="primary"
                        >
                            Use the tracker
                        </Button>
                    </CardActions>
                </Card>
            </Grid>


            {/* THREE FIELDS CARD GAME */}
            <Grid item xs={12} sm={6} md={4}  >
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.cardImage}
                            // component="img"
                            alt="founder's profile picture"
                            height="140"
                            image={tic_tac_toe}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Three Fields
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This is a two player card game that I invented.  It is an improved version of the classic game war.  Here you can find the rules for playing in person or you can play online against my bot.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button
                            component={RouterLink}
                            to='/about_me'
                            variant='contained'
                            size="medium"
                            color="primary"
                        >
                            About Me
                        </Button>
                        <Button
                            component={RouterLink}
                            to='/my_projects'
                            variant='contained'
                            size="medium"
                            color="primary"
                        >
                            My Projects
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>

    )

}