import React from 'react';
import PropTypes from 'prop-types';


// MY components
import Navbar from "../../components/Navbar/Navbar";

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
                <Typography className={classes.titleText} align='center' color='textPrimary' component='h1' variant='h1'>
                    Teaching Services
                </Typography>
                <ServiceTabs initialTab={initialTab} key={initialTab} />

                <Box p={4}>
                    {/* <Typography className={classes.subtitleText} align='center' color='textPrimary' component='h2' variant='h2'>
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
                    </Typography> */}
                    
                    
                    <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                        Testimony:
                    </Typography>
                    <Typography align='justify' color='textPrimary' component='h2' variant='body1' gutterBottom  >
                        "I wouldn’t have made it through my first semester of grad school without Nigel. I had tried a few different tutors before 
                        Nigel but he is the perfect tutor. He takes a mathematical concept and makes it understandble and relevant. 
                        He listened to me complain about my professor, and then redirected to keep me positive and on track. He helped 
                        me to to master the steps and to understand the concepts well enough that I could explain things to the people 
                        in my study group. I wish he could always be my math teacher! 
                    </Typography>
                    <Typography align='right' color='textPrimary' component='h2' variant='body1' gutterBottom  >
                        J. Richelson
                    </Typography>
                    <Typography align='justify' color='textPrimary' component='h2' variant='body1' gutterBottom  >
                        "I highly recommend Nigel without reservation for tutoring in mathematics because of his ability to convey the subject 
                        matter clearly while still presenting it in an interesting way with real world examples.  He taught my son 7th grade 
                        mathematics while employed at the Waldorf School in New Orleans and it was clear that he brought much preparation and care 
                        to his teaching while encouraging his students' solving ability and thirst for knowledge with an upbeat attitude."
                    </Typography>
                    <Typography align='right' color='textPrimary' component='h2' variant='body1' gutterBottom  >
                        W. Mains
                    </Typography>
                    <Typography align='justify' color='textPrimary' component='h2' variant='body1' gutterBottom  >
                        "I worked with Nigel and witnessed his enthusiasm for teaching math. He developed the math curriculum for and taught 4th-8th grade. 
                        Our students were very engaged in math while he was our math teacher. For the first time in a long time, 
                        they were excited to go to math because his lessons were so interesting and thought provoking. 
                        I hope Nigel can come back to our school as a chess teacher as soon as the restrictions on after 
                        school activities are lifted." 
                    </Typography>
                    <Typography align='right' color='textPrimary' component='h2' variant='body1' gutterBottom  >
                        J. Contento, Faculty Chair WSNO
                    </Typography>
                    <Typography align='justify' color='textPrimary' component='h2' variant='body1' gutterBottom  >
                        "The best assistant I've ever had"
                    </Typography>
                    <Typography align='right' color='textPrimary' component='h2' variant='body1' gutterBottom  >
                        G. Atkins, Owner of Atlas Electric LLC
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
            <TabPanel id='math_tutoring' className={classes.tabPanel} value={activeTab} index={0}>    
                <TutoringTabContent />
            </TabPanel>


            <TabPanel id='math_enrichment' className={classes.tabPanel} value={activeTab} index={1} >
                <EnrichmentTabContent />
            </TabPanel>

            
            
            <TabPanel id='chess' className={classes.tabPanel} value={activeTab} index={2}>
                <ChessTabContent />
            </TabPanel>


            <TabPanel className={classes.tabPanel} value={activeTab} index={3}>
                <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                    Tests Covered
                </Typography>
                <Typography align='left' color='textPrimary' gutterBottom component='p' variant='body1'>
                    I offer one-on-one coaching for students seeking to improve their scores on the math sections of the SAT&reg; and ACT&reg;.
                    I also help students prepare for the AP&reg; Calculus and Physics exams.
                </Typography>

                <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                    Approach
                </Typography>
                <Typography align='left' color='textPrimary' gutterBottom component='p' variant='body1'>
                    High-stakes standardized tests are an unfortunate and unavoidable part of the modern education landscape.                
                    They are neither a fair nor a complete means of assessing students' academic abilities.
                    They reward qualities that are no longer valuable as Sugata Mitra explains early in his 
                    2012 TED Talk&reg; <a href="https://www.ted.com/talks/sugata_mitra_build_a_school_in_the_cloud?language=en">"Build a School in the Cloud"</a> 
                    Nonetheless, they are here to stay, and doing well on them can unlock doors. The ACT score I got when I 
                    was a junior in highschool was the key to me earning a four-year full tuition scholarship to Ohio University. 
                    I joke that, at about $10,000 dollars per hour, taking the ACT that morning was the best hourly rate I have ever earned in my working life.
                </Typography>
                <Typography align='left' color='textPrimary' gutterBottom component='p' variant='body1'>
                    Test-taking anxiety renders many intelligent, hardworking, and creative students unable to
                    do their best on college entrance exams. 
                    Anxiety is worsened by the fact that these tests tend to be very fast paced.
                    I take a wholistic approach to preparing students for these exams and 
                    learn the math concepts covered on these tests I also
                    teach test taking mindsets

                    These tests tend to be fast-paced
                    A major part of my work at College Track was helping students prepare for the ACT and SAT Math tests. 

                </Typography>


                <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                    Why Learn Chess?
                </Typography>
                <Typography align='left' color='textPrimary' gutterBottom component='p' variant='body1'>
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

                <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                    Pricing
                </Typography>
                <Typography align='left' color='textPrimary' gutterBottom component='p' variant='body1'>
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

function TutoringTabContent() {
    return (
        <React.Fragment> 
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Online and In-Person Availability
            </Typography>
            <Typography align='justify' color='textPrimargutterBottom y' component='p' variant='body1'>
                I am currently accepting new students for online tutoring. <br />
                I hope to begin offering in-person lessons in the garden beginning in February 2021, though this will depend on the pandemic.
                I am not currently accepting new students for in-home tutoring.
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Grade Levels and Courses Offered
            </Typography>
            <Typography align='justify' color='textPrimargutterBottom y' component='p' variant='body1'>
                I offer one-on-one and small group math tutoring for students in 3rd through 12th grades and in college level
                courses on algebra, calculus, statistics, discrete math, and probability.
                For parents of younger students I offer guidance on how best to help children with their homework.
                I am happy to serve as a math mentor to students who are homeschooled. Math Mentoring involves a combination
                of enrichment and tutoring on topics required by grade level standards.
                Be sure to check out the "Enrichment" tab to read about some of the hands-on explorations I have used to get
                kids in touch with thhe fun side of math.
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Pricing
            </Typography>
            <Typography align='justify' color='textPrimargutterBottom y' component='p' variant='body1'>
                For private tutoring with students in grade school and high school I charge $40 per hour.
                For private tutoring with students in taking Calculus, AP, and College level classes I charge $55 per hour.
                Prices for small group tutoring will be negotiated on a case by case basis.
                Discounted rates on tutoring services are available for adding on chess lessons or math enrichment.
                Students who commit to two or more hours of tutoring per week will also recieve support between lessons via text meassage.
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                My Math Teaching Experience
            </Typography>
            <Typography align='justify' color='textPrimargutterBottom y' component='p' variant='body1'>
                I earned my degree in math education from Ohio University in 2015. While working toward my degree I completed several internships in
                rural and inner city public schools in Ohio. For my final semester-long teaching internship I lived in New Delhi, India and taught at
                Step-By-Step School.  In 2016, I moved from Ohio to New Orleans to launch my teaching career at Einstein Middle School.
                Within a few months of moving I purchassed a blighted vacant lot and began the long process of cleaning it up and
                transforming it into the STEM Garden. Throughout the next two years I spent my mornings developing the garden and taught math and physics
                at College Track, an afterschool program for aspiring first generation college students.
                After College Track, I took a break from classroom-based teaching. Students are full of questions about the "real-world" uses for the math
                they are taught in school so it serves a math teacher well to have some personal experience using math in the "real-world".
                I worked as farm manager for Recirculating Farms Coaltion and got to learn a lot about aquaponics and the math required to run
                the business side of a small farm. I also worked as an electrician's assistant with Ziemba Electric and Atlas Electric.
                I already had some text-book understanding of electrical circuits, but through this experience I learned how to go from theory
                all the way through to craftsmanlike installations.
                During the 2019-2020 school year I was back in the classroom, working as the math specialist at the Waldorf School of New Orleans.
                I designed curriculum and taught math to students in grades 4-8. I taught through the transition to remote learning, but at the end
                of the year the school had to downsize. Throughout the previous four years I had taken occasional gigs as a free lance in-home math tutor but
                the pandemic pushed me to take that business online and it has been growing steadily since.
            </Typography>
        </React.Fragment>
    )
}

function EnrichmentTabContent() {
    return (
        <React.Fragment>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Availability
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='p' variant='body1'>
                Due to the extremely hand-on nature of my math enrichment lessons they are not offered in an online format.
                I hope to begin offering in-person math enrichment lessons in the garden beginning in March 2021, though this will be depend on the pandemic.
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Topics
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='p' variant='body1'>
                By Enrichment I mean "All the math they don't teach you in school." Enrichment can go any direction you want it to.  
                I have some favorite trailheads I've used before:<br />
                <ul>
                    <li>Explore the physics of sound waves and the mathematical pattern in the way the frets are spaced on the neck of a guitar.</li>
                    <li>Build things! Learn how to design and build stable wooden structures. Work your way up to building a catault and learn geometry and calculus along the way.</li>
                    <li>Master strategy games like Nim, Hex, the 15-Game, and logic puzzles like sudoku and ken-ken. </li>
                    {/* <li>Make Coppernicus Challenge jig. </li> */}
                    <li>Learn about the off-grid solar power system that supplies the classroom.</li>
                </ul>
                But the point is to find a topic that you're really curious about and to dive into learning all you can about it 
                picking up as much relevant math along the way as you can. Learning math in the context of learning something else you 
                are because you need it to understand something elsething you really want to understand
                Learn how to apply math to excell at games of chance and pure strategy. 
                Build something! Catapults are a lot of fun and a great introduction to calculus.
                 
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Pricing
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='p' variant='body1'>
                My hourly rate for one-on-one tutoring starts at $40 for students in grade school through most of high school.
                One-on-one tutoring for students in Calculus, AP, and College level classes is $50 per hour.
                Prices for small groups tutoring will be negotiated on a case by case basis.
                Discounted rates on tutoring services are available for adding on chess lessons or math enrichment.
                Students who commit to two or more hours of tutoring per week will also recieve support between lessons via text meassage.
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                My Math Teaching Experience
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='p' variant='body1'>
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
            </Typography>

                
            
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Online and In-Person Availability
            </Typography>
            <Typography align='justify' color='textPrimargutterBottom y' component='p' variant='body1'>
                I am currently accepting new students for online tutoring. <br />
                I hope to begin offering in-person lessons in the garden beginning in February 2021, though this will depend on the pandemic.
                I am not currently accepting new students for in-home tutoring.
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Grade Levels and Courses Offered
            </Typography>
            <Typography align='justify' color='textPrimargutterBottom y' component='p' variant='body1'>
                I offer one-on-one and small group math tutoring for students in 3rd through 12th grades and in college level
                courses on algebra, calculus, statistics, discrete math, and probability.
                For parents of younger students I offer guidance on how best to help children with their homework.
                I am happy to serve as a math mentor to students who are homeschooled. Math Mentoring involves a combination
                of enrichment and tutoring on topics required by grade level standards.
                Be sure to check out the "Enrichment" tab to read about some of the hands-on explorations I have used to get
                kids in touch with thhe fun side of math.
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Pricing
            </Typography>
            <Typography align='justify' color='textPrimargutterBottom y' component='p' variant='body1'>
                For private tutoring with students in grade school and high school I charge $40 per hour.
                For private tutoring with students in taking Calculus, AP, and College level classes I charge $55 per hour.
                Prices for small group tutoring will be negotiated on a case by case basis.
                Discounted rates on tutoring services are available for adding on chess lessons or math enrichment.
                Students who commit to two or more hours of tutoring per week will also recieve support between lessons via text meassage.
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                My Math Teaching Experience
            </Typography>
            <Typography align='justify' color='textPrimargutterBottom y' component='p' variant='body1'>
                I earned my degree in math education from Ohio University in 2015. While working toward my degree I completed several internships in
                rural and inner city public schools in Ohio. For my final semester-long teaching internship I lived in New Delhi, India and taught at
                Step-By-Step School.  In 2016, I moved from Ohio to New Orleans to launch my teaching career at Einstein Middle School.
                Within a few months of moving I purchassed a blighted vacant lot and began the long process of cleaning it up and
                transforming it into the STEM Garden. Throughout the next two years I spent my mornings developing the garden and taught math and physics
                at College Track, an afterschool program for aspiring first generation college students.
                After College Track, I took a break from classroom-based teaching. Students are full of questions about the "real-world" uses for the math
                they are taught in school so it serves a math teacher well to have some personal experience using math in the "real-world".
                I worked as farm manager for Recirculating Farms Coaltion and got to learn a lot about aquaponics and the math required to run
                the business side of a small farm. I also worked as an electrician's assistant with Ziemba Electric and Atlas Electric.
                I already had some text-book understanding of electrical circuits, but through this experience I learned how to go from theory
                all the way through to craftsmanlike installations.
                During the 2019-2020 school year I was back in the classroom, working as the math specialist at the Waldorf School of New Orleans.
                I designed curriculum and taught math to students in grades 4-8. I taught through the transition to remote learning, but at the end
                of the year the school had to downsize. Throughout the previous four years I had taken occasional gigs as a free lance in-home math tutor but
                the pandemic pushed me to take that business online and it has been growing steadily since.
            </Typography>
        </React.Fragment>
    )
}

function ChessTabContent() {
    return (
        <React.Fragment>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Lessons, Afterschool Clubs, Chess in the Garden
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='p' variant='body1'>
                *** All in-person clubs are temporarily cancelled due to Covid-19 *** <br />
                I offer pprivate lessons and small group coaching both online and in person.
                I offer lessons designed for parents who are new to chess but have a child whose taken an interest.


            </Typography>

            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Afterschool Clubs
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='p' variant='body1'>
                *** All in-person clubs are temporarily cancelled due to Covid-19 *** <br />
                I currently host an afterschool chess club in partnership with the Waldorf School of New Orleans.
                I will be launching a Sunday afternoon chess club in the STEM Garden as soon as it is safe to do so.
                I am currently seeking new schools to partner with to establish new afterschool chess clubs.
                Need help establishing a chess club at your school? Call me!
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>

            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='p' variant='body1'>
                *** All in-person clubs are temporarily cancelled due to Covid-19 *** <br />
                I currently host an afterschool chess club in partnership with the Waldorf School of New Orleans.
                I will be launching a Sunday afternoon chess club in the STEM Garden as soon as it is safe to do so.
                I am currently seeking new schools to partner with to establish new afterschool chess clubs.
                Need help establishing a chess club at your school? Call me!
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Chess & Test Prep
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='p' variant='body1'>
                When I worked at College Track there was a strong emphasis on Test Prep. I reflected on my own experience.

            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Why Learn Chess?
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='p' variant='body1'>
                Learning chess helps kids experience firsthand that thinking hard and having fun can go together. <br />
                Math and Chess have a lot in common. They both require us to think creatively
                yet to be disiplined and thorough at the same time. <br /><br />

                Math is very useful, and so there has come to be a lot of pressure on kids to do well in math class. And this
                pressure makes it hard to remember that doing math can be fun. Students don't generally ask the questions "Why do I <em>have to</em> learn this? 
                When am I going to <em>need</em> this?" until they are feeling pressured. <br /><br />

                By contrast, Chess is an abstract game with no practical applications.  No one is required to learn it,
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
                be valuable habits to possess in whatever you pursue.
            </Typography>

            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Pricing
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='p' variant='body1'>
                Chess lessons are priced on a sliding scale. <br />
                Private lessons are offered for $25-50 per hour. <br />
                Lessons for 2 to 4 students are offered for $40-100 per hour. <br />
                Lessons for 5 to 8 students are offered for $60-120 per hour. <br /> <br />
                Sunday Chess Club in the garden is offered with a suggested donation of $5-10. <br /> <br />
                The cost for facilitating afterschool clubs can be negotiated on a case by case basis. <br />
                As with math tutoring services, I want chess lessons to be accessible to any motivated student.
                For anyone unable to pay in dollars, I am happy to barter or make work-trade agreements.
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                My Experience & Ranking
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='p' variant='body1'>
                I have played chess for 18 years and I am currently rated ~1600,
                or in the 90th percentile of players on chess.com.
                I'm a long way from the pros rankings but I have a knack for explaining the game.
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Pricing
            </Typography>
            <Typography align='justify' color='textPrimargutterBottom y' component='p' variant='body1'>
                For private tutoring with students in grade school and high school I charge $40 per hour.
                For private tutoring with students in taking Calculus, AP, and College level classes I charge $55 per hour.
                Prices for small group tutoring will be negotiated on a case by case basis.
                Discounted rates on tutoring services are available for adding on chess lessons or math enrichment.
                Students who commit to two or more hours of tutoring per week will also recieve support between lessons via text meassage.
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                My Math Teaching Experience
            </Typography>
            <Typography align='justify' color='textPrimargutterBottom y' component='p' variant='body1'>
                I earned my degree in math education from Ohio University in 2015. While working toward my degree I completed several internships in
                rural and inner city public schools in Ohio. For my final semester-long teaching internship I lived in New Delhi, India and taught at
                Step-By-Step School.  In 2016, I moved from Ohio to New Orleans to launch my teaching career at Einstein Middle School.
                Within a few months of moving I purchassed a blighted vacant lot and began the long process of cleaning it up and
                transforming it into the STEM Garden. Throughout the next two years I spent my mornings developing the garden and taught math and physics
                at College Track, an afterschool program for aspiring first generation college students.
                After College Track, I took a break from classroom-based teaching. Students are full of questions about the "real-world" uses for the math
                they are taught in school so it serves a math teacher well to have some personal experience using math in the "real-world".
                I worked as farm manager for Recirculating Farms Coaltion and got to learn a lot about aquaponics and the math required to run
                the business side of a small farm. I also worked as an electrician's assistant with Ziemba Electric and Atlas Electric.
                I already had some text-book understanding of electrical circuits, but through this experience I learned how to go from theory
                all the way through to craftsmanlike installations.
                During the 2019-2020 school year I was back in the classroom, working as the math specialist at the Waldorf School of New Orleans.
                I designed curriculum and taught math to students in grades 4-8. I taught through the transition to remote learning, but at the end
                of the year the school had to downsize. Throughout the previous four years I had taken occasional gigs as a free lance in-home math tutor but
                the pandemic pushed me to take that business online and it has been growing steadily since.
            </Typography>
        </React.Fragment>
    )
}