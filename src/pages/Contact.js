import React from 'react';

// MY images
// import chessclub from "../../images/chessclub2.JPG";
// import classroom from "../../images/classroom.JPG";

// MUI Imports
import Container from '@material-ui/core/Container';

import Card from '@material-ui/core/Card';

import Button from '@material-ui/core/Button';



import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    
}));


export default function EnrichmentPage(props) {
    const classes = useStyles();

    return (
        <Container 
            className={classes.body} 
            maxWidth="md"
            p={2}
        >
            the Contact Page
            
        </Container>
        
    )

}