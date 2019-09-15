import React from "react";
import { withRouter } from "react-router";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import socialData from "../../data/social-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
     const socials = socialData;

    return (
        <>
            <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography id="hero-name" component="h1" variant="h2" align="center" color="textPrimary">
             Kedasha Kerr
            </Typography>
            <Typography variant="subtitle1" align="center" color="secondary" component="p">
          {socials.map(social => (
              <div key={social.id} className="social-icons">
                <a target="_blank" rel="noopener noreferrer" href={social.profileURL} className="social-icons"> <FontAwesomeIcon icon={social.icon} /> </a>
              </div>
          ))}
        </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Full-Stack Software Engineer
              <br />
              React | Redux | Node.Js | Express.Js
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