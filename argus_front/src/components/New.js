import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import TextField from '@material-ui/core/TextField'
import DescriptionIcon from '@material-ui/icons/Description'
import Chip from '@material-ui/core/Chip'
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
  icon: {
    marginTop: theme.spacing.unit*2,
    width: theme.spacing.unit * 8,
    height: theme.spacing.unit * 8
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  chip: {
    marginRight: theme.spacing.unit * 2,
  },
});

const mapStateToProps = state => ({
    ...state.user,
    inProgress: state.common.inProgress,
    redirectTo: state.common.redirectTo
})

const mapDispatchToProps = dispatch => ({
  onSubmitForm: (id, article) =>{
    dispatch({ type: 'ARTICLE_PUBLISHED', payload: agent.Articles.new(id, article) })
  },
  onRedirect: () =>
    dispatch({ type: 'REDIRECT' })
});

class Editor extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          title: '',
          description: '',
          body: '',
          taglist: [],
          tag: '',
        };

        this.updateState = field => ev => {
          const state = this.state;
          const newState = Object.assign({}, state, { [field]: ev.target.value });
          this.setState(newState);
        };

        this.submitForm = ev => {
          const { title, description, body, taglist } = this.state
          ev.preventDefault();
          const article = Object.assign({}, {title}, {description}, {body}, {taglist});
          const { id } = props
          props.onSubmitForm(id, article);
        };

        this.onAddTag = () => {
          const taglist = [...this.state.taglist, this.state.tag];
          const newState = Object.assign({}, {taglist}, {tag: ''});
          this.setState(newState);
        };

        this.handleDelete = (tag) => {
          this.setState(state => {
            const taglist = [...state.taglist];
            const tagToDelete = taglist.indexOf(tag);
            taglist.splice(tagToDelete, 1);
            return { taglist };
          });
        }

        // When entering tags, hitting SHIFT adds a tag to the list
        this.watchForShift = ev => {
          if (ev.keyCode === 16) {
            ev.preventDefault();
            this.onAddTag();
          }
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
        const { title, description, body, tag, taglist } = this.state
        return (
            <main className={classes.main}>
              <CssBaseline />
              <Paper className={classes.paper}>
                <DescriptionIcon color="primary" className={classes.icon} />
                <br/>
                <Typography color="secondary" variant="h5">
                  Write a new article
                </Typography>
                <form onSubmit={this.submitForm} className={classes.form}>
                  <FormControl margin="normal" fullWidth required>
                    <TextField
                        id="title"
                        label="Title"
                        placeholder="Article Title"
                        margin="normal"
                        variant="outlined"
                        value={title}
                        onChange={this.updateState('title')}
                    />
                  </FormControl>
                  <br/>
                  <FormControl margin="normal" fullWidth required>
                    <TextField
                        id="description"
                        label="Description"
                        placeholder="What is this article about?"
                        margin="normal"
                        variant="outlined"
                        value={description}
                        onChange={this.updateState('description')}
                    />
                  </FormControl>  
                  <br/>
                  <FormControl margin="normal" fullWidth>
                    <TextField
                        id="tag"
                        label="Tag"
                        placeholder="Enter Tag"
                        margin="normal"
                        variant="outlined"
                        value={tag}
                        onChange={this.updateState('tag')}
                        onKeyUp={this.watchForShift}
                    />
                  </FormControl>
                  {
                    taglist.map(tag => {
                        return (
                        <Chip
                            key={tag}
                            label={tag}
                            className={classes.chip}
                            color="primary"
                            variant="outlined"
                            onDelete={() => this.handleDelete(tag)}
                        />
                        ) 
                    })
                  }
                  <FormControl margin="normal" fullWidth required>
                    <TextField
                        id="body"
                        label="Body"
                        placeholder="Write your article"
                        margin="normal"
                        variant="outlined"
                        multiline
                        rows="8"
                        value={body}
                        onChange={this.updateState('body')}
                    />
                  </FormControl>
                  <br/>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={this.props.inProgress}
                    className={classes.submit}
                  >
                    Publish Article
                  </Button>
                </form>
              </Paper>
            </main>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Editor));
