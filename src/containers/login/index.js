import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import LoginPage from '../../presentationals/login'
import { login } from '../../actions/authActions'

class LoginContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  userLogin = async () => {
    const { username, password } = this.state
    const { history, login } = this.props
    await login(username, password)
    history.push('/')
  }

  render() {
    const { currentUser, login } = this.props
    return (
      <LoginPage
        currentUser={currentUser}
        login={this.userLogin}
        onChange={this.handleChange}
      />
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.loginStatus
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)
