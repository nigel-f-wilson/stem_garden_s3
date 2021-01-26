import React from 'react';
import PropTypes from 'prop-types';


// MY components
import Navbar from "../components/Navbar/Navbar";
import SquarePhotoCard from "../components/SquarePhotoCard";
import WildlifePhotoGrid from "../components/CropInfo/WildlifePhotoGrid";
import BananaInfo from "../components/CropInfo/BananaInfo";
import PapayaPhotoGrid from "../components/CropInfo/PapayaPhotoGrid";
import TurmericPhotoGrid from "../components/CropInfo/TurmericPhotoGrid";
import LimePhotoGrid from "../components/CropInfo/LimePhotoGrid";
import LoquatPhotoGrid from "../components/CropInfo/LoquatPhotoGrid";
import FigPhotoGrid from "../components/CropInfo/FigPhotoGrid";
import GuavaPhotoGrid from "../components/CropInfo/GuavaPhotoGrid";


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
                <Typography align='center' color='textPrimary' component='h2' variant='h2'>
                    Papaya
                </Typography>
                <Typography align='justify' color='textPrimary' component='h2' variant='body1' >
                    I didn't come to enjoy eating papaya until I grew them myself. Most papaya sold at grocery stores are picked prematurely to
                    improve shelf-life but as a result they never ripen properly. I usually leave the fruits on the trees until one or two days 
                    before they are ready to eat. This way they get much sweeter and develop a interesting flavor. 
                    Papaya is a key ingredient in my homegrown fruit smoothies. I sell papaya green, ripe, or frozen.
                </Typography>
                <PapayaPhotoGrid />
            </Grid>

            <Grid item xs={12} md={6}>
                <Typography align='center' color='textPrimary' component='h2' variant='h2'>
                    Turmeric
                </Typography>
                <Typography align='justify' color='textPrimary' component='h2' variant='body1' >
                    I started growing a lot of turmeric when I decided that I wanted the STEM Garden to require less maintenance while still producing valuable crops. 
                    Turmeric is very happy in New Orleans' climate, especially in our light, well-drained soil. Its broad leaves help shade out 
                    weeds and other competition. Unlike the fruits we grow, which need picked daily when they are in season, turmeric only 
                    requires hands on work a few days out of the year. It keeps very well if it is dug up in the dry season, so each October 
                    I dig up all the turmeric, break the big root clusters into little pieces and replant some portion of them the same day. 
                    The roots that are not replanted sell for up to $20 per pound.
                </Typography>
                <TurmericPhotoGrid />
            </Grid>
            
            <Grid item xs={12} md={6}>
                <Typography align='center' color='textPrimary' component='h2' variant='h2'>
                    Loquat
                </Typography>
                <Typography align='justify' color='textPrimary' component='h2' variant='body1' >
                    Also known as Misbeliefs or Japanese plums.
                </Typography>
                <LoquatPhotoGrid />
            </Grid>

            <Grid item xs={12} md={6}>
                <Typography align='center' color='textPrimary' component='h2' variant='h2'>
                    Limes
                </Typography>
                <Typography align='justify' color='textPrimary' component='h2' variant='body1' >
                    Other citrus varieties coming soon!
                </Typography>
                <LimePhotoGrid />
            </Grid>

            <Grid item xs={12} md={6}>
                <Typography align='center' color='textPrimary' component='h2' variant='h2'>
                    Figs
                </Typography>
                <Typography align='justify' color='textPrimary' component='h2' variant='body1' >
                    We sell fruit and rooted cuttings in case you want to grow your own.
                </Typography>
                <FigPhotoGrid />
            </Grid>

            <Grid item xs={12} md={6}>
                <Typography align='center' color='textPrimary' component='h2' variant='h2'>
                    Guava
                </Typography>
                <Typography align='justify' color='textPrimary' component='h2' variant='body1' >
                    Also known as Misbeliefs and Japanese plums.
                </Typography>
                <GuavaPhotoGrid />
            </Grid>

            <Typography align='center' color='textPrimary' component='h1' variant='h1'>
                What's Growing?
            </Typography>
            <Typography align='justify' color='textPrimary' component='h2' variant='body1' >
                I got into gardening inspired by my early experiences foraging for wild edibles and
                my garden still shows many signs of this influence.  While certain crops are planted in neat rows
                and managed carefully, many other species are naturalized here and are allowed to grow wherever they
                volunteer. Because of this approach, a walk around the garden always has a surprize in store!
                The garden produces lots to eat, but productivity is never the top priority. My focus is always
                on improving soil health, creating wildlife habitat, and increasing bio-diversity.
                </Typography>
            {/* <PhotoGrid data={photoSetOne} /> */}


            


            <Typography align='center' color='textPrimary' component='h2' variant='h2'>
                Papaya
                </Typography>
            <Typography align='justify' color='textPrimary' component='h2' variant='body1' >
                I didn't come to enjoy eating papaya until I grew them myself. Most papaya sold at grocery stores never ripen properly because they are picked prematurely to
                improve shelflife. I usually leave the fruits on the trees until one or two days before they are ready to eat and this way they get much sweeter and more
                interesting flavor. Papaya is a key ingredient in my homegrown fruit smoothies. I sell papaya green, ripe, or frozen.
                </Typography>
            {/* <PhotoGrid data={photoSetPapaya} /> */}



            <Typography align='center' color='textPrimary' component='h2' variant='h2'>
                Turmeric
                </Typography>
            <Typography align='justify' color='textPrimary' component='h2' variant='body1' >
                I started growing a lot of turmeric when I decided that I wanted the STEM Garden to require less maintenance while still producing valuable crops.
                Turmeric is very happy in New Orleans' climate, especially in our soft airy soil. Its broad leaves help shade out weeds and other competition.
                Unlike all the fruits we grow, which need picked regularly when they are in season, turmeric only requires hands on work a few days out of the year.
                It keeps very well if it is dug up in the dry season, so each October I dig up all the turmeric, break the big root clusters into little pieces and replant
                some portion of them the same day. The roots that are kept sell for up to $20 per pound, whereas banana and papaya sell for less than $2 per pound.
                </Typography>
            {/* <PhotoGrid data={photoSetTurmeric} /> */}



            <Typography align='center' color='textPrimary' component='h2' variant='h2'>
                Other Crops
                </Typography>
            <Typography align='justify' color='textPrimary' component='h2' variant='body1' >
                Besides banana, papaya, and turmeric there are dozens of other plants that are grown here for thier beauty, for personal consumption, and for sharing
                with friends and neighbors. One of the things that got me into gardening was the realization that food is better when the distance between the plant
                and the kitchen is minimized. Not only are homegrown tomatoes free, they are immesurably better than any tomato that has been shipped in from another
                state and made to wait around on a grocery store shelf. While I don't grow all my own food, I do eat something I grew everyday. Meal preparation always
                starts with a walk around the garden to see what needs to get used.
                </Typography>
            {/* <PhotoGrid data={photoSetOtherCrops} /> */}



            <Typography align='center' color='textPrimary' component='h2' variant='h2'>
                Flowers
                </Typography>
            <Typography align='justify' color='textPrimary' component='h2' variant='body1' >
                I prefer to grow food and don't put a lot of energy into growing plants that are only ornamental, but there are many food bearing plants that also have
                beautiful flowers. Some plants I grow primarily for their flowers as a way to attract pollinators.
                </Typography>
            {/* <PhotoGrid data={photoSetFlowers} /> */}


            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Availability
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                Due to the extremely hand-on nature of my math enrichment lessons they are not offered in an online format.
                I hope to begin offering in-person math enrichment lessons in the garden beginning in March 2021, though this will be depend on the pandemic.
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Topics
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                By Enrichment I mean "All the math they don't teach you in school." I am a jack-of-all-trades and I have applied math to
                improve my own life in countless ways, including in building the classroom that I teach out of and the solar array that powers it.
                My approach to math enrichment focuses on learning math along the way to reaching another goal you care about, rather than learning math on
                the promise that someday down the road you'll find it useful. Enrichment can go any direction you want it to! What do you want to build?
                Here are some favorite trailheads I've used before for enrichment explorations, just to jog your imagination:<br />
                <ul>
                    <li>Explore the physics of sound waves and the mathematical pattern in the way the frets are spaced on the neck of a guitar.</li>
                    <li>Build things! Learn how to design and build stable wooden structures. Work your way up to building a catault and learn geometry and calculus along the way.</li>
                    <li>Master strategy games like Nim, Hex, the 15-Game, and logic puzzles like sudoku and ken-ken. </li>
                    <li>Learn about the off-grid solar power system that supplies the classroom.</li>
                </ul>
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Pricing
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                My hourly rate for one-on-one math enrichment is $30. I charge less for this service than normal tutoring
                because it is more fun and I want to encourage more students to try it out!
            </Typography>

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