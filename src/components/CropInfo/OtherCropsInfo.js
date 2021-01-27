import React from 'react';

// MY components

import SquarePhotoCard from "../SquarePhotoCard";

// MUI CORE Imports
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


// MY images
// other crops images
import tomato_cuke_harvest from "../../images/other_crops/tomato_cuke_harvest.JPG";
import colorful_harvest from "../../images/other_crops/colorful_harvest.JPG";
import lime_harvest from "../../images/other_crops/lime_harvest.JPG";
import loquat_harvest from "../../images/other_crops/loquat_harvest.JPG";
import guavas from "../../images/other_crops/guavas.JPG";
import radishes from "../../images/other_crops/radishes.JPG";



const photoSet = [
    {
        img: tomato_cuke_harvest,
        title: 'Tomato and Cucumber Harvest',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: colorful_harvest,
        title: 'Loquat Harvest',
        description: 'Loquats are often confused with Kumquats but they aren\'t even related! Both are small orange fruits but Kumquats are citrus while Loquats are members of the Pome family and are closer relatives of apples and pears. They are also known as "misbeliefs" because the fruite ripen so early in the spring time it\'s hard to believe',
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



export default function OtherCropsInfo(props) {
    return (
        <React.Fragment>
            <Typography align='center' color='textPrimary' component='h2' variant='h2'>
                Other Veggies
            </Typography>
            <Typography align='justify' color='textPrimary' component='h2' variant='body1' >
                Most of the crops listed on this page come from established trees but we also grow a rotation of 
                seasonal annual veggies including cucumbers, eggplant, zucchini, raddishes, mustard greens, and okra.
            </Typography>
            <PhotoGrid />
        </React.Fragment>
    )
}

function PhotoGrid(props) {
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