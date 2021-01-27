import React from 'react';

// MY components
import SquarePhotoCard from "../SquarePhotoCard";

// MUI CORE Imports
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


// MY images
// turmeric images
import turmeric_flower from "../../images/turmeric/turmeric_flower.JPG";
import turmeric_replanting from "../../images/turmeric/turmeric_replanting.JPG";
import turmeric_leaves from "../../images/turmeric/turmeric_leaves.JPG";
import turmeric_harvest from "../../images/turmeric/turmeric_harvest.JPG";


const photoSet = [
    {
        img: turmeric_harvest,
        title: 'Turmeric rhizomes',
        description: 'Two freshly harvested bunches',
        gridCols: 12,
        hideTitle: true,
    }, {
        img: turmeric_flower,
        title: 'Turmeric Flower',
        description: '',
        gridCols: 6,
        hideTitle: true,
    }, {
        img: turmeric_replanting,
        title: 'Turmeric freshly planted',
        description: '',
        gridCols: 6,
        hideTitle: true,
    },
];


export default function TurmericInfo(props) {
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

function TurmericPhotoGrid(props) {
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