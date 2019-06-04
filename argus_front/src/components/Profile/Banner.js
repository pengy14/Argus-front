import React from 'react'
import { Typography, Avatar } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import deepPurple from '@material-ui/core/colors/deepPurple'

const styles = theme => ({
    root: {
        paddingTop: theme.spacing.unit * 5,
        height: theme.spacing.unit * 35,
        backgroundColor: theme.palette.primary.main,
    },
    username: {
        marginTop: theme.spacing.unit * 2,
        color: deepPurple[900]
    },
    bio: {
        marginTop: theme.spacing.unit * 1,
        color: theme.palette.primary.contrastText
    },
    avatar: {
        width: theme.spacing.unit * 16,
        height: theme.spacing.unit * 16,
        marginLeft: 'auto',
        marginRight: 'auto',
        
    },
})

const Banner = ({ profile, classes }) => {
  return (
      <div className={classes.root}>
        <Avatar src={profile.image} className={classes.avatar} />
        <Typography variant="h5" align="center" className={classes.username}>
            Hello, this is {profile.username}.
        </Typography>
        <Typography variant="h6" align="center" className={classes.bio}>
            {profile.bio}
        </Typography>
      </div>
  );
};

export default withStyles(styles)(Banner);