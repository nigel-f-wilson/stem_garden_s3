import React from 'react';

// MY components
import Navbar from "../components/Navbar/Navbar";
import ProjectCards from "../components/ProjectCards";

// MY images
import bamboo from "../images/bamboo.jpg";
import tic_tac_toe from "../images/projects/tic_tac_toe_screenshot.JPG";
import logo from "../images/incomplete_logo.png";
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

// TEXT can be found in Google Doc form at https://docs.google.com/document/d/19ujkydhB3RbG58DxAPPlO9bRPNA95wQN3wtLy1YXqLQ/edit#


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
                            My Projects
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component='p' variant='body1' gutterBottom >
                            As a math teacher I am frequently asked questions like, "When is knowing this ever going to be useful in <em>real life</em>?"<br />
                            That must be a tough question for a math teacher who went straight from being a student in a school to being a teacher in a school.  To be able to connect mathematics to the ‘real world’ in genuine ways that satisfy students, a math teacher must have experience working in the world outside of school.  I have gotten out-of-the classroom experience working as an electrician's assistant and building my off-grid homestead.
                        </Typography>
                        <Typography component='p' variant='body1' gutterBottom >
                            In designing my rain catchment system, I used math and data on average monthly rainfall to determine the best ratio of roof area to storage tank volume.  In designing my solar power system, I had to think about how to position the panels to take advantage of the way the sun's path through the sky changes with the seasons.  I used trigonometry in designing and building the roofs of the tiny houses I live in.  During breaks in the school year, I work with electricians and we use math to ensure that the wiring we install is of sufficient size to safely carry the electrical loads it will be out under. 
                        </Typography>
                        <Typography component='p' variant='body1' gutterBottom >
                            We all know that math has been very useful to humanity, but to get kids excited to learn math takes more than simply telling them it is useful or threatening that <em>someday</em> they are going to need to know it.  Skills that you only learn in order to pass a test will be forgotten as soon as the test is passed, but skills that you learn because there is something real you want to do with them tend to stick in memory much better!
                        </Typography>
                        <Typography component='p' variant='body1' gutterBottom >
                            When you set out to learn something new, knowing in advance how you want to apply it provides motivation to overcome challenges along the way. It helps you focus your search in the right places, and it gives you a way to judge for yourself when your search has been a success.
                        </Typography>
                        <Typography component='p' variant='body1' gutterBottom >
                            That's why, at the Nola Stem Garden, math lessons are woven seamlessly into hands-on projects. Gardening, Building, Music, and Strategy Games, there's something for everyone and there's Math in all of it!
                        </Typography>
                    </Grid>

                    <ProjectCards />

                </Grid>
            </Container>

        </Box>
    )
}