import React from 'react';
import Navbar from './navbar.jsx';
import HPMusicList from './musicList.jsx';
import HPUsersList from './usersList.jsx';
import axios from 'axios';
import VersionControl from '../VersionControl/VersionControl.jsx';
import LiveChat from '../LiveChating/LiveChat.jsx'

//12$asfse456
class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      allusers: [],
      uploads: [],
      VCShow: false,
      currentVersion: '',
      showChat: false,
      username: 'Candace'
    }
    this.openChat = this.openChat.bind(this);
    this.closeChat = this.closeChat.bind(this);
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.user !== prevProps.user) {
      this.props.getUserInfo();
    }
  }

  componentDidMount = () => {
    if (this.props.user !== 'Guest') {
      console.log('hit')
      this.props.getUserInfo();
    }
    this.getAllUsers();
  }



  getAllUsers = () => {
    axios({
      method: "get",
      withCredentials: true,
      url: 'http://localhost:3005/account/getallUser'
    })
      .then((res) => {
        // console.log(res.data)
        this.setState({
          users: res.data,
          allusers: res.data
        }, () => {
          // console.log(this.state.users)
          var uploadsArr = [];
          this.state.users.forEach((user) => {
            user.uploads.forEach((uploaded) => {
              if (uploaded.version_history.length > 0) {
                uploadsArr.push(uploaded);
              }
            })
          })
          this.setState({
            uploads: uploadsArr,
          })
        })

      })
  }

  goToRandomUsersProf = () => {
    // when clicking a users profile pic or name, bring to that users profile
  }

  messageRandomUser = () => {
    // when clicked open a modal(maybe) that allows the user to message the random user clicked
  }

  requestCollobRandomUser = () => {
    // when clicked, open a live chat option with specified user
  }

  seeVCModal = (e) => {
    console.log(e);
    this.state.users.forEach(user => {
      user.uploads.forEach(uploaded => {
        uploaded.version_history.forEach(song => {
          if (song._id === e.target.attributes[1].value) {
            this.setState({
              currentVersion: uploaded.version_history,
            })
          }
        })
      })
    })
    this.setState({
      VCShow: true,
    })
  }


  handleClose = () => {
    if (this.state.VCShow === false) {
      this.setState({
        VCShow: true
      })
    } else {
      this.setState({
        VCShow: false
      })
    }
  }

  reorder = () => {
    var users = this.state.users
    var temp1, temp2;
    for (var i = 0; i < users.length; i++) {
      temp1 = users[i];
      var index = Math.floor(Math.random() * users.length);
      temp2 = users[index];
      users[i] = temp2;
      users[index] = temp1;
    }
    this.setState({
      users: users
    })
    var uploads = this.state.uploads
    var uptemp1, uptemp2;
    for (var j = 0; j < uploads.length; j++) {
      uptemp1 = uploads[i];
      var random = Math.floor(Math.random() * uploads.length);
      uptemp2 = uploads[random];
      uploads[i] = uptemp2;
      uploads[random] = uptemp1;
      console.log(uploads, uptemp1, uptemp2, random)
    }
    this.setState({
      uploads: uploads
    })
  }

  search = (e) => {
    var val = e.target.value;
    console.log('search: ', val);
    this.setState({
      search: val
    })
    this.getFiltered()
  }


  getFiltered = (e) => {
    // this.getAllUsers();
    var search = this.state.search;
    var users = this.state.allusers;
    var newUsers = [];
    if (users.length > 0) {
      users.forEach((user) => {
        if (user.username.toLowerCase().includes(search.toLowerCase())) {
          newUsers.push(user)
        }
      })
      if (newUsers.length > 0) {
        this.setState({
          users: newUsers
        })
      }
    }
  }

  openChat = (e) => {
    e.preventDefault();
    this.setState({
      showChat: true
    })

  }

  closeChat = (e) => {
    e.preventDefault();
    this.setState({
      showChat: false
    })

  }

  render() {
    // let newUploads = this.state.uploads;
    const musicList = this.state.uploads.map((uploaded2) => (
      <HPMusicList key={Math.random()} seeVCModal={this.seeVCModal} usersUploads={uploaded2.version_history[0]} />
    ));
    const usersList = this.state.users.map((user) => (
      <HPUsersList openChat={this.openChat} key={Math.random()} user={user} uploads={user.uploads} />
    ));
    if ((this.props.user === 'Guest') || this.props.user === null) {
      return (
        <>
          {this.state.VCShow && <VersionControl version={this.state.currentVersion} close={this.handleClose} />}
          <Navbar reorder={this.reorder} search={this.search} land={this.props.land} user={this.props.user} loginVal={this.props.loginVal} submit={this.props.submit} loginButton={this.props.loginButton} changeUser={this.props.changeUser} goHome={this.props.goHome} userErr={this.props.userErr} exit={this.props.exit} login={this.props.login} view={this.props.view} />

          <div className='homepage-container'>
          <div id='chatDiv'>
        {this.state.showChat && <LiveChat closeChat={this.closeChat} user={this.props.user} />}
          </div>
            <div className='hplists'>
            <div className="versionList">{usersList}</div>
            <div className="versionList">{musicList}</div>
            </div>
          </div>
        </>
      )
    } else if (this.props.loggedInUser !== null) {
      return (
        <>
          {this.state.VCShow && <VersionControl version={this.state.currentVersion} close={this.handleClose} />}
          <Navbar reorder={this.reorder} search={this.search} land={this.props.land} user={this.props.user} loginVal={this.props.loginVal} submit={this.props.submit} loginButton={this.props.loginButton} changeUser={this.props.changeUser} goHome={this.props.goHome} userErr={this.props.userErr} exit={this.props.exit} login={this.props.login} view={this.props.view} />
          <div className='homepage-container'>
          <div id='chatDiv'>
        {this.state.showChat && <LiveChat closeChat={this.closeChat} user={this.props.user} />}
          </div>
              <div className='homepage-userinfo-container'>
                <div className='homepage-userinfo-container2'>
                <img className='usersphoto' onClick={this.props.goProfile} src={this.props.loggedInUser.avatar} alt='profile' />
                <h4 className='username-h4' onClick={this.props.goProfile} >{this.props.user}</h4>
                <p className='userbio'>{this.props.loggedInUser.bio}</p>
                </div>
              </div>
            <div className='hplists'>
              <div className="versionList">{usersList}</div>
              <div className="versionList">{musicList}</div>
              </div>
          </div>
        </>
      )
    }

  }
}

export default Homepage;