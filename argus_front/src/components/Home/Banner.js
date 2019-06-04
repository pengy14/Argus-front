import React from 'react'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import deepPurple from '@material-ui/core/colors/deepPurple'

const styles = theme => ({
    root: {
        height: theme.spacing.unit * 35,
        backgroundColor: theme.palette.primary.main,
    },
    headline: {
        paddingTop: theme.spacing.unit * 10,
        paddingBottom: theme.spacing.unit * 2,
        fontFamily: "Arial",
        color: theme.palette.secondary.contrastText
    },
    text: {
        paddingTop: theme.spacing.unit * 1,
        color: deepPurple[900]
    }
})

const Banner = ({ appName, classes }) => {
  return (
      <div className={classes.root}>
        <Typography variant="h1" align="center" className={classes.headline}>
            {appName}
        </Typography>
        <Typography variant="h5" align="center" className={classes.text}>
            A place to share your adventure
        </Typography>
      </div>
  );
};

export default withStyles(styles)(Banner);