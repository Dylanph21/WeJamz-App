import React from 'react';
class HPMusicList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="versionItem">
        <div className="vItemTopRow">
          <div className="lineup">
            <div className="orangeText10">
              version:
            </div>
            <div className="basicGray" onClick={this.props.seeVCModal} versionTag={this.props.usersUploads._id}>{this.props.usersUploads.version_name}</div>
          </div>
          <div className="lineup">
            <div className="orangeText10">
              created:
            </div>
            <div className="basicGray">{this.props.usersUploads.createdAt}</div>
          </div>
        </div>
        <audio controls
          src={this.props.usersUploads.url} />
          {/* this works: https://res.cloudinary.com/dktim9rur/video/upload/v1660317531/loopazon-1660317493-uk-drill-drum-bang-beats_lkpvnw.mp3 */}
        <div className="lineup">
          <div className="orangeText10">
            description:
          </div>
          <div className="basicGray">{this.props.usersUploads.description}</div>
        </div>
        <div className="vItemBottomRow">
          <button className="downloadButton">download</button>
          <div className="lineup">
            <div className="likes">
              likes:
            </div>
            <div className="basicGray">{this.props.usersUploads.likes}</div>
          </div>
        </div>
      </div>
    )
  }
}
export default HPMusicList;