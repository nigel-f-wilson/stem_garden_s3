import React from 'react';
import PropTypes from 'prop-types';


// MY components
import Navbar from "../components/Navbar/Navbar";

// MY images

// MUI Imports
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
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
        height: 'auto',
        minHeight: '100vh',
        backgroundColor: 'inherit',
        display: 'flex',
        flexDirection: 'column',
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
    // summary: {
    //     color: theme.palette.common.white,
    //     paddingBottom: '0.7rem',
    //     // maxWidth: '640px'
    // },
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


export default function TeachPage(props) {
    const classes = useStyles();
    let initialTab = getTabIndex(props.location.state.selectedTab);
    
    return (
        <Box className={classes.root}  >
            <Navbar />
            
            <Container
                maxWidth='md'
                disableGutters
            >
                {/* <Typography align='center' color='white' component='h1' variant='h6'>
                    Tab: {props.location.state.selectedTab}  <br />
                    Tab Number: {initialTab}
                </Typography> */}
                <Typography className={classes.titleText} align='center' color='textPrimary' component='h1' variant='h1'>
                    Teaching Services
                </Typography>
                <ServiceTabs initialTab={initialTab} key={initialTab} />

                <Box p={4}>
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
                
                </Box>
                

                
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
                <Typography className={classes.header} gutterBottom align='left' color='textPrimary' component='h3' variant='h4'>
                    Lessons
                </Typography>
                <Typography className={classes.header} gutterBottom align='left' color='textPrimary' component='p' variant='body1'>
                    I offer one-on-one coaching and small group chess lessons for all ages! <br />
                    Group lessons are a great option for kids who are friends, neighbors, or in homeschool pod together.
                    I also offer mentoring for parents who aren't experienced players themselves but
                    want to help their young child learn the game. <br />
                    I have played chess since I was nine years old and I am currently rated ~1600,
                    or in the 90th percentile of players on chess.com.
                </Typography>

                <Typography className={classes.header} gutterBottom align='left' color='textPrimary' component='h3' variant='h4'>
                    Afterschool Clubs
                </Typography>
                <Typography className={classes.header} gutterBottom align='left' color='textPrimary' component='p' variant='body1'>
                    *** All in-person clubs are temporarily cancelled due to Covid-19 *** <br />
                    I currently host an afterschool chess club in partnership with the Waldorf School of New Orleans.
                    I will be launching a Sunday afternoon chess club in the STEM Garden as soon as it is safe to do so.
                    I am currently seeking new schools to partner with to establish new afterschool chess clubs. 
                    Need help establishing a chess club at your school? Call me! 
                </Typography>

                <Typography className={classes.header} gutterBottom align='left' color='textPrimary' component='h3' variant='h4'>
                    Why Learn Chess?
                </Typography>
                <Typography className={classes.header} gutterBottom align='left' color='textPrimary' component='p' variant='body1'>
                    Learning chess helps kids experience firsthand that thinking hard and having fun can go together. <br />
                    Math and Chess have a lot in common. They both require us to plan ahead, to think creatively, 
                    yet to be disiplined and thorough at the same time. <br /><br />

                    Math is very useful, and it is very fun. Some well-meaning but misguided folks made it a law that every 
                    child in the U.S. ought to be required to study math, because it is so useful. This law backfired though,
                    and caused many kids to lose sight of the fact that math is fun.  When you take the fun out and put the pressure on                    
                    students start to struggle to feel motivated in math class it is common for them to push back and ask,
                    "Why do I <em>have to</em> learn this? When am I going to <em>need</em> this?" <br /><br />
                    
                    By contrast, Chess is an abstract game with no practical applications.  Noone is required to learn it,
                    yet, something about it makes kids feel drawn to apply their full rational abilities. 
                    Chess makes kids <em>want</em> to think hard.  <br /><br />

                    Getting my students to <em>think out loud</em> enables me to tailor the guidance I offer to make it most
                    relvant to them. For many kids who struggle with this in the context of math tutoring, chess has an
                    almost magical ability to draw them out of their shells and to get them to verbalize their thoughts,
                    making them more effective students all around. <br /><br />
                    
                    Getting good at chess requires more than just studying board positions.
                    You must also develop your self-awareness and adopt certain habits of mind.
                    Even if chess itself has no practical applications, the thought-habits that 
                    you develop over the board will make you a more effective thinker and will 
                    be valuable habits to possess in whatever you do. 
                </Typography>

                <Typography className={classes.header} gutterBottom align='left' color='textPrimary' component='h3' variant='h4'>
                    Pricing
                </Typography>
                <Typography className={classes.header} gutterBottom align='left' color='textPrimary' component='p' variant='body1'>
                    Lessons for 1 to 3 students are offered on a sliding scale of $30-60 per hour. <br />
                    Lessons for 4 to 8 students are offered on a sliding scale of $40-80 per hour. <br />
                    Sunday Chess Club in the garden is offered with a suggested donation of $5-10. <br />
                    The cost for facilitating afterschool clubs can be negotiated on a case-by-case basis. <br />
                    As with math tutoring services, I want chess lessons to be accessible to any motivated student.
                    For anyone unable to pay in dollars, I am happy to barter or make work-trade agreements. 
                </Typography>
            </TabPanel>


            <TabPanel className={classes.tabPanel} value={activeTab} index={3}>
                <Typography className={classes.header} gutterBottom align='left' color='textPrimary' component='h3' variant='h4'>
                    Tests Covered
                </Typography>
                <Typography className={classes.header} gutterBottom align='left' color='textPrimary' component='p' variant='body1'>
                    I offer one-on-one coaching for students seeking to improve their scores on the math sections of the SAT&reg; and ACT&reg;.
                    I also help students prepare for the AP&reg; Calculus and Physics exams.
                </Typography>

                <Typography className={classes.header} gutterBottom align='left' color='textPrimary' component='h3' variant='h4'>
                    Approach
                </Typography>
                <Typography className={classes.header} gutterBottom align='left' color='textPrimary' component='p' variant='body1'>
                    High-stakes standardized tests are an unfortunate and unavoidable part of the modern education landscape.                
                    They are neither a fair nor a complete means of assessing students' academic abilities.
                    They reward qualities that are no longer valuable as Sugata Mitra explains early in his 
                    2012 TED Talk&reg; <a href="https://www.ted.com/talks/sugata_mitra_build_a_school_in_the_cloud?language=en">"Build a School in the Cloud"</a> 
                    Nonetheless, they are here to stay, and doing well on them can unlock doors. The ACT score I got when I 
                    was a junior in highschool was the key to me earning a four-year full tuition scholarship to Ohio University. 
                    I joke that, at about $10,000 dollars per hour, taking the ACT that morning was the best hourly rate I have ever earned in my working life.
                </Typography>
                <Typography className={classes.header} gutterBottom align='left' color='textPrimary' component='p' variant='body1'>
                    Test-taking anxiety renders many intelligent, hardworking, and creative students unable to
                    do their best on college entrance exams. 
                    Anxiety is worsened by the fact that these tests tend to be very fast paced.
                    I take a wholistic approach to preparing students for these exams and 
                    learn the math concepts covered on these tests I also
                    teach test taking mindsets

                    These tests tend to be fast-paced

                </Typography>


                <Typography className={classes.header} gutterBottom align='left' color='textPrimary' component='h3' variant='h4'>
                    Why Learn Chess?
                </Typography>
                <Typography className={classes.header} gutterBottom align='left' color='textPrimary' component='p' variant='body1'>
                    Learning chess helps kids experience firsthand that thinking hard and having fun can go together. <br />
                    Math and Chess have a lot in common. They both require us to plan ahead, to think creatively,
                    yet to be disiplined and thorough at the same time. <br /><br />

                    Math is very useful, and it is very fun. Some well-meaning but misguided folks made it a law that every
                    child in the U.S. ought to be required to study math, because it is so useful. This law backfired though,
                    and caused many kids to lose sight of the fact that math is fun.  When you take the fun out and put the pressure on
                    students start to struggle to feel motivated in math class it is common for them to push back and ask,
                    "Why do I <em>have to</em> learn this? When am I going to <em>need</em> this?" <br /><br />

                    By contrast, Chess is an abstract game with no practical applications.  Noone is required to learn it,
                    yet, something about it makes kids feel drawn to apply their full rational abilities.
                    Chess makes kids <em>want</em> to think hard.  <br /><br />

                    Getting my students to <em>think out loud</em> enables me to tailor the guidance I offer to make it most
                    relvant to them. For many kids who struggle with this in the context of math tutoring, chess has an
                    almost magical ability to draw them out of their shells and to get them to verbalize their thoughts,
                    making them more effective students all around. <br /><br />

                    Getting good at chess requires more than just studying board positions.
                    You must also develop your self-awareness and adopt certain habits of mind.
                    Even if chess itself has no practical applications, the thought-habits that
                    you develop over the board will make you a more effective thinker and will
                    be valuable habits to possess in whatever you do.
                </Typography>

                <Typography className={classes.header} gutterBottom align='left' color='textPrimary' component='h3' variant='h4'>
                    Pricing
                </Typography>
                <Typography className={classes.header} gutterBottom align='left' color='textPrimary' component='p' variant='body1'>
                    Lessons for 1 to 3 students are offered on a sliding scale of $30-60 per hour. <br />
                    Lessons for 4 to 8 students are offered on a sliding scale of $40-80 per hour. <br />
                    Sunday Chess Club in the garden is offered with a suggested donation of $5-10. <br />
                    The cost for facilitating afterschool clubs can be negotiated on a case-by-case basis. <br />
                    As with math tutoring services, I want chess lessons to be accessible to any motivated student.
                    For anyone unable to pay in dollars, I am happy to barter or make work-trade agreements.
                </Typography>

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
                <Box p={2}>
                    {children}
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

