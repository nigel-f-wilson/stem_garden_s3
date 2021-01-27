import React from 'react';

// MY components
import SquarePhotoCard from "../SquarePhotoCard";

// MUI CORE Imports
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


// MY images
// turmeric images
import loquats from "../../images/loquat/loquats.JPG";
import loquat_harvest from "../../images/loquat/loquat_harvest.JPG";
import loquat_blossom from "../../images/loquat/loquat_blossom.JPG";


const photoSet = [
    {
        img: loquat_harvest,
        title: 'loquat_harvest',
        description: ' ',
        gridCols: 12,
        hideTitle: true,
    }, {
        img: loquats,
        title: ' ',
        description: '',
        gridCols: 6,
        hideTitle: true,
    }, {
        img: loquat_blossom,
        title: ' ',
        description: '',
        gridCols: 6,
        hideTitle: true,
    },
];


                
export default function LoquatInfo(props) {
    return (
        <React.Fragment>
            <Typography align='center' color='textPrimary' component='h2' variant='h2'>
                Loquat
            </Typography>
            <Typography align='justify' color='textPrimary' component='h2' variant='body1' >
                Also known as Misbeliefs or Japanese plums.
            </Typography>
            <LoquatPhotoGrid />
        </React.Fragment>
    )
}
function LoquatPhotoGrid(props) {
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