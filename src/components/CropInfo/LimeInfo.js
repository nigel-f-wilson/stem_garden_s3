import React from 'react';

// MY components
import SquarePhotoCard from "../SquarePhotoCard";

// MUI CORE Imports
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


// MY images
// lime images
import lime_harvest from "../../images/other_crops/lime_harvest.JPG";


const photoSet = [
    {
        img: lime_harvest,
        title: 'A pile of fresh picked limes.',
        description: 'A pile of fresh picked limes.',
        gridCols: 12,
        hideTitle: true,
    }, 
];


                
export default function LimeInfo(props) {
    return (
        <React.Fragment>
            <Typography align='center' color='textPrimary' component='h2' variant='h2'>
                Limes
            </Typography>
            <Typography align='justify' color='textPrimary' component='h2' variant='body1' >
                Other citrus varieties coming soon!
            </Typography>
            <LimePhotoGrid />
        </React.Fragment>
    )
}

function LimePhotoGrid(props) {
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