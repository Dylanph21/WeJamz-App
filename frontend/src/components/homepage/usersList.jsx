import React from 'react';

class HPUsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersSongs: [],

    }

  }

  componentDidMount = () => {
    if (this.props.uploads) {
      // console.log('hit')
      this.songNames();
    }
  }

  songNames = () => {
    let arr = [];
    this.props.uploads.map((uploaded) => {
      for (var i = 0; i < 4; i++) {
        if (uploaded.version_history[i] !== undefined && arr.length < 4) {
          arr.push(uploaded.version_history[i]);
        }
      }
    })
    this.setState({
      usersSongs: arr,
    })
  }







  render() {
    // this.songNames();
    const userUploads = this.state.usersSongs.map((song) => (
      <div key={Math.random()} style={{ padding: 2, fontSize: 15 }}>{song.version_name}</div>
    ))

    // this.props.uploads.map((uploaded, i) => (
    //   uploaded.version_history.map((song) => (
    //     <div key={Math.random()} style={{padding: 2, fontSize: 15}}>{song.version_name}</div>
    //   ))
    // ));
    return (
      <>
        <div className="homepage-userlist-div">
          <div className="username-photo">
            <img className='usersList-photo' src={this.props.user.avatar} alt='profile' />
            <div className="homepage-userprojects-div">{this.props.user.username}</div>
          </div>
          <div className="homepage-userprojects-div">{userUploads}</div>
          <div className="homepage-userprojects-buttons">
            <button className="messageButton" onClick={this.props.openChat} >Message</button>
            <button className="requestButton">Request Collaboration</button>
          </div>
        </div>
      </>
    )
  }
}
export default HPUsersList;