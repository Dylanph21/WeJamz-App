import React from 'react';

class VersionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="versionCItem">
        <div className="vItemTopRow">
          <div className="lineup">
            <div className="orangeText10">
              version:
            </div>
            <div className="basicGray">
              {this.props.version.version_name}
            </div>
          </div>
          <div className="lineup">
            <div className="orangeText10">
              created:
            </div>
            <div className="basicGray">
              {this.props.version.createdAt}
            </div>
          </div>
        </div>
        <audio controls>
          <source src={this.props.version.url} />
        </audio>
        <div className="lineup">
          <div className="orangeText10">
            description:
          </div>
          <div className="basicGray">
            {this.props.version.description}
          </div>
        </div>
        <div className="vItemBottomRow">
          <div>
            <button className="downloadButton">download</button>
          </div>
          <div className="lineup">
            <div className="likes">
              likes:
            </div>
            <div className="basicGray">
              {this.props.version.likes}
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default VersionItem;