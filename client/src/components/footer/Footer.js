import React from "react";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
//import socialData from "../../data/social-data";

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
    //const socials = socialData;

    return (
        <>
        <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
         {/* {socials.map(icon => {
             return (
             <img key={icon.id}>
                {icon.icon}
             </img>
             )
         })} */}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Social Icons Here
        </Typography>
        <Copyright />
      </footer>
        </>
    )
}

export default Footer;