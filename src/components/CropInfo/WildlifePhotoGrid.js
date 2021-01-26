import React from 'react';

import clsx from 'clsx';

// MY components
import SquarePhotoCard from "../SquarePhotoCard";

// MUI CORE Imports
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


// MY images
// wildlife images
import gulf_fritilary from "../../images/wildlife/gulf_fritilary.JPG";
import fritilary_caterpillars from "../../images/wildlife/fritilary_caterpillars.JPG";
import frogs_on_shell_ginger from "../../images/wildlife/frogs_on_shell_ginger.JPG";
import lizard from "../../images/wildlife/lizard.JPG";
import frog_on_banana_stalk from "../../images/wildlife/frog_on_banana_stalk.JPG";
import tiger_swallowtail from "../../images/wildlife/tiger_swallowtail_on_dill.JPG";


import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    
    // cardImage: {
    //     height: 0,
    //     // paddingTop: '56.25%', // 16:9
    //     // paddingTop: '75%', // 4:3
    //     paddingTop: '100%', // square
    // },
    
}));



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


// The GardenGallery renders a navbar and a layout of pictures and explanatory paragraphs.
// M vs. D layout of pictures is handled using MUI Grid.
export default function WildlifePhotoGrid(props) {
    const classes = useStyles();
    return (
        <Box my={2} className={classes.root}  >
            <Grid container
                className={classes.gridContainer}
                id='grid'
                spacing={2}
            >
                {photoSetWildlife.map((tile) => (
                    <Grid item xs={12} sm={tile.gridCols}
                        key={tile.img}
                    >
                        <SquarePhotoCard img={tile.img} />

                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}



// function SquarePhotoCard(props) {
//     const classes = useStyles();

//     return (
//         <Card className={classes.card}>
//             <CardMedia
//                 image={props.tileData.img}
//             />
//         </Card>
//     );
// }