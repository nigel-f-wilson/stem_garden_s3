import React from 'react';

// MY components
import SquarePhotoCard from "../SquarePhotoCard";

// MUI CORE Imports
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

// MY images
// papaya images
import papaya_flower from "../../images/papaya/papaya_flower.JPG";
import papaya_trees from "../../images/papaya/papaya_trees.JPG";
import papaya_leaf from "../../images/papaya/papaya_leaf.jpg";
import papaya_halved from "../../images/papaya/papaya_halved.JPG";
import papaya_picking from "../../images/papaya/papaya_picking.JPG";
import papaya_pile from "../../images/papaya/papaya_pile.JPG";
import papaya_fruit from "../../images/papaya/papaya_fruit.JPG";


const photoSet = [
    {
        img: papaya_halved,
        title: 'Ripe papaya halved',
        description: 'Ripe papaya halved',
        gridCols: 12,
        hideTitle: true,
    }, {
        img: papaya_trees,
        title: 'Papaya Halved',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: papaya_pile,
        title: 'Banana and Papaya Harvest',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: papaya_flower,
        title: 'Dwarf Cavendish Banana Harvest',
        description: 'We grow two varieties of banana: Burro and Dwarf Cavendish.',
        gridCols: 4,
        hideTitle: true,
    }, 
];

// The GardenGallery renders a navbar and a layout of pictures and explanatory paragraphs.
// M vs. D layout of pictures is handled using MUI Grid.
export default function PapayaPhotoGrid(props) {
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