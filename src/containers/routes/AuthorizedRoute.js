import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class AuthorizedRoute extends React.Component {
  render() {
    const { component: Component, currentUser, ...rest } = this.props

    return (
      <Route
        {...rest}
        render={props => {
          return currentUser ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }}
      />
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.loginStatus
})

export default connect(mapStateToProps)(AuthorizedRoute)
