import React from 'react'
import { connect } from 'react-redux'
import LoggedOutView from './LoggedOutView'
import LoggedInView from './LoggedInView'

const mapStateToProps = (state) => ({
    user: state.user,
    appName: state.common.appName,
    redirectTo: state.common.redirectTo
});

class Header extends React.Component {
  render() {
    const { user, appName } = this.props
    return (
        <React.Fragment>
            { !user.id && <LoggedOutView appName={appName} /> }
            { user.id && <LoggedInView appName={appName} user={user} />}
        </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(Header);

