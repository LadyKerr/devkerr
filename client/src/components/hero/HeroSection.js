import React from "react";
import { withRouter } from "react-router";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  }
}))

const HeroSection = () => {
     const classes = useStyles();
    return (
        <>
            <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
             Kedasha Kerr
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Full-stack Software Engineer who enjoys working in teams that value collaboration, communication and professional integrity.
              Current Tech Stack: JavaScript | React | Redux | Node.Js | Express.Js
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                   View Projects
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
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