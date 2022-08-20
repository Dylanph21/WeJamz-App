import React from 'react';
import Login from '../landpagemodals/login.jsx';
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      userErr: false
    }
  }
  render() {
    var log, home;
    if (this.props.user === 'Guest') {
      log = <div className='refreshButton' onClick={this.props.loginButton}>Login</div>
    } else {
      log = <div className='refreshButton' onClick={this.props.land}>Logout</div>;
    }
    if (this.props.view !== 'home') {
      home = <div className='refreshButton'onClick={this.props.goHome}>Return to Homepage</div>
    }
    return (
      <div>
        <span className='navbar'>
          <div id='logo'>
            {/* <img src='https://res.cloudinary.com/dktim9rur/image/upload/v1660579940/Screen_Shot_2022-08-15_at_10.12.00_AM_ju6kt7.jpg' alt='logo'/> */}
            WeJamz
          </div>

          <div id='search'>
            <input onChange={this.props.search} type='text' placeholder='search users' />
          </div>
          <div id='signedIn'>Signed in as {this.props.user}</div>
          {home}
          <div className='refreshButton' onClick={this.props.reorder}>Refresh</div>
          <div>
            {log}
          </div>

        </span>

        {this.props.login && <Login loginVal={this.props.loginVal} submit={this.props.submit} exit={this.props.exit} userErr={this.props.userErr} changeUser={this.props.changeUser} />}
        {/* loginVal={Landing.loginVal} submit={Landing.loginSubmitButton} userErr={Landing.state.userErr} passErr={Landing.state.passErr}  */}
      </div>
    )
  }
}

export default Navbar;