import React from 'react';

import clsx from 'clsx';
import { spacing } from '@material-ui/system';


// MY components
import Navbar from "../components/Navbar/Navbar";


// MUI CORE Imports
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    cardImage: {
        height: 0,
        // paddingTop: '56.25%', // 16:9
        // paddingTop: '75%', // 4:3
        paddingTop: '100%', // square
    },
}));

export default function SquarePhotoCard(props) {
    const classes = useStyles();
    
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cardImage}
                image={props.img}
                // title={props.title}
            />
        </Card>
    );
}