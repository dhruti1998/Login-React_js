// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {userName: '', password: '', showSubmitError: false, errorMsg: ''}

  getUsername = event => {
    this.setState({userName: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  onGetSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  showErrorMessage = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {userName, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok === true) {
      this.onGetSuccess()
    } else {
      this.showErrorMessage(data.error_msg)
    }
  }

  render() {
    const {userName, password, showSubmitError, errorMsg} = this.state

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="image1"
        />
        <div className="input-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="image2"
          />
          <form className="form" onSubmit={this.submitForm}>
            <label htmlFor="username" className="label-el">
              USERNAME
            </label>
            <input
              type="text"
              placeholder="Username"
              id="username"
              className="input-el"
              value={userName}
              onChange={this.getUsername}
            />
            <label htmlFor="password" className="label-el">
              PASSWORD
            </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="input-el"
              value={password}
              onChange={this.getPassword}
            />
            <button type="submit" className="button">
              Login
            </button>
            {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
