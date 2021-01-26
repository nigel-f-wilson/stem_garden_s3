import React from 'react';
// import '../../App.css';

// React ROUTER
// import { Link as RouterLink } from "react-router-dom";


// MY COMPONENTS
import GardenNavList from "./GardenNavList";

// Image Imports

// MATERIAL-UI COMPONENTS
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';


import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    dropdownButton: {
        color: theme.palette.common.white,
        textTransform: "none",
        textAlign: 'center',
        paddingBottom: '0.5rem',
    },
    dropdownSurface: {
        border: 'solid white 0.1px',
        backgroundColor: theme.palette.primary.main, // Matches Logo Background
    },
}));


export default function GardenDropdown() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        setOpen(false);
    }

    const handleClickAway = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    }

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open])

    return (
        <Box id="aboutTheGardenMenu" >
            <Button
                className={classes.dropdownButton}
                variant="text"
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                <Typography variant="h5">
                    About the<br />Garden
                </Typography>

            </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: 'center top' }}
                    >
                        <Paper className={classes.dropdownSurface}  >
                            <ClickAwayListener onClickAway={handleClickAway}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <GardenNavList
                                        handleClose={handleClose}
                                    />
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Box>
    );
}