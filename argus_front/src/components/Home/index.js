import React from 'react'
import { connect } from 'react-redux'
import Banner from './Banner'
import MainView from './MainView'
import { Grid } from '@material-ui/core'
import agent from '../../agent'
import SearchField from "react-search-field";
import CustomPaginationActionsTable from "../Table";
import autoBind from "react-autobind";


const mapStateToProps = state => ({
  appName: state.common.appName,
    searchResults: state.common.searchResults
});

const mapDispatchToProps = dispatch => ({
  onLoad: () =>
    dispatch({type: 'HOME_PAGE_LOADED', payload: agent.Articles.all()}),
  onTagLoad: () =>
    dispatch({type: 'TAGS_LOADED', payload: agent.Articles.getTags()}),
  onUnload: () =>
    dispatch({type:'HOME_PAGE_UNLOAD'}),
    search: (searchText, platform) =>
        dispatch({type:'SEARCH',payload: agent.Commodity.search(searchText,platform)})

})

class Home extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            searchText: '',
            platform: 'amazon',
            email: '',
            password: ''
        };
        autoBind(this);
    }


    componentWillMount() {
    // this.props.onLoad()
    // this.props.onTagLoad()
  }

  componentWillUnmount() {
    // this.props.onUnload()
  }

    SearchClick = event =>{
        // event.preventDefault();
        const { searchText, platform } = this.state;
        console.log(searchText);
        this.props.search(searchText,platform);
    };

    Enter= (event)=>{
        // event.preventDefault();
        const { searchText, platform } = this.state;
        console.log(searchText);
        this.props.search(searchText,platform);
    };

    updateChange= value=>{
        this.setState({searchText:value});
    };

    
  render() {
    const { appName, articles, tags } = this.props
    return (
      <React.Fragment>
        <Banner appName={appName} />
          <SearchField
              placeholder="Search..."
              onChange={this.updateChange}
              searchText={this.state.searchText}
              classNames="test-class"
              onEnter={this.Enter}
              onSearchClick={this.SearchClick}
          />
          <CustomPaginationActionsTable searchResults={this.props.searchResults}/>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);