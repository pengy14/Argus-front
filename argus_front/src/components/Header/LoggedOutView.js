import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import HomeIcon from '@material-ui/icons/Home'
import PersonIcon from '@material-ui/icons/Person'
import Email from '@material-ui/icons/Email'
import SearchField from "react-search-field";

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
        paddingRight: theme.spacing.unit*3
    },
    icon: {
        color: theme.palette.secondary.contrastText
    }
})

class LoggedOutView extends React.Component {


    // const onChange = va=>(this.setState())
    render() {
      const { classes } = this.props
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
                      <Email className={classes.icon}/>
                      <Link to="login">
                      <Typography variant="subheading" className={classes.text} >
                          Inform me
                      </Typography>
                      </Link>
                      {/*<PersonIcon className={classes.icon}/>*/}
                      {/*<Link to="register">*/}
                      {/*<Typography variant="subheading" className={classes.text} >*/}
                          {/*Sign Up*/}
                      {/*</Typography>*/}
                      {/*</Link>*/}
                  </Toolbar>
              </AppBar>
          </React.Fragment>
      );
    }
  }
  
  export default withStyles(styles)(LoggedOutView);