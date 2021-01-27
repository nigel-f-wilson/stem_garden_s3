import React from 'react';

// MY components

import SquarePhotoCard from "../SquarePhotoCard";

// MUI CORE Imports
import Grid from '@material-ui/core/Grid';


// MY images


export default function PhotoGrid(props) {

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