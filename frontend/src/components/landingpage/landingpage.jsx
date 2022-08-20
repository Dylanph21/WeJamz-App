import React from 'react';
import Login from '../landpagemodals/login.jsx';
import Signup from '../landpagemodals/signup.jsx';
import axios from 'axios';
//import VersionControl from '../VersionControl/VersionControl.jsx';
import BandModal from '../profilepage/CreateBandModal.jsx';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signupModal: null,
      password: null,
      username: null,
      newEmail: null
    }
  }

  signUpButton = (e) => {
  // onClick => open a model with options for username, email, password
    this.setState({
      signupModal: true,
    })
  }


  exitModal = (e) => {
    this.setState({
      signupModal: false,
    })
  }

  signupSubmitButton = (e) => {
      var user = this.state.username;
      var password = this.state.password;
      var email = this.state.newEmail;

      axios({
        method: "post",
        data: {
          username: user,
          password: password,
          email: email,
        },
        withCredentials: true,
        url: 'http://localhost:3005/account/register'
      })
      .then((res) => {
        if (res.data === "User Created") {
          this.props.changeUser(user);
            this.props.goHome();
        }
      })
    // on submit, check database for username,
    // if no user in database, put user data into database, bring user to homepage
    // else if user is in database already, "That username already exists. Please try another username"
    e.preventDefault();
    axios({
      method: "post",
      data: {
        username: this.state.newUsername,
        password: this.state.newPassword,
        email: this.state.newEmail,
      },
      withCredentials: true,
      url: 'http://localhost:3005/account/register'
    })
      .then((res) => { console.log(res) })
  }

  loginVal = (e) => {
    var name = e.target.name;
    var val = e.target.value;
    this.setState({
      [name]: val
    })
  }

  render() {
    return (
      <div>
      <div>
      <div className='mainLanding'>
        {this.props.login && <Login open={this.state.loginModal} changeUser={this.props.changeUser} loginVal={this.props.loginVal} submit={this.props.submit} userErr={this.props.userErr} passErr={this.state.passErr} exit={this.props.exit}/>}
        {this.state.signupModal && <Signup loginVal={this.loginVal} submit={this.signupSubmitButton} exit={this.exitModal}/>}
        <h1 className='weTitle'>WeJamz</h1>
        <div className="buttonsRowLp">
        <button onClick={this.props.loginButton} className='landpage-buttons'>Login</button>
        <button onClick={this.props.goHome} className='landpage-buttons'>Continue as Guest</button>
        <button onClick={this.signUpButton} className='landpage-buttons'>Sign Up</button>
        </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Landing;






