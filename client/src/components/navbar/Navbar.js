import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FaceIcon from '@material-ui/icons/Face';
import { makeStyles } from '@material-ui/core/styles';
import "./navbar.css";

const useStyles = makeStyles(theme => ({
    icon: {
    marginRight: theme.spacing(2),
  }
}))

const NavBar = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar color="secondary" position="relative">
            <Toolbar>
            <FaceIcon className={classes.icon} />
            <Typography id="nav-name" variant="h6" color="inherit" noWrap>
                Lady Kerr
            </Typography>
            <Button variant="text" href="https://www.linkedin.com/in/kedashakerr/" target="_blank">
                Learn More
            </Button>
            </Toolbar>
        </AppBar>
    </div>
    )
}

export default NavBar;