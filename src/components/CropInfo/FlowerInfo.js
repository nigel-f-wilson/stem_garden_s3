import React from 'react';

// MY components

import SquarePhotoCard from "../SquarePhotoCard";

// MUI CORE Imports
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


// MY images
// flowers images
import passionflower        from "../../images/flowers/passion_flower.jpg";
import sunflower            from "../../images/flowers/sunflower.JPG";
import hibiscus_flower      from "../../images/flowers/hibiscus_flower.JPG";
import loquat_blossom       from "../../images/flowers/loquat_blossom.JPG";
import pineapple_guava      from "../../images/flowers/pineapple_guava_flowers.JPG";
import pomegranite_flower   from "../../images/flowers/pomegranite_flower.JPG";
import tobacco_flower       from "../../images/flowers/tobacco_flower.JPG";
import yarrow_flower        from "../../images/flowers/yarrow_flower.JPG";
import zinnia_teapot        from "../../images/flowers/zinnia_teapot.JPG";
import jasmine_flower       from "../../images/flowers/jasmine_flower.JPG";
import redbud_flower        from "../../images/flowers/redbud_flower.JPG";
import shell_ginger         from "../../images/flowers/shell_ginger.JPG";


const photoSet = [
    {
        img: passionflower,
        title: 'Passionflower',
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
        img: jasmine_flower,
        title: 'Jasmine Flowers',
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



export default function FlowerInfo(props) {
    return (
        <React.Fragment>
            <Typography align='center' color='textPrimary' component='h2' variant='h2'>
                Flowers
            </Typography>
            <Typography align='justify' color='textPrimary' component='h2' variant='body1' >
                I prefer to grow food and don't put a lot of energy into growing ornamental plants.
                That said, there are many food producing plants that also have beautiful flowers. 
                Some plants I grow primarily for their flowers as a way to attract pollinators. 
            </Typography>
            <FlowerPhotoGrid />
        </React.Fragment>
    )
}

function FlowerPhotoGrid(props) {
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