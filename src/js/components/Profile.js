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
        
      </div>
    )
  }
}
