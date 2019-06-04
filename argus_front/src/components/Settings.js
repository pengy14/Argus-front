import React from 'react'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import TextField from '@material-ui/core/TextField'
import agent from '../agent'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(800 + theme.spacing.unit * 3 * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    width: theme.spacing.unit * 8,
    height: theme.spacing.unit * 8
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 64
  },
});

const mapStateToProps = state => ({
    ...state.user,
    inProgress: state.common.inProgress,
    redirectTo: state.common.redirectTo
})

const mapDispatchToProps = dispatch => ({
  onClickLogout: () => 
    dispatch({ type: 'LOGOUT' }),
  onSubmitForm: user =>{
    dispatch({ type: 'SETTINGS_SAVED', payload: agent.Auth.save(user) })
  },
  onRedirect: () =>
    dispatch({ type: 'REDIRECT' })
});

class Settings extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id: props.id,
            image: props.image,
            username: props.username,
            bio: props.bio,
            email: props.email,
        };

        this.updateState = field => ev => {
            const state = this.state;
            const newState = Object.assign({}, state, { [field]: ev.target.value });
            this.setState(newState);
        };

        this.submitForm = ev => {
            ev.preventDefault();
            const user = Object.assign({}, this.state);
            // to add dispatch
            this.props.onSubmitForm(user);
        };
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.redirectTo) {
        this.props.history.push(nextProps.redirectTo);
        this.props.onRedirect();
      }
    }

    render(){
        const { classes } = this.props;
        const { image, username, bio, email } = this.state
        return (
            <main className={classes.main}>
              <CssBaseline />
              <Paper className={classes.paper}>
                <Avatar src={this.props.image} className={classes.avatar} />
                <br/>
                <Typography component="h1" variant="h5">
                  Your Settings
                </Typography>
                <form onSubmit={this.submitForm} className={classes.form}>
                  <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="text">URL of Image</InputLabel>
                    <Input 
                        type="text"  
                        placeholder="URL of profile picture" 
                        value={image} 
                        onChange={this.updateState('image')} 
                        autoFocus 
                    
                    />
                  </FormControl>
                  <br/>
                  <br/>
                  <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input 
                        type="email" 
                        placeholder="Your email" 
                        value={email} 
                        onChange={this.updateState('email')}     
                    />
                  </FormControl>
                  <br/>
                  <br/>
                  <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="text">Username</InputLabel>
                    <Input 
                        type="text" 
                        placeholder="Your username"
                        value={username} 
                        onChange={this.updateState('username')} />
                  </FormControl>
                  <br/>
                  <br/>
                  <FormControl margin="normal" fullWidth>
                    <TextField
                        id="bio"
                        label="Bio"
                        placeholder="Introduce yourself"
                        margin="normal"
                        variant="outlined"
                        multiline
                        rows="4"
                        value={bio}
                        onChange={this.updateState('bio')}
                    />
                  </FormControl>
                  <br/>
                  <br/>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={this.props.inProgress}
                    className={classes.submit}
                  >
                    Update your information
                  </Button>
                  <hr/>
                  <Button variant="text" onClick={this.props.onClickLogout}>
                      Or click here to log out
                  </Button> 
                </form>
              </Paper>
            </main>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Settings));