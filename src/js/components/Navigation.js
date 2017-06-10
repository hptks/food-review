import React from 'react'
import { browserHistory, Link } from 'react-router'
import { connect } from 'react-redux'

import { signout } from '../actions/authActions'

@connect((store) => {
  return {
    users: store.users
  }
})

export default class Navigation extends React.Component {
  requestLogOut() {
    this.props.dispatch(signout())
    browserHistory.push('/signin')
  }

  render() {
    const { isLoggedIn, username } = this.props.users

    return (
      <nav class="navbar">
        <div class="container">
          <ul class="nav navbar-nav navbar-right nav-pills">
            <li><Link to='/'><font>Home</font></Link></li>
            <li>
              {isLoggedIn ? (
                <Link to='/signin' onClick={this.requestLogOut.bind(this)}><font>Sign out ({username})</font></Link>
              ) : (
                <Link to='/signin'><font>Sign in</font></Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
