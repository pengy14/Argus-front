import React from 'react'
import { connect } from 'react-redux'
import Banner from './Banner'
import MainView from './MainView'
import { Grid } from '@material-ui/core'
import agent from '../../agent'


const mapStateToProps = state => ({
  appName: state.common.appName,
});

const mapDispatchToProps = dispatch => ({
  onLoad: () =>
    dispatch({type: 'HOME_PAGE_LOADED', payload: agent.Articles.all()}),
  onTagLoad: () =>
    dispatch({type: 'TAGS_LOADED', payload: agent.Articles.getTags()}),
  onUnload: () =>
    dispatch({type:'HOME_PAGE_UNLOAD'})
})

class Home extends React.Component {

  componentWillMount() {
    this.props.onLoad()
    this.props.onTagLoad()
  }

  componentWillUnmount() {
    this.props.onUnload()
  }
  
    
  render() {
    const { appName, articles, tags } = this.props
    return (
      <React.Fragment>
        <Banner appName={appName} />
        <Grid>
            <MainView articles={articles} tags={tags} />
        </Grid>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);