import React from 'react'
import { connect } from 'react-redux'
import Banner from './Banner'
import MainView from './MainView'
import Loading from '../Loading'
import agent from '../../agent'

const mapStateToProps = state => ({
    profile: state.profile,
    id: state.user.id,
    articles: state.articles.articles
})

const mapDispatchToProps = dispatch => ({
    onLoad: (id, username) =>
        dispatch({type: 'PROFILE_LOADED', payload: agent.Profile.get(id, username)}),
    onUnload: () =>
        dispatch({type: 'PROFILE_UNLOAD'}),
    onArticlesLoad: () =>
        dispatch({type: 'HOME_PAGE_LOADED', payload: agent.Articles.all()}),
})

class Profile extends React.Component {
    
    componentWillMount() {
        this.props.onLoad(this.props.id, this.props.match.params.username);
        this.props.onArticlesLoad();
    }

    componentWillUnmount() {
        this.props.onUnload()
    }
    
    render () {
        const { profile, id, articles } = this.props
        return (
            <React.Fragment>
            {
                profile.username &&
                <React.Fragment>
                    <Banner profile={profile}/>
                    <MainView id={id} articles={articles}/>
                </React.Fragment>
            
            }
            {
                !profile.username &&
                <Loading />
            }
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);