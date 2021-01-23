import React from 'react';
import {
    Link as RouterLink,
} from "react-router-dom";

// MY images
import fret_measuring from "../images/guitar_fret_spacing_crop1.jpg";
// import balance_scale from "../images/balance_scale_waldorf.jpg";
// import multiple_choice from "../images/multiple_choice_test.jpg";
import banana_papaya_turmeric from "../images/landing_page/banana_papaya_turmeric.JPG";
import chessclub from "../images/chess_demo_board.jpg";
// import chessclub from "../images/chess_club_college_track.jpg";
import profile_pic from "../images/landing_page/profile_pic.JPG";


// MUI Imports
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { makeStyles } from '@material-ui/core/styles';

const cardHeight = '1000px';

const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        width: '100%',
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
    
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
        
    }

}));

// DESCRIPTION:  There will be only 4 cards on the landing page: About the Garden, Teaching Services, Chess Clubs, and Meet Nigel

export default function LandingCards(props) {
    const classes = useStyles();
    return (
        <Container
            className={classes.mobileCardGrid}
            maxWidth='md'
        >
            <Grid container spacing={3} >
                {/* TEACHING SERVICES */}
                <Grid item xs={12} sm={4} >
                    <Card className={classes.card} raised>
                        <CardActionArea>
                            <CardMedia
                                className={classes.cardImage}
                                image={fret_measuring}
                                alt="Student measuring a guitar"
                                title="Student measuring a guitar"
                            />
                            {/* <CardContent> */}
                            <Box p={1.5} >
                                <Typography color="textSecondary" component="h3" variant="h5" gutterBottom >
                                    Teaching Services
                                </Typography>
                                <Typography variant="body2" color="textSecondary" >
                                    I offer private tutoring in K-12, AP, and college level math classes,
                                    as well as chess lessons, SAT/ACT test prep, and hands-on math enrichment.
                                </Typography>
                            </Box>
                                
                            {/* </CardContent> */}
                        </CardActionArea>
                        <CardActions>
                            <Button component={RouterLink} variant='contained' size="medium" color="primary"
                                to={{
                                    pathname: '/teach',
                                    state: {
                                        selectedTab: 'tutoring',
                                    }
                                }} >
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>


                {/* ABOUT THE GARDEN */}
                <Grid item xs={12} sm={4} >
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.cardImage}
                                alt="Homegrown Bananas and Papayas"
                                image={banana_papaya_turmeric}
                                title="Homegrown Bananas and Papayas"
                            />
                            <Box p={1.5} >
                                <Typography color="textSecondary" component="h3" variant="h5" gutterBottom  >
                                    About the Garden
                                </Typography>
                                <Typography color="textSecondary" variant="body2" color="textSecondary" >
                                    Established in 2016, the garden started as a blighted lot and gradually
                                    evolved into an oasis of turmeric and fruit trees.
                                </Typography>
                            </Box>
                        </CardActionArea>
                        <CardActions className={classes.flexColumn} >
                            <Button component={RouterLink} to='/our_story' variant='contained' size="medium" color="primary"   >
                                Our Story
                            </Button> 
                            {/* <Button component={RouterLink} to='/photo_gallery' variant='contained' size="medium" color="primary" >
                                Photo Gallery
                            </Button> */}
                        </CardActions>
                    </Card>
                </Grid>


                {/* MEET NIGEL */}
                <Grid item xs={12} sm={4} >
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia className={classes.cardImage} image={profile_pic} title="founder's profile picture" alt="founder's profile picture" />
                            <Box p={1.5} >
                                <Typography color='textSecondary' variant="h5" component="h2" gutterBottom >
                                    Meet Nigel
                                </Typography>
                                <Typography color="textSecondary" variant="body2"  >
                                    I am a jack of all trades. I rejoice in learning about sustainability, technology, and in helping kids see the world from new perspectives.
                                </Typography>
                            </Box>
                        </CardActionArea>
                        <CardActions className={classes.flexColumn}  >
                            <Button component={RouterLink} to='/about_me' variant='contained' size="medium" color="primary"  >
                                About Me
                            </Button>
                            {/* <Button component={RouterLink} to='/my_projects' variant='contained' size="medium" color="primary"  >
                                My Projects
                            </Button> */}
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>

        

    )

}

{/* CHESS CLUBS and LESSONS */ }
{/* <Grid item xs={12} sm={4} >
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.cardImage}
                                image={chessclub}
                                alt="Students playing chess"
                                title="Students playing chess"
                            />
                            <CardContent>
                                <Typography component="h3" variant="h5" >
                                    Chess Clubs and Lessons
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textPrimary"
                                >
                                    Playing chess is a fun way for kids to develop their skills at problem solving, 
                                    time-management, and communication, as well as persistence and sportsmanship. 
                                    We offer private and small group lessons and partner with schools to help 
                                    them establish chess clubs. 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                component={RouterLink}
                                to='/teach/chess'
                                variant='contained'
                                size="medium"
                                color="primary"
                            >
                                Lessons
                            </Button>
                            <Button
                                component={RouterLink}
                                to='/teach/chess'
                                variant='contained'
                                size="medium"
                                color="primary"
                            >
                                Clubs
                            </Button>
                        </CardActions>
                    </Card>
                </Grid> */}