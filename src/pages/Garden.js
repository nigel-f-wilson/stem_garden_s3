import React from 'react';
import PropTypes from 'prop-types';


// MY components
import Navbar from "../components/Navbar/Navbar";
import SquarePhotoCard from "../components/SquarePhotoCard";
import WildlifePhotoGrid from "../components/CropInfo/WildlifePhotoGrid";
import BananaInfo from "../components/CropInfo/BananaInfo";
import PapayaInfo from "../components/CropInfo/PapayaInfo";
import TurmericInfo from "../components/CropInfo/TurmericInfo";
import LimeInfo from "../components/CropInfo/LimeInfo";
import LoquatInfo from "../components/CropInfo/LoquatInfo";
import FigInfo from "../components/CropInfo/FigInfo";
import GuavaInfo from "../components/CropInfo/GuavaInfo";
import FlowerInfo from "../components/CropInfo/FlowerInfo";
import OtherCropsInfo from "../components/CropInfo/OtherCropsInfo";


// MY images
// early days images
import mattresses from "../images/early_days/mattresses.JPG";
import trash_in_dirt from "../images/early_days/trash_in_dirt.JPG";
import banana_flower from "../images/banana/banana_flower.JPG";



// MUI Imports
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

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
    tabs: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        flexShrink: 1,
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
    squareImage: {
        height: 0,
        paddingTop: '100%', // square
    }
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
                <Box p='4.0rem'>
                    <Typography className={classes.titleText} align='center' color='textPrimary' component='h1' variant='h1'>
                        About the Garden
                    </Typography>
                </Box>

                <GardenTabs initialTab={initialTab} key={initialTab} />

                
            </Container>

        </Box>
    )
}



function GardenTabs(props) {
    const classes = useStyles();
    const [activeTab, setActiveTab] = React.useState(props.initialTab);

    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <Box className={classes.tabs}  >
            <AppBar className={classes.tabBar} position="static"  >
                <Tabs value={activeTab} onChange={handleChange} aria-label="simple tabs example" centered>
                    <Tab label="Our Story" {...a11yProps(0)} />
                    <Tab label="What's Growing" {...a11yProps(1)} />
                    <Tab label="Buy Our Produce" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel className={classes.tabPanel} value={activeTab} index={0}>
                <OurStoryTabContent />
            </TabPanel>

            <TabPanel className={classes.tabPanel} value={activeTab} index={1} >
                <WhatsGrowingTabContent />
            </TabPanel>

            <TabPanel className={classes.tabPanel} value={activeTab} index={2}>
                <BuyOurProduceTabContent />
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
    if (tabName === 'our_story') { return 0 }
    if (tabName === 'whats_growing') { return 1 }
    // if (tabName === 'chess') { return 2 }
    // if (tabName === 'test_prep') { return 3 }
    else { return 0 }
}

function OurStoryTabContent() {
    return (
        <React.Fragment>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                How I Got Into Gardening
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                Before I ever tried my hand at gardening I was interested in foraging for edible wild plants. My
                garden still shows clear signs of this influence. While certain crops are planted in neat rows 
                and managed carefully, many other species are naturalized here and are allowed to thrive wherever their seeds 
                happen to sprout. Because of this approach, a walk around the garden always has a surprize in store!
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                I got serious about gardening when I was a sophomore at Ohio University. Working under Dr. Art Tesse, growing in the 
                well-loved soil of the University Research Gardens, I learned one of the most important lessons about gardening, one that has stuck with
                me ever since and become a pillar of the way I practice gardening in the STEM Garden: Gardening is less about
                taking care of plants than most non-gardeners would suspect, it is about taking care of the soil and the whole mini-ecosystem.
                If you take good care of the soil the rest of the garden takes care of itself.
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Early Days
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                After my first three years gardening in various community gardens around Athens, Ohio I wanted to move to a warmer 
                climate and buy land so that I could commit to gardening in one place for years to come, a necessary commitment if you want
                to practice gardening in a way that focuses on caring for soil. 
            </Typography>
            <Box py={1} >
                <Grid container spacing={2}  >
                    <Grid item xs={12} md={6} >
                        <SquarePhotoCard img={mattresses} />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <SquarePhotoCard img={trash_in_dirt} />
                    </Grid>
                </Grid>
            </Box>
            
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                In March of 2016, I won a Civic Source auction for a blighted vacant lot at the corner of Port St. and N. Galvez, in New Orleans upper ninth ward.
                Though I started experimenting right away with what plants would do well in my new garden, for the first three years most of the work was 
                picking trash out of the soil, eliminating invasive species like ragweed, and bringing in 400 cubic yards of horse manure and other organic matter to compost.  
            </Typography>


            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Wildlife Habitat
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                Countless frogs, toads, lizards, and birds make there home in the STEM Garden and help me by eating the bugs that would have like to eat my plants.
                The garden also supports butterflies and bees from nearby hives, offering them nectar in exchange for their work as polinators. 
                I get immeasureble joy from watching all the living creatures that have found their way into this little urban oasis.
                The ability to support diverse animal life is a sign that the ecosystem as a whole is healthy.  
            </Typography>
            <WildlifePhotoGrid />


            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Building the Classroom
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                
                
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Gardening Philosophy
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                The garden produces lots to eat, but productivity is never the top priority. My focus is always on improving soil health, 
                creating wildlife habitat, and increasing bio-diversity. The garden 
            </Typography>
            
        </React.Fragment>
    )
}

function WhatsGrowingTabContent() {
    const classes = useStyles();

    return (
        <Grid container spacing={3} >
            <Grid item xs={12} md={6}>
                <BananaInfo />
            </Grid>

            <Grid item xs={12} md={6}>
                <PapayaInfo />
            </Grid>

            <Grid item xs={12} md={6}>
                <TurmericInfo />
            </Grid>
            
            <Grid item xs={12} md={6}>
                <LoquatInfo />
            </Grid>

            <Grid item xs={12} md={6}>
                <LimeInfo />
            </Grid>

            <Grid item xs={12} md={6}>
                <FigInfo />
            </Grid>

            <Grid item xs={12} md={6}>
                <GuavaInfo />
            </Grid>

            <Grid item xs={12} md={6}>
                <FlowerInfo />
            </Grid>
            
            <Grid item xs={12} md={6}>
                <OtherCropsInfo />
            </Grid>
            

        </Grid>
    )
}

function BuyOurProduceTabContent () {
    return (
        <React.Fragment>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Private and Group Lessons
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                I offer private lessons and small group coaching both online and in person.
                While you can practice playing chess against opponents of similar skill online any time, it is more fun when you have a partner
                who you can play with regularly over the board. Group lessons are great for siblings, neighbors, or kids who homeschool together.
                They enable you and your practice partner to grow together, so that your matches remain challenging and exciting as you improve.
                I also offer lessons specifically for parents who are new to chess but have a child who has taken an interest.
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Chess Club in the Garden
            </Typography>
            <Typography align='justify' color='red' component='p' variant='body1'>
                *** All in-person clubs are suspended until further notice due to Covid-19 ***
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                When safe, chess in the garden will be offered every Sunday afternoon from 2-4pm
                I will be launching a Sunday afternoon chess club in the STEM Garden as soon as it is safe to do so.
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Afterschool Clubs
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                *** All in-person clubs are suspended until further notice due to Covid-19 *** <br />
                I currently host an afterschool chess club in partnership with the Waldorf School of New Orleans.
                I am currently seeking schools to partner with to establish new afterschool chess clubs.
                Need help establishing a chess club at your school? Call me!
            </Typography>

            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Why Learn Chess?
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                Learning chess helps kids experience firsthand that thinking hard and having fun can go together. <br />
                Math and Chess have a lot in common. They both require creative, yet disiplined, thinking.
                Math is very useful, and so kids are required to learn it in school. Unfortunately, that pressure to learn
                math often causes them to lose sight of the fact that doing math can be really fun. When students feel under pressure
                in math classes they start asking "Why do I <em>have to</em> learn this?" and "When am I going to <em>need</em> this?" <br /><br />

                By contrast, Chess is an abstract game with no practical applications.  No one is required to learn it,
                and yet, something about it makes kids feel drawn to apply their full reasoning abilities.
                No one has ever inturrupted a chess lesson to ask me "When am I going to <em>need</em> this?"
                Chess makes kids <em>want</em> to think hard.  It is an excellent medium for teaching kids to
                think out loud and to think through questioning, both skills which carry over and make them more effective
                learners in all other subjects. including math. Players also develop greater self-awareness about how their
                emotions affect their thinking process
            </Typography>

            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Pricing
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                Chess lessons are priced on a sliding scale, please pay according to your means. <br />
                <ul>
                    <li>Private lessons are offered for $25-50 per hour. </li>
                    <li>Lessons for 2 to 4 students are offered for $40-80 per hour.</li>
                    <li>Lessons for 5 to 8 students are offered for $60-100 per hour. </li>
                    <li>Sunday Chess Club in the garden is offered with a suggested donation of $5-10.</li>
                    <li>The cost for facilitating afterschool clubs can be negotiated on a case by case basis.</li>
                </ul>
                As with math tutoring services, I want chess lessons to be accessible to any motivated student.
                If money is what's holding you back from chess lessons, I am happy to barter or make work-trade agreements.
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Chess Teaching Experience
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                I have played chess for 18 years and I am currently rated ~1600, or in the 90th percentile of players on chess.com.
                I'm a long way from the title of 'Master' but I have a knack for explaining the game. At the club I went to as a kid
                I was encouraged to play 'teaching games' with other kids as soon as I had something to teach, so I've been teaching
                chess even longer than I've been teaching math! <br /> Besides establishing chess clubs at College Track and the
                Waldorf School I have taught chess summer camps offered by Strategic Thoughts in partnership with NORD.
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Chess & Test Prep
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                I got serious about running youth chess clubs while working at College Track. CT placed a strong emphasis on preping kids for
                fast-paced high-stakes standardized tests. I reflected on my own experience getting a scholarship based on my ACT score and I
                realized that, though the math topics covered on the ACT had been gone over in school, what had really prepared me for the test's
                pressure level and pace was all the speed chess I had played as a kid. It was chess that taught me to cope with time pressure,
                to focus my mind so that I could think clearly in a stressful circumstance. I offer discounted rates on SAT and ACT prep for
                students who add on chess lessons.
            </Typography>
        </React.Fragment>
    )
}

// function SquarePhoto(props) {
//     const classes = useStyles();

//     return (
//         // <Box p={2} >
//             <Card className={classes.card}>
//                 <CardMedia
//                     className={classes.squareImage}
//                     image={props.img}
//                 // title={props.title}
//                 />
//             </Card>
//         // </Box>
//     );
// }