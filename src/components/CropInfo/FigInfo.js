import React from 'react';

// MY components
import SquarePhotoCard from "../SquarePhotoCard";

// MUI CORE Imports
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


// MY images
import fig_harvest from "../../images/fig/fig_harvest.JPG";
import fig_tree from "../../images/fig/fig_tree.JPG";

const photoSet = [
    {
        img: fig_harvest,
        title: 'Ripe figs',
        description: '',
        gridCols: 6,
        hideTitle: true,
    }, {
        img: fig_tree,
        title: 'fig tree',
        description: '',
        gridCols: 6,
        hideTitle: true,
    }, 
];



export default function FigInfo(props) {
    return (
        <React.Fragment>
            <Typography align='center' color='textPrimary' component='h2' variant='h2'>
                Figs
            </Typography>
            <Typography align='justify' color='textPrimary' component='h2' variant='body1' >
                We sell fruit and rooted cuttings in case you want to grow your own.
            </Typography>
            <FigPhotoGrid />
        </React.Fragment>
    )
}

function FigPhotoGrid(props) {
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
    );
}