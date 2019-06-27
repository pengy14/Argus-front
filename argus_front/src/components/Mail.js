import React from 'react'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import LockIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import agent from '../agent'
import Email from '@material-ui/icons/Email'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
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
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});


const mapStateToProps = state => ({
  ...state.user,
  redirectTo: state.common.redirectTo,
  inProgress: state.common.inProgress
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (username, password) =>
      dispatch({ type: 'LOGIN', payload: agent.Auth.login(username, password)}),
  onRedirect: () =>
      dispatch({ type: 'REDIRECT' })
});

class SignIn extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.updateState = field => ev => {
      const state = this.state;
      const newState = Object.assign({}, state, { [field]: ev.target.value });
      this.setState(newState);
    };

    this.submitForm = ev => {
      ev.preventDefault();
      const { username, password } = this.state
      this.props.onSubmit(username, password);
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      this.props.history.push(nextProps.redirectTo);
      this.props.onRedirect();
    }
  }


  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            {/*<LockIcon />*/}
            <Email/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Inform me
          </Typography>
          <form onSubmit={this.submitForm} className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input 
                id="username" 
                name="username" 
                value={this.state.username} 
                onChange={this.updateState('username')}
                autoFocus   
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input 
                name="password" 
                type="password" 
                id="password" 
                autoComplete="current-password" 
                value={this.state.password}
                onChange={this.updateState('password')}
              />
            </FormControl>
              <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                      name="password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={this.state.password}
                      onChange={this.updateState('password')}
                  />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                      name="password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={this.state.password}
                      onChange={this.updateState('password')}
                  />
              </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={this.props.inProgress}
            >
              Sign in
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(SignIn));