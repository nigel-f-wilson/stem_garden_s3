import React from 'react';

// MY components
import SquarePhotoCard from "../SquarePhotoCard";

// MUI CORE Imports
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

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

// The GardenGallery renders a navbar and a layout of pictures and explanatory paragraphs.
// M vs. D layout of pictures is handled using MUI Grid.
export default function FigPhotoGrid(props) {
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