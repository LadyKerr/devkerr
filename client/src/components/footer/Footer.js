import React from "react";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import socialData from "../../data/social-data";
import "./footer.css";

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
          <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
         Connect with me on social media!
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {socials.map(social => (
              <div key={social.id} className="social-links">
                <a target="_blank" rel="noopener noreferrer" href={social.profileURL}> {social.account} </a>
              </div>
          ))}
        </Typography>
        <Copyright />
      </footer>
        </>
    )
}

export default Footer;