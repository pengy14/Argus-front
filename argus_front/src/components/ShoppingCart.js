import React from 'react'
import {connect} from 'react-redux'
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
import SimpleList from "./SimpleList";
import ShoppingCart from '@material-ui/icons/ShoppingCart'


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
    listeningList: state.common.listenedItems
});

const mapDispatchToProps = dispatch => ({
    onSubmit: (body) =>
        dispatch({type: 'ADD_MAIL', payload: agent.Commodity.mail(body)}),
    onRedirect: () =>
        dispatch({type: 'REDIRECT'})
});

class SignIn extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            commodityName: '',
            url: '',
            source: '',
            mail:''
        };

        this.updateState = field => ev => {
            const state = this.state;
            const newState = Object.assign({}, state, {[field]: ev.target.value});
            this.setState(newState);
        };

        this.submitForm = ev => {
            ev.preventDefault();
            const {commodityName, url, source, mail} = this.state
            const body={
                commodityName:commodityName,
                url:url,
                source:source,
                mail:mail
            }
            this.props.onSubmit(body);
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.redirectTo) {
            this.props.history.push(nextProps.redirectTo);
            this.props.onRedirect();
        }
    }


    render() {
        const {classes} = this.props;
        return (
            <main className={classes.main}>
                <CssBaseline/>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <ShoppingCart/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Listening List
                    </Typography>
                    <SimpleList listeningList={this.props.listeningList}/>
                </Paper>
            </main>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignIn));