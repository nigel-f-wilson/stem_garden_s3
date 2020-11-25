import React from 'react';
import PropTypes from 'prop-types';


// MY components
import Navbar from "../components/Navbar/Navbar";
import SpacerBox from "../components/Navbar/SpacerBox";

// MY images


// MUI Imports
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


import { makeStyles } from '@material-ui/core/styles';
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
    summary: {
        color: theme.palette.common.white,
        paddingBottom: '0.7rem',
        // maxWidth: '640px'
    },
    tabs: {
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        flexGrow: 1,
        flexShrink: 1,
        // backgroundColor: theme.palette.primary.dark,
        backgroundColor: '#111111',
        color: theme.palette.common.white,
    },
    tabBar: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '1 1 100%',
        // color: theme.palette.common.white,
    },
    tabPanel: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        padding: '0.0rem 1.0rem'
    },
}));


function TeachPage(props) {
    const classes = useStyles();
    let initialTab = getTabIndex(props.location.state.selectedTab);
    
    return (
        <Box className={classes.root}  >
            <Navbar />
            
            <Container
                className={classes.body}
                maxWidth='md'
                disableGutters
            >
                <Typography align='center' color='white' component='h1' variant='h6'>
                    Tab: {props.location.state.selectedTab}  <br />
                    Tab Number: {initialTab}
                </Typography>
                <Typography className={classes.titleText} align='center' color='textPrimary' component='h1' variant='h1'>
                    Teaching Services
                </Typography>
                <ServiceTabs initialTab={initialTab} key={initialTab} />

                <Typography className={classes.subtitleText} align='center' color='textPrimary' component='h2' variant='h2'>
                    Teaching Philosophy
                </Typography>
                <Typography className={classes.body} align='justify' color='textPrimary' component='h2' variant='body1' >
                    To be a good teacher one must remain in touch with what it feels like to be a student. <br />
                    In Eastern philosophy this is often refered to as retaining a "beginner's mind". <br />
                    To be a student is to ask questions and to pursue answers. It is to confront the unknown. 
                    To be a teacher is to be a role model for students. A good teacher models excitement at learning
                    new things and is never preoccupied with keeping up the appearance of being an expert.
                    A teacher must never be afraid to say, "I don't know the answer to your question but I bet we 
                    can find it together." A teacher is dedicated to being a life-long learner and realizes that all 
                    learning starts with realizing that there is something you have yet to learn. 
                    <a> Click Here </a> for a list of some of my favorite books and TED Talks on philosophy of education.
                </Typography>

                <Typography className={classes.header} align='center' color='textPrimary' component='h2' variant='h2'>
                    Pricing
                </Typography>
                <Typography className={classes.body} align='justify' color='textPrimary' component='h2' variant='body1' >
                    A goal of the STEM Garden is to make engaging math and science education accessible to all.  
                    Because of this we accept payment on a sliding scale, within the following price ranges. 
                    You are invited to look within and decide what you are capable of paying, depending on your ability to support your community.
                    <br /> &bull; Chess lessons and STEM Enrichment: $30-50 per hour. 
                    <br /> &bull; Tutoring, elementary thru algebra: $30-50 per hour. 
                    <br /> &bull; Tutoring, College level, AP, & Calculus: $45-65 per hour.
                    <br /> &bull; Test Prep, SAT, ACT, GRE: $45-65 per hour.
                </Typography>
                



                <Typography className={classes.header} align='center' color='textPrimary' component='h2' variant='h2'>
                    Professional Experience
                </Typography>
                <Typography className={classes.body} align='justify' color='textPrimary' component='h2' variant='body1' >
                    I completed my degree in middle school and high school math education at Ohio University in 2015 after  , ex
                </Typography>    
                <Typography className={classes.body} align='justify' color='textPrimary' component='h2' variant='body1' >
                    My formal teacher training is in Middle and High School Mathematics. 
                    Before that I studied physics, and this has always had a big influence on my approach to teaching math. 
                    I have been inventing stategy games and tinkering and taking things apart all my life.
                    all my life and
                </Typography>    
                
                <Typography className={classes.header} align='center' color='textPrimary' component='h2' variant='h2'>
                    Testimony:
                </Typography>
                <Typography className={classes.body} align='justify' color='textPrimary' component='h2' variant='body1' >
                "I wouldn’t have made it through my first semester of grad school without Nigel. I had tried a few different tutors before 
                Nigel but he is the perfect tutor. He takes a mathematical concept and makes it understandble and relevant. 
                He listened to me complain about my professor, and then redirected to keep me positive and on track. He helped 
                me to to master the steps and to understand the concepts well enough that I could explain things to the people 
                in my study group. I wish he could always be my math teacher! -J. Richelson

                "I highly recommend Nigel without reservation for tutoring in mathematics because of his ability to convey the subject 
                matter clearly while still presenting it in an interesting way with real world examples.  He taught my son 7th grade 
                mathematics while employed at Waldorf School in New Orleans and it was clear that he brought much preparation and care 
                to his teaching while encouraging his students' solving ability and thirst for knowledge with an upbeat attitude." -W. Mains
                
                "I worked with Nigel and witnessed his enthusiasm for teaching math. He developed the math curriculum for and taught 4th-8th grade. 
                Our students were very engaged in math while he was our math teacher. For the first time in a long time, 
                they were excited to go to math because his lessons were so interesting and thought provoking. 
                I hope Nigel can come back to our school as a chess teacher as soon as the restrictions on after 
                school activities are lifted. J. CONTENTO, Faculty Chair WSNO
                </Typography>
                
            </Container>

        </Box>
    )
}



function ServiceTabs(props) {
    const classes = useStyles();
    const [activeTab, setActiveTab] = React.useState(props.initialTab);

    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <Box className={classes.tabs}  >
            <AppBar className={classes.tabBar} position="static"  >
                <Tabs value={activeTab} onChange={handleChange} aria-label="simple tabs example" centered>
                    <Tab label="Tutoring" {...a11yProps(0)} />
                    <Tab label="Enrichment" {...a11yProps(1)} />
                    <Tab label="Chess" {...a11yProps(2)} />
                    <Tab label="Test Prep" {...a11yProps(3)} />

                </Tabs>
            </AppBar>
            <TabPanel className={classes.tabPanel} value={activeTab} index={0}>    
                I offer one-on-one help with any mathematics related to a class in school, at any level. <br />
                I have experience teaching math in classroom settings to students in 3rd grade through high school,
                and have tutored students through undergrad and graduate level courses in physics, statistics, and calculus.
                I am well versed in the Common Core Math Standards and have completed training in Waldorf teaching methodology.
                I strive to identify and fill knowledge gaps trough direct instruction when necessary,
                but my real aim is always to help my students become more independent learners. <br />
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={activeTab} index={1}>
                Come experience the fun side of math and science! 
                Learn about solar power, game theory, gardening, the physics of music, and catapults, 
                computer programming... you name it!  <br />
                In school settings, math is often presented as a list of vocabulary to memorize
                and computational skills that kids must master in order to move onto the next level.
                This approach induces anxiety and crushes kids' natural curiosity and will to learn. 
                Students crave relevance. The ask for the "real world applications" of the math they are required to learn.
                This makes perfect sense considering human beings retain new information by connecting it to 
                past experiences. We don't retain information because we are told we will need it someday; 
                we retain information best when we have sought it out in the process of solving a problem we 
                already cared about finding a solution to. 
            </TabPanel>
            
            
            <TabPanel className={classes.tabPanel} value={activeTab} index={2}>
                <Typography className={classes.header} align='left' color='textPrimary' component='div' variant='h4'>
                    Private Lessons
                </Typography>
                <Typography className={classes.header} align='left' color='textPrimary' component='div' variant='h4'>
                    Afterschool Clubs
                </Typography>
                <Typography className={classes.header} align='left' color='textPrimary' component='div' variant='h4'>
                    Private Lessons and Afterschool Clubs
                </Typography>
                <Typography className={classes.header} align='left' color='textPrimary' component='div' variant='h4'>
                    I offer private and small group chess lessons and facilitate afterschool clubs in partnership with local schools. <br />
                    Group lessons are a great option for siblings or for parents who aren't experienced players themselves
                    but have a child who is interested in the game and needs a practice partner.
                    Want to start a club at your school? I can help! <br /> <br />

                    Chess and Math both require us to plan ahead, to be creative, and disiplined, and thorough in our thinking. <br />
                    As a math teacher, I am frequently asked by students struggling with motivation,
                    "Why do I have to learn this? When am I going to need this?"
                    As a chess teacher I am never asked anything of the sort.
                    Chess is an abstract game. It has no practical applications and noone is required to learn it,
                    and yet, something about it draws kids to apply themselves. Chess makes kids <em>want</em> to think hard
                    and it helps them come to see that learning and having fun are two things that can go together.
                    Getting my students to <em>think out loud</em> enables me to tailor my guidance, to make it most
                    relvant to them. For many kids who struggle with this in the context of math tutoring, chess has an
                    almost magical ability to draw them out of their shells and to get them to verbalize their thoughts,
                    making them more effective students all around. <br />
                    {/* I have played chess since I was nine years old and I am currently rated ~1600, or in the 90th percentile 
                    of players on chess.com. */}
                </Typography>

                
                
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={activeTab} index={3}>
                Need help getting ready for the SAT&reg;, ACT&reg;, or AP&reg; Calculus exams?  <br/> 
                I can help! During the two years I worked at <a href='https://collegetrack.org/communities/new-orleans-la/'>College Track New Orleans</a> I
                specialized in helping students prepare for these fast-paced and high-statkes tests.
                These tests are not  
                
                For two years I worked 
                and specialized in preparing students for these tests.  
                
                High-stakes standardized tests are an unfortunate and unavoidable part of the modern education landscape.                
                
                
                Test-taking anxiety causes many intelligent, hardworking, and creative students to not show themselves in the best light on college entrance 
                tests due to test-taking anxiety. These tests tend to be fast paced and 
                
                
                In addition to helping students learn the math concepts covered on these tests I also
                teach test taking mindsets
                
                These tests tend to be fast-paced

            </TabPanel>
        </Box>
    );
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function getTabIndex(tabName) {
    if (tabName === 'tutoring') { return 0 }
    if (tabName === 'enrichment') { return 1 }
    if (tabName === 'chess') { return 2 }
    if (tabName === 'test_prep') { return 3 }
    else { return 0 }
}


export default TeachPage;