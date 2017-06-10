import React from 'react'
import { connect } from 'react-redux'

@connect((store) => {
  return {
    users: store.users
  }
})

export default class Profile extends React.Component {
  render() {
    const { username } = this.props.users

    return (
      <div class="container">
        <div class="col-sm-6 col-md-3">
          <div class="thumbnail">
            <img src="../../static/images/profile.png" alt={username}></img>
            <div class="caption">
              <h1><small>{username}</small></h1>
              <h3>About</h3>
              <p>Brief description...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
