import React from 'react';

// React ROUTER
import { Link as RouterLink } from "react-router-dom";



import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

// MATERIAL-UI COMPONENTS

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

// ICONS
import SchoolIcon from '@material-ui/icons/School';
import EcoIcon from '@material-ui/icons/Eco';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles(theme => ({
    list: {
        width: 'inherit',
        // backgroundColor: theme.palette.primary.dark
        backgroundColor: 'inherit'

    },
    listItem: {
        color: theme.palette.common.white,
    },
    icon: {
        width: '45px',
        color: theme.palette.common.white,
        alignContent: 'center',
        justifyContent: 'center',
    }
}));

export default function TeachingServicesList() {
    const classes = useStyles();
    
    return (
        <List className={classes.list}>
            <ListItem
                key={'teaching services'}
                className={classes.listItem}
                button
                component={RouterLink}
                // to='/teach/tutoring_services'
                to='/teach'
            >
                <Icon className={"fas fa-brain fa-2x"}
                    classes={{ root: classes.icon }}
                />
                <ListItemText
                    primary={'Teaching Services'}
                    primaryTypographyProps={{ variant: 'h5' }}
                />
            </ListItem>


            <ListItem
                key={'test prep'}
                className={classes.listItem}
                button
                component={RouterLink}
                // to='/teach/test_prep'
                to='/teach'
            >
                <Icon className={"fas fa-graduation-cap fa-2x"}
                    classes={{ root: classes.icon }}
                />
                <ListItemText 
                    primary={'Test Prep'}
                    primaryTypographyProps={{ variant: 'h5' }}
                />
            </ListItem>

            {/* <ListItem
                key={'stem enrichment'}
                button
                component={RouterLink}
                to='/teach'
            >
                <ListItemIcon className="fas fa-flask fa-2x" />
                <ListItemText 
                    primary={'Stem Enrichment'} 
                    primaryTypographyProps={{ variant: 'h6' }}
                />
            </ListItem> */}

            <ListItem
                key={'chess lessons'}
                className={classes.listItem}
                button
                component={RouterLink}
                // to='/teach/chess'
                to='/teach'
            >
                <Icon className={"fas fa-chess-knight fa-2x"}
                    classes={{ root: classes.icon }}
                />
                <ListItemText 
                    primary={'Chess Lessons'}
                    primaryTypographyProps={{ variant: 'h5' }}
                />
            </ListItem>

            <ListItem
                key={'computer science'}
                className={classes.listItem}
                button
                component={RouterLink}
                to='/program'
                // to='/teach'
            >
                <Icon className="fas fa-laptop-code fa-2x"
                    classes={{ root: classes.icon }}
                />
                <ListItemText 
                    primary={'Computer Science'}
                    primaryTypographyProps={{ variant: 'h5' }}
                />
            </ListItem>



            <ListItem
                key={'math_games'}
                className={classes.listItem}
                button
                component={RouterLink}
                // to='/teach/math_games'
                to='/teach'
            >
                <Icon className="fas fa-dice-six fa-2x"
                    classes={{ root: classes.icon }}
                />
                <ListItemText 
                    primary={'Math Games'}
                    primaryTypographyProps={{ variant: 'h5' }}
                />
            </ListItem>


            <ListItem
                key={'puzzle_collection'}
                className={classes.listItem}
                button
                component={RouterLink}
                // to='/teach/puzzles'
                to='/teach'
            >
                <Icon className="fas fa-puzzle-piece fa-2x"
                    classes={{ root: classes.icon }}
                />
                <ListItemText 
                    primary={'Puzzle Collection'}
                    primaryTypographyProps={{ variant: 'h5' }}
                />
            </ListItem>

            <ListItem
                key={'teaching_philosophy'}
                className={classes.listItem}
                button
                component={RouterLink}
                // to='/teach/philosophy'
                to='/teach'
            >
                <Icon className="fas fa-question fa-2x"
                    classes={{ root: classes.icon }}
                />
                {/* <Icon className="fas fa-question-mark fa-2x"
                    classes={{ root: classes.icon }}
                /> */}
                <ListItemText
                    primary={'Teaching Philosophy'}
                    primaryTypographyProps={{ variant: 'h5' }}
                />
            </ListItem>

        </List>
    );
}