import React from 'react';

// REACT ROUTER
import {
    BrowserRouter as Router,
    Link as RouterLink,
    Route,
    Switch
} from "react-router-dom";

// MY COMPONENTS
import LandingPage from "./pages/Landing";

import TeachPage from "./pages/Teach";
import MathGamesPage from "./pages/MathGames";
import PuzzleCollectionPage from "./pages/PuzzleCollection"

import GardenPage from "./pages/Garden.js";
import GardenStoryPage from "./pages/OurStory";
import AboutMePage from "./pages/AboutMe";
import MyProjectsPage from "./pages/MyProjects";
// import ContactPage from "./pages/Contact";

//  MUI imports
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// import CssBaseline from '@material-ui/core/CssBaseline';


import theme from "./theme";
import {
    makeStyles, 
    ThemeProvider } from '@material-ui/core/styles';

import './App.css';

const useStyles = makeStyles((theme) => ({
    app: {
        
        minHeight: '100vh',
        minWidth: '100vw',

    },
    

}));


// App.js provides the Theme and Routing between pages

export default function App() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Router basename='/'>
                    <Switch>
                        
                        {/* LANDING */}
                        <Route exact path="/">
                            <LandingPage />
                        </Route>

                        {/* TEACHING SERVICES */}
                        <Route path="/teach"
                            component={TeachPage}
                        />
                        {/* <Route path="/teach/:tab"
                            render={(props) => (
                                <TeachPage {...props} />
                            )}
                        /> */}

                        <Route path="/math_games">
                            <MathGamesPage />
                        </Route>

                        <Route path="/puzzle_collection">
                            <PuzzleCollectionPage />
                        </Route> 

                        

                        {/* GARDEN STUFF */}
                        <Route path="/garden" 
                            component={GardenPage}
                        /> 

                        <Route path="/our_story">
                            <GardenStoryPage />
                        </Route> 

                        {/* ABOUT ME */}
                        <Route path="/about_me">
                            <AboutMePage />
                        </Route> 

                        <Route path="/my_projects">
                            <MyProjectsPage />
                            {/* <MathGamesPage /> */}
                        </Route> 

                        {/* <Route path="/contact">
                        <ContactPage />
                        </Route>  */}
                        
                    </Switch>
                </Router>
      
            </ThemeProvider>
        </React.Fragment>
    );
    
}

