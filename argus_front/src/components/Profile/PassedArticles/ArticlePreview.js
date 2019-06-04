import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'


const styles = theme => ({
    root: {
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 5,
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: "60%"
    },
    title: {
        marginTop: theme.spacing.unit * 1,
        color: theme.palette.primary.dark
    },
    caption: {
        marginTop: theme.spacing.unit
    },
})

export default withStyles(styles)(({article, classes}) => {
    return (
        <Grid item className={classes.root}>
        <Typography variant="h6" className={classes.title}>
            {article.title}
        </Typography>
        <Typography variant="subheading" color="textSecondary" >
            {article.description}
        </Typography>
        <Typography variant="caption" color="secondary">
            {article.createat}
        </Typography>
        <Link to={`a${article.id}`} >
        <Typography variant="caption" color="secondary" className={classes.caption}>
            Read more...
        </Typography>
        </Link>
        <hr/>
        </Grid>
    );
})

