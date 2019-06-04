import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import HomeIcon from '@material-ui/icons/Home'
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos'
import FaceIcon from '@material-ui/icons/Face'
import SettingsIcon from '@material-ui/icons/Settings'

const styles = theme => ({
    AppBar: {
        backgroundColor: theme.palette.primary.dark
    },
    flex: {
        flexGrow:1
    },
    text: {
        color: theme.palette.secondary.contrastText,
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit*4
    },
    icon: {
        color: theme.palette.secondary.contrastText
    }
})

class LoggedInView extends React.Component {
    
    render() {
      const { user, classes } = this.props
      return (
          <React.Fragment>
              <AppBar position="static" className={classes.AppBar}>
                  <Toolbar>
                      <Link to="/" className={classes.flex}>
                      <Typography variant="h6"  className={classes.text} >
                          {this.props.appName}
                      </Typography>
                      </Link>
                      <HomeIcon className={classes.icon}/>
                      <Link to="/">                    
                      <Typography variant="subheading" className={classes.text} >
                          Home
                      </Typography>
                      </Link>
                      <AddToPhotosIcon className={classes.icon}/>
                      <Link to="new">
                      <Typography variant="subheading" className={classes.text} >
                          New Post
                      </Typography>
                      </Link>
                      <SettingsIcon className={classes.icon}/>
                      <Link to="settings">
                      <Typography variant="subheading" className={classes.text} >
                          Settings
                      </Typography>
                      </Link>
                      <FaceIcon className={classes.icon}/>
                      <Link to={`@${user.username}`}>
                      <Typography variant="subheading" className={classes.text} >
                          {user.username}
                      </Typography>
                      </Link>
                  </Toolbar>
              </AppBar>
          </React.Fragment>
      );
    }
  }
  
  export default withStyles(styles)(LoggedInView);