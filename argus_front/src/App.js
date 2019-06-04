import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Settings from './components/Settings'
import Profile from './components/Profile'
import New from './components/New'
import Update from './components/Update'

const mapStateToProps = state => ({
    ...state.user,
    appName: state.common.appName
});


class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Router>
                    <div>
                    <Header appName={this.props.appName} />
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/@:username" component={Profile} />
                    <Route path="/new" component={New} />
                    <Route path="/update" component={Update} />
                    </div>
                </Router>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps)(App);