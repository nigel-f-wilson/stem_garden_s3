import React from 'react';

import clsx from 'clsx';
import { spacing } from '@material-ui/system';


// MY components
import Navbar from "../components/Navbar/Navbar";


// MUI CORE Imports
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


// MY images

// header images
import banana_papaya_top    from "../images/garden_gallery/header/banana_papaya_top.JPG"

// banana images
import holding_banana_bunches   from "../images/garden_gallery/banana/holding_banana_bunches.JPG"
import dwarf_cavendish_harvest  from "../images/garden_gallery/banana/dwarf_cavendish_harvest.JPG";
import banana_flower            from "../images/garden_gallery/banana/banana_flower.JPG";
import banana_types             from "../images/garden_gallery/banana/banana_types.png"
import banana_leaf              from "../images/garden_gallery/banana/banana_leaf.jpg"

// papaya images
import papaya_flower        from "../images/garden_gallery/papaya/papaya_flower.JPG";
import papaya_trees         from "../images/garden_gallery/papaya/papaya_trees.JPG";
import papaya_leaf          from "../images/garden_gallery/papaya/papaya_leaf.jpg";
import papaya_halved        from "../images/garden_gallery/papaya/papaya_halved.JPG";
import papaya_picking       from "../images/garden_gallery/papaya/papaya_picking.JPG";
import papaya_pile          from "../images/garden_gallery/papaya/papaya_pile.JPG";
import papaya_fruit         from "../images/garden_gallery/papaya/papaya_fruit.JPG";

// turmeric images
import turmeric_flower  from "../images/garden_gallery/turmeric/turmeric_flower.JPG";
import turmeric_root    from "../images/garden_gallery/turmeric/turmeric_root.JPG";
import turmeric_leaves  from "../images/garden_gallery/turmeric/turmeric_leaves.JPG";

// other crops images
import tomato_cuke_harvest  from "../images/garden_gallery/other_crops/tomato_cuke_harvest.JPG";
import fig_harvest          from "../images/garden_gallery/other_crops/fig_harvest.JPG";
import lime_harvest         from "../images/garden_gallery/other_crops/lime_harvest.JPG";
import loquat_harvest       from "../images/garden_gallery/other_crops/loquat_harvest.JPG";
import guavas               from "../images/garden_gallery/other_crops/guavas.JPG";
import radishes             from "../images/garden_gallery/other_crops/radishes.JPG";


// flowers images
import passionflower        from "../images/garden_gallery/flowers/passion_flower.jpg";
import sunflower from "../images/garden_gallery/flowers/sunflower.JPG";
import hibiscus_flower      from "../images/garden_gallery/flowers/hibiscus_flower.JPG";
import loquat_blossom       from "../images/garden_gallery/flowers/loquat_blossom.JPG";
import pineapple_guava      from "../images/garden_gallery/flowers/pineapple_guava_flowers.JPG";
import pomegranite_flower   from "../images/garden_gallery/flowers/pomegranite_flower.JPG";
import tobacco_flower       from "../images/garden_gallery/flowers/tobacco_flower.JPG";
import yarrow_flower        from "../images/garden_gallery/flowers/yarrow_flower.JPG";
import zinnia_teapot        from "../images/garden_gallery/flowers/zinnia_teapot.JPG";
import jasmine_flower       from "../images/garden_gallery/flowers/jasmine_flower.JPG";
import redbud_flower        from "../images/garden_gallery/flowers/redbud_flower.JPG";
import shell_ginger         from "../images/garden_gallery/flowers/shell_ginger.JPG";



// wildlife images
import gulf_fritilary from "../images/garden_gallery/wildlife/gulf_fritilary.JPG";
import fritilary_caterpillars from "../images/garden_gallery/wildlife/fritilary_caterpillars.JPG";
import frogs_on_shell_ginger from "../images/garden_gallery/wildlife/frogs_on_shell_ginger.JPG";
import lizard from "../images/garden_gallery/wildlife/lizard.JPG";
import frog_on_banana_stalk from "../images/garden_gallery/wildlife/frog_on_banana_stalk.JPG";
import tiger_swallowtail from "../images/garden_gallery/wildlife/tiger_swallowtail_on_dill.JPG";

// early days images
import mattresses from "../images/garden_gallery/early_days/mattresses.JPG";
import trash_in_dirt from "../images/garden_gallery/early_days/trash_in_dirt.JPG";
import street_view_before from "../images/garden_gallery/early_days/street_view_before.png";
import trashed_lot from "../images/garden_gallery/early_days/trashed_lot.JPG";


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
        // border: 'solid red 2px',
        height: 'auto',
        minHeight: '100vh',
        backgroundColor: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0.0rem 3.0rem',

    },
    titleText: {
        color: theme.palette.common.white,
        padding: '4.0rem',
    },
    subtitleText: {
        color: theme.palette.common.white,
        padding: '2.0rem 4.0rem',
    },
    body: {
        color: theme.palette.common.white,
        padding: '0.0rem 0.0rem',
        paddingBottom: '1.5rem',
        // maxWidth: '640px'
    },
    
    grid: {
        border: 'solid blue 1px',
        height: 'auto',
        width: '100%',
    },
    card: {
        // maxWidth: 345,
    },
    cardImage: {
        height: 0,
        // paddingTop: '56.25%', // 16:9
        // paddingTop: '75%', // 4:3
        paddingTop: '100%', // square
    },
    cardCaption: {
        // backgroundColor: theme.palette.common.black
        padding: '0 16px',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));


const photoSetOne = [
    {
        img: passionflower,
        title: 'Passion Flower',
        description: '',
        gridCols: 4,
        hideTitle: true,
    },
    {
        img: lime_harvest,
        title: 'Persian Limes',
        description: '',
        gridCols: 4,
        hideTitle: true,
    },
    {
        img: tomato_cuke_harvest,
        title: 'Spring Harvest',
        description: '',
        gridCols: 4, 
        hideTitle: true,
    },
    {
        img: banana_papaya_top,
        title: 'Banana & Papaya Harvest',
        description: 'Being from Ohio originally I am perpetually thrilled to be able to grow tropical fruits like these outdoors. Technically, neither of these fruits comes from a tree even though we call them bannana trees and papaya trees. They are not woody plants and they cannot withstand a frost. For the past two years the temperature has not dropped below freezing in New Orleans.',
        gridCols: 4,
        hideTitle: true,
    },
    {
        img: gulf_fritilary,
        title: 'Gulf Fritilary',
        description: '',
        gridCols: 4,
        hideTitle: true,
    },
    {
        img: sunflower,
        title: 'Sunflower Blossom',
        description: '',
        gridCols: 4,
        hideTitle: true,
    },
];

const photoSetBanana = [
    {
        img: banana_flower,
        title: 'Banana Flower',
        description: 'Banana flower descending',
        gridCols: 6,
        hideTitle: true,
    }, {
        img: banana_types,
        title: 'Banana and Papaya Harvest',
        description: 'Being from Ohio originally I am perpetually thrilled to be able to grow tropical fruits like these outdoors. Technically, neither of these fruits comes from a tree even though we call them bannana trees and papaya trees. They are not woody plants and they cannot withstand a frost. For the past two years the temperature has not dropped below freezing in New Orleans.',
        gridCols: 6,
        hideTitle: true,
    }, {
        img: holding_banana_bunches,
        title: 'Holding Up Two Banana Bunches',
        description: 'Two freshly harvested bunches',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: dwarf_cavendish_harvest,
        title: 'Dwarf Cavendish Banana Harvest',
        description: 'We grow two varieties of banana: Burro and Dwarf Cavendish.',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: banana_leaf,
        title: 'Banana and Papaya Harvest',
        description: 'Being from Ohio originally I am perpetually thrilled to be able to grow tropical fruits like these outdoors. Technically, neither of these fruits comes from a tree even though we call them bannana trees and papaya trees. They are not woody plants and they cannot withstand a frost. For the past two years the temperature has not dropped below freezing in New Orleans.',
        gridCols: 4,
        hideTitle: true,
    }, 
];

const photoSetPapaya = [
    {
        img: papaya_trees,
        title: 'Papaya Halved',
        description: '',
        gridCols: 6,
        hideTitle: true,
    }, {
        img: papaya_pile,
        title: 'Banana and Papaya Harvest',
        description: '',
        gridCols: 6,
        hideTitle: true,
    }, {
        img: papaya_halved,
        title: 'Holding Up Two Banana Bunches',
        description: 'Two freshly harvested bunches',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: papaya_flower,
        title: 'Dwarf Cavendish Banana Harvest',
        description: 'We grow two varieties of banana: Burro and Dwarf Cavendish.',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: papaya_leaf,
        title: 'Banana and Papaya Harvest',
        description: 'Being from Ohio originally I am perpetually thrilled to be able to grow tropical fruits like these outdoors. Technically, neither of these fruits comes from a tree even though we call them bannana trees and papaya trees. They are not woody plants and they cannot withstand a frost. For the past two years the temperature has not dropped below freezing in New Orleans.',
        gridCols: 4,
        hideTitle: true,
    },
];

const photoSetTurmeric = [
    {
        img: turmeric_leaves,
        title: 'Holding Up Two Banana Bunches',
        description: 'Two freshly harvested bunches',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: turmeric_flower,
        title: 'Dwarf Cavendish Banana Harvest',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: turmeric_root,
        title: 'Turmeric rhizomes',
        description: '',
        gridCols: 4,
        hideTitle: true,
    },
];
const photoSetOtherCrops = [
    {
        img: tomato_cuke_harvest,
        title: 'Tomato and Cucumber Harvest',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: fig_harvest,
        title: 'Fig Harvest',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: lime_harvest,
        title: 'Lime Harvest',
        description: 'In 2020, this 3 year old tree produced over 150 limes! I can\'t wait to see what next year brings',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: loquat_harvest,
        title: 'Loquat Harvest',
        description: 'Loquats are often confused with Kumquats but they aren\'t even related! Both are small orange fruits but Kumquats are citrus while Loquats are members of the Pome family and are closer relatives of apples and pears. They are also known as "misbeliefs" because the fruite ripen so early in the spring time it\'s hard to believe',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: guavas,
        title: 'Guavas',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: radishes,
        title: 'White Icicle Ladyfinger Radishes',
        description: '',
        gridCols: 4,
        hideTitle: true,
    },
];
const photoSetFlowers = [
    {
        img: passionflower,
        title: 'Passionflower',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: hibiscus_flower,
        title: 'Hibiscus Blossom',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: sunflower,
        title: 'Sunflower',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: loquat_blossom,
        title: 'Loquat Blossom',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: pineapple_guava,
        title: 'Pineapple Guava Flowers',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: pomegranite_flower,
        title: 'Pomegranite Flower',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: tobacco_flower,
        title: 'Tobacco Flowers',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: yarrow_flower,
        title: 'Yarrow Flowers',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: zinnia_teapot,
        title: 'Zinnias in a Teapot',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: jasmine_flower,
        title: 'Jasmine Flowers',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: redbud_flower,
        title: 'Redbud Tree Blossom',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: shell_ginger,
        title: 'Shell Ginger Flower',
        description: '',
        gridCols: 4,
        hideTitle: true,
    },
];
const photoSetWildlife = [
    {
        img: fritilary_caterpillars,
        title: 'Gulf Fritilary Caterpillars eating Passionflower leaves',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: gulf_fritilary,
        title: 'Gulf Fritilary butterfly emergin from chrysalis',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: lizard,
        title: 'Anole lizzard',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: frog_on_banana_stalk,
        title: 'Frog on the trunk of a banana tree',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: frogs_on_shell_ginger,
        title: 'Frogs inside an unfurling ginger leaf.',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: tiger_swallowtail,
        title: 'Tiger Swallowtail caterpillar eating dill.',
        description: '',
        gridCols: 4,
        hideTitle: true,
    },
];
const photoSetEarlyDays = [
    {
        img: mattresses,
        title: 'Mattresses and other debris removed from the STEM Garden in the first week.',
        description: '',
        gridCols: 6,
        hideTitle: true,
    }, {
        img: trash_in_dirt,
        title: 'Trash in the dirt when the STEM Garden was just starting.',
        description: '',
        gridCols: 6,
        hideTitle: true,
    }, {
        img: trashed_lot,
        title: 'Mattresses and other debris removed from the STEM Garden in the first week.',
        description: '',
        gridCols: 6,
        hideTitle: true,
    }, {
        img: street_view_before,
        title: 'Google Streetview image from 2013.',
        description: '',
        gridCols: 6,
        hideTitle: true,
    },
];

// The GardenGallery renders a navbar and a layout of pictures and explanatory paragraphs.
// M vs. D layout of pictures is handled using MUI Grid.
export default function GardenGalleryPage(props) {
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
        <Box className={classes.root}>
            <Container className={classes.container} maxWidth='md' disableGutters>
                <Typography className={classes.titleText} align='center' color='textPrimary' component='h1' variant='h1'>
                    What's Growing?
                </Typography>
                <Typography className={classes.body} align='justify' color='textPrimary' component='h2' variant='body1' >
                    I got into gardening inspired by my early experiences foraging for wild edibles and
                    my garden still shows many signs of this influence.  While certain crops are planted in neat rows 
                    and managed carefully, many other species are naturalized here and are allowed to grow wherever they 
                    volunteer. Because of this approach, a walk around the garden always has a surprize in store!
                    The garden produces lots to eat, but productivity is never the top priority. My focus is always 
                    on improving soil health, creating wildlife habitat, and increasing bio-diversity.
                </Typography>
                <PhotoGrid data={photoSetOne} />
                

                <Typography className={classes.subtitleText} align='center' color='textPrimary' component='h2' variant='h2'>
                    Banana
                </Typography>
                <Typography className={classes.body} align='justify' color='textPrimary' component='h2' variant='body1' >
                    The sides of the garden that face the street are lined with a thick wall of banana "trees", which technically are a type of grass.
                    They have no woody parts, are extremely watery, and even the widest of stalks can be chopped with a single machete stroke.
                    Each stalk will bear fruit only once and then rot, but the root cluster survives and is constantly sending up new stalks to replace those that reach maturity.
                    Each day one of the bright red leaves of the "bell" opens to reveal a row of flowers that will turn into a "hand" of bananas. 
                </Typography>
                <PhotoGrid data={photoSetBanana} />



                <Typography className={classes.subtitleText} align='center' color='textPrimary' component='h2' variant='h2'>
                    Papaya
                </Typography>
                <Typography className={classes.body} align='justify' color='textPrimary' component='h2' variant='body1' >
                    I didn't come to enjoy eating papaya until I grew them myself. Most papaya sold at grocery stores never ripen properly because they are picked prematurely to
                    improve shelflife. I usually leave the fruits on the trees until one or two days before they are ready to eat and this way they get much sweeter and more 
                    interesting flavor. Papaya is a key ingredient in my homegrown fruit smoothies. I sell papaya green, ripe, or frozen.
                </Typography>
                <PhotoGrid data={photoSetPapaya} />



                <Typography className={classes.subtitleText} align='center' color='textPrimary' component='h2' variant='h2'>
                    Turmeric
                </Typography>
                <Typography className={classes.body} align='justify' color='textPrimary' component='h2' variant='body1' >
                    I started growing a lot of turmeric when I decided that I wanted the STEM Garden to require less maintenance while still producing valuable crops. 
                    Turmeric is very happy in New Orleans' climate, especially in our soft airy soil. Its broad leaves help shade out weeds and other competition. 
                    Unlike all the fruits we grow, which need picked regularly when they are in season, turmeric only requires hands on work a few days out of the year.
                    It keeps very well if it is dug up in the dry season, so each October I dig up all the turmeric, break the big root clusters into little pieces and replant 
                    some portion of them the same day. The roots that are kept sell for up to $20 per pound, whereas banana and papaya sell for less than $2 per pound.
                </Typography>
                <PhotoGrid data={photoSetTurmeric} />



                <Typography className={classes.subtitleText} align='center' color='textPrimary' component='h2' variant='h2'>
                    Other Crops
                </Typography>
                <Typography className={classes.body} align='justify' color='textPrimary' component='h2' variant='body1' >
                    Besides banana, papaya, and turmeric there are dozens of other plants that are grown here for thier beauty, for personal consumption, and for sharing 
                    with friends and neighbors. One of the things that got me into gardening was the realization that food is better when the distance between the plant 
                    and the kitchen is minimized. Not only are homegrown tomatoes free, they are immesurably better than any tomato that has been shipped in from another 
                    state and made to wait around on a grocery store shelf. While I don't grow all my own food, I do eat something I grew everyday. Meal preparation always 
                    starts with a walk around the garden to see what needs to get used.
                </Typography>
                <PhotoGrid data={photoSetOtherCrops} />



                <Typography className={classes.subtitleText} align='center' color='textPrimary' component='h2' variant='h2'>
                    Flowers
                </Typography>
                <Typography className={classes.body} align='justify' color='textPrimary' component='h2' variant='body1' >
                    I prefer to grow food and don't put a lot of energy into growing plants that are only ornamental, but there are many food bearing plants that also have  
                    beautiful flowers. Some plants I grow primarily for their flowers as a way to attract pollinators.  
                </Typography>
                <PhotoGrid data={photoSetFlowers} />


                <Typography className={classes.subtitleText} align='center' color='textPrimary' component='h2' variant='h2'>
                    Wildlife
                </Typography>
                <Typography className={classes.body} align='justify' color='textPrimary' component='h2' variant='body1' >
                    The STEM Garden is home to countless frogs, toads, and lizards that help me by eating the bugs that would have eaten my plants. I have even seen speckled
                    kingsnakes and herons. The presence of top predators like these is a great sign that there is good balance on the lower rungs of the food chain. When the
                    garden was first getting started there were a lot of rats but as this urban micro-ecosystem has matured there have been fewer rats and more squirrels and opossum.
                    I don't do anything to encourage this wildlife to be here beside create a safe habitat.
                </Typography>
                <PhotoGrid data={photoSetWildlife} />
                
                
                <Typography className={classes.subtitleText} align='center' color='textPrimary' component='h2' variant='h2'>
                    Early Days
                </Typography>
                <Typography className={classes.body} align='justify' color='textPrimary' component='h2' variant='body1' >
                    Established in 2016, the STEM Garden started as a blighted lot in the St.Claude neighborhood of New Orleans that was so overgrown and covered in trash that I was 
                    able to buy it at auction for less than the price of one year's rent. When I first started cleaning up the land I was living in my van. I built a toolshed the first 
                    year, and after that two tiny houses on trailers which are known as the "Tearoom" and the "Classroom". In order to remediate pollutants in the topsoil I brought in 
                    and composted 350 cubic yards of horse manure, grass clippings, and leaves. That's enough to cover the entire property in an 18-inch thick layer of organic matter 
                    before it all decomposed!
                </Typography>
                <PhotoGrid data={photoSetEarlyDays} />
                
                <Box py={8}  >
                    PAGE BOTTOM SPACER BOX
                </Box>
            </Container>
        </Box>
    )
}

function PhotoGrid(props) {
    const classes = useStyles();

    return (
        <Grid container
            className={classes.gridContainer}
            id='grid'
            spacing={2}
        >
            {props.data.map((tile) => (
                <Grid item xs={12} sm={tile.gridCols} 
                    key={tile.img}
                >
                    <SquarePhotoCard tileData={tile} />
                    
                </Grid>
            ))}
        </Grid>
    );
}


function SquarePhotoCard(props) {
    const classes = useStyles();
    const title = props.tileData.title;

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const cardActions = (
        <React.Fragment>
            <CardActions disableSpacing className={classes.cardCaption}>
                <Typography variant="body1" color="textPrimary">
                    {props.tileData.title}
                </Typography>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {props.tileData.description}
                    </Typography>
                </CardContent>
            </Collapse>
        </React.Fragment>);
    
    
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cardImage}
                image={props.tileData.img}
                title={props.tileData.title}
            />

            {(props.tileData.hideTitle === true) ? '': [cardActions]}
            
        </Card>
    );
}