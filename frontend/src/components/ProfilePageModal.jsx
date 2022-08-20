import React from 'react';
import axios from 'axios';
import Navbar from './homepage/navbar.jsx';

class ProfilePageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div>
        <Navbar goHome={this.props.goHome}/>
        <div className="uploadModalBackground">
          <div className="uploadModalContainer">
            <div className="modalTopRow">
              <div className="orangeText20">
                Profile Page
              </div>
              <button className="modalCloseButton" onClick={this.props.goHome}>
                X
              </button>
            </div>
            <div className="lightpurpText">
              {this.props.currentUserId.username}
            </div>
            <div className="usersphotoPP">
              <img className="usersphotoPP"src={this.props.currentUserId.avatar} alt='profile'></img>
            </div>
            <div className="purpText14">Bio: <div className="lightpurpText">{this.props.currentUserId.bio}</div></div>
            <div className="purpText14">Member of: {this.props.currentUserId.memberof.map((band) => {
              return <div className="lightpurpText">{band}</div>
            })}</div>
            <div className="purpText14">Followed by: {this.props.currentUserId.followedby.map((follower) => {
              return <div className="lightpurpText">{follower}</div>
            })}</div>
            <div className="purpText14">Top upload: <div className="lightpurpText">{this.props.currentUserId.uploads[0].version_history[0].version_name}</div><br/>
            Description: <div className="lightpurpText">{this.props.currentUserId.uploads[0].version_history[0].description}</div>
            <audio controls
              src={this.props.currentUserId.uploads[0].version_history[0].url}
            />
            </div>
          </div>
        </div >
      </div>
    )
  }
}

export default ProfilePageModal;