import React from "react";
import { withRouter } from "react-router";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
    },
}))

const About = () => {
     const classes = useStyles();

    return (
        <>
            <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography variant="h6" paragraph align="center">
              Hi, I'm Kedasha! I am a full-stack software engineer who enjoys working on cross functional teams.
            When I'm not building with React, you can find me snuggled in a corner reading or listening to my favorite
            podcasts.
            <br />
            Keep scrolling to view some of my projects. I look forward to connecting with you.
            </Typography>
          </Container>
        </div>
     </>
    )
}

export default withRouter(About);