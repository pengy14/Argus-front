import React from 'react'
import { CircularProgress, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    h4: {
        marginTop: theme.spacing.unit * 5,
    },
    loading: {
        marginTop: theme.spacing.unit * 2,
        marginLeft: '48%'    
    }
})


class Profile extends React.Component {
    
    render () {
        const { classes} = this.props
        return (
            <React.Fragment>
                    <Typography color="primary" variant="h6" align="center" className={classes.h4}>loading...</Typography>
                    <CircularProgress color="primary" size={40} className={classes.loading} />
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Profile);