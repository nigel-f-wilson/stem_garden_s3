import React from 'react';

// MY components
import SquarePhotoCard from "../SquarePhotoCard";

// MUI CORE Imports
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


// MY images
// banana images
import dwarf_cavendish_harvest from "../../images/banana/dwarf_cavendish_harvest.JPG";
import banana_papaya_harvest from "../../images/banana/banana_papaya_harvest.JPG";
import banana_flower from "../../images/banana/banana_flower.JPG";
import banana_types from "../../images/banana/banana_types.png"
import banana_papaya_top from "../../images/banana/banana_papaya_top.JPG";
import banana_bunch from "../../images/banana/banana_bunch.JPG"
import holding_banana_bunches from "../../images/banana/holding_banana_bunches.JPG"


const photoSet = [
    {
        img: banana_flower,
        title: 'Banana Flower',
        description: 'Banana flower descending',
        gridCols: 12,
        hideTitle: true,
    }, {
        img: banana_bunch,
        title: 'Banana Flower',
        description: 'Banana flower descending',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: holding_banana_bunches,
        title: 'Banana and Papaya Harvest',
        description: 'Being from Ohio originally I never imagined being able to grow tropical fruits like these outdoors.',
        gridCols: 4,
        hideTitle: true,
    }, 
    {
        img: banana_papaya_top,
        title: 'Banana and Papaya Harvest',
        description: 'Being from Ohio originally I never imagined being able to grow tropical fruits like these outdoors.',
        gridCols: 4,
        hideTitle: true,
    }, 
];


export default function BananaInfo(props) {
    return (
        <React.Fragment>
            <Typography align='center' color='textPrimary' component='h2' variant='h2'>
                Banana
            </Typography>
            <Typography align='justify' color='textPrimary' component='p' variant='body1' >
                The garden is surrounded by a wall of banana "trees", which are technically a type of grass.
                They have no woody parts and the juicy stalks can be easily cut with one machete stroke.
                Cut stalks regrow easily but each stalk will only bear fruit  once, but the root cluster survives
                and is constantly sending up new stalks to replace those that reach maturity and die.
                While blooming, one of the bright red leaves of the "bell" opens each day to reveal a row of flowers that
                will turn into a "hand" of bananas.
            </Typography>
            <BananaPhotoGrid />
        </React.Fragment>
    )
}

function BananaPhotoGrid(props) {
    return (
        <Box my={2}  >
            <Grid container
                spacing={1}
            >
                {photoSet.map((tile) => (
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


function PhotoGrid(props) {

    return (
        <Grid container
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