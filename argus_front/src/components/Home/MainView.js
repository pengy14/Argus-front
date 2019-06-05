import React from 'react'
import { Typography } from '@material-ui/core'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { withStyles } from '@material-ui/core/styles'


const styles = theme => ({
  panel: {
    backgroundColor: theme.palette.primary.light,
  },
  summary: {
    paddingLeft: theme.spacing.unit * 1,
  }
})

class MainView extends React.Component {

  render() {
    const { articles, classes, tags } = this.props;
    return (
      <React.Fragment>
        <ExpansionPanel className={classes.panel}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
            {/*<Typography variant="overline" color="secondary" className={classes.summary}>Choose a tag</Typography>*/}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            </ExpansionPanelDetails>
        </ExpansionPanel>
      </React.Fragment>
    );
  }
};

export default withStyles(styles)(MainView);