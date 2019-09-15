import React from "react";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import socialData from "../../data/social-data";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Kedasha Kerr
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
    footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  }
}))

const Footer = () => {
    const classes = useStyles();
    const socials = socialData;

    return (
        <>
        <footer className={classes.footer}>
         {/* {socials.map(icon => (
             <Button>
                {icon.icon}
             </Button>
         ))} */}
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Social Icons Here
        </Typography>
        <Copyright />
      </footer>
        </>
    )
}

export default Footer;