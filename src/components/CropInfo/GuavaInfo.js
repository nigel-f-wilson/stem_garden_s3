import React from 'react';

// MY components
import SquarePhotoCard from "../SquarePhotoCard";

// MUI CORE Imports
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


// MY images
// turmeric images
import guavas from "../../images/other_crops/guavas.JPG";
import pineapple_guava from "../../images/flowers/pineapple_guava_flowers.JPG";


const photoSet = [
    {
        img: guavas,
        title: 'Guavas',
        description: ' ',
        gridCols: 6,
        hideTitle: true,
    },  
    {
        img: pineapple_guava,
        title: 'Guava Flowers',
        description: ' ',
        gridCols: 6,
        hideTitle: true,
    },  
];


                

export default function GuavaInfo(props) {
    return (
        <React.Fragment>
            <Typography align='center' color='textPrimary' component='h2' variant='h2'>
                Guava
                </Typography>
            {/* <Typography align='justify' color='textPrimary' component='h2' variant='body1' >
                Guavas give a unique depth to my homegrown fruit smoothies.
                </Typography> */}
            <GuavaPhotoGrid /> 
        </React.Fragment>
    )
}

function GuavaPhotoGrid(props) {
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