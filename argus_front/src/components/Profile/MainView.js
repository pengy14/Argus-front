import React from 'react'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PassedArticles from './PassedArticles'
import UnpassedArticles from './UnpassedArticles'

const styles = theme => ({
  AppBar: {
    backgroundColor: theme.palette.primary.light
  }
})



class MainView extends React.Component {

  constructor(){
    super();
    this.state = {
      tabValue: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event, value) => {
    this.setState({
      tabValue: value
    })
  }

  render() {
    const { classes, id, articles } = this.props;
    const { tabValue } = this.state ;
    return (
      <React.Fragment>
        <AppBar position="static">
          <Tabs
            value={tabValue}
            onChange={this.handleChange}
            scrollButtons="on"
            indicatorColor="secondary"
            textColor="secondary"
            centered
            fullWidth 
            className={classes.AppBar}
          >
            <Tab label="articles" />
            <Tab label="Not passed" />
          </Tabs>
        </AppBar>
        {tabValue === 0 && <PassedArticles id={id} articles={articles}/>}
        {tabValue === 1 && <UnpassedArticles id={id} articles={articles}/>}
      </React.Fragment>
    );
  }
};

export default withStyles(styles)(MainView);