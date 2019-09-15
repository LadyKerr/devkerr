import React, { useState } from "react";
import { withRouter } from "react-router";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import projectData from "../../data/project-data";
import "./projects.css";

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}))

const Projects = (props) => {
    const classes = useStyles();
    const projects = projectData;
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
    setExpanded(!expanded);
  }

    return(
        <>
        <Container id="projects" className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {projects.map(project => (
              <Grid item key={project.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={project.projectImage}
                    title="project"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h5">
                      {project.title}
                    </Typography>
                    <Typography>
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button target="_blank" href={project.projectURL} size="small" color="secondary">
                     View Live
                    </Button>
                    <Button target="_blank" href={project.githubRepo} size="small" color="secondary">
                      GitHub Repo
                    </Button>
                    <IconButton
                        className={clsx(classes.expand, {[classes.expandOpen]: expanded,})}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography variant="h7" component="h7">Role:</Typography>
                    <Typography paragraph>
                        {project.role}
                    </Typography>
                    <Typography variant="h7" component="h7">Technologies Used:</Typography>
                    <Typography paragraph>
                        {project.technologies}
                    </Typography>
                    </CardContent>
                </Collapse>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </>
    )
}

export default withRouter(Projects);