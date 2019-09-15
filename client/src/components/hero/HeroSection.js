import React from "react";
import { withRouter } from "react-router";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import "./hero.css";

const useStyles = makeStyles(theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
  heroButtons: {
    marginTop: theme.spacing(4),
  }
}))

const HeroSection = (props) => {
     const classes = useStyles();

    return (
        <>
            <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography id="hero-name" component="h1" variant="h2" align="center" color="textPrimary">
             Kedasha Kerr
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Full-stack Software Engineer
              <br />
              Tech Stack: React | Redux | Node.Js | Express.Js
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button onClick={() => props.history.push("/projects")} variant="contained" color="secondary">
                   View Projects
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="secondary">
                    Contact Me
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
     </>
    )
}

export default withRouter(HeroSection);