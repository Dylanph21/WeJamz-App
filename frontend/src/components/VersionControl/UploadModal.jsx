import React from 'react';
import axios from 'axios';

class UploadModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      version_name: '',
      description: '',
      url: ''
    }
  }

  //for submission will send post request to the users versions
  //function send post req and closes modal window
  handleSubmit = () => {
    //post req to server:
    axios({
      method: 'post',
      url: 'http://localhost:3005/band/version',
      data :
      {
        bandname: "Butterflies",
        uploads:
        {
          musicName: "wE arE buttErfliEs",
          version_history:
          {
          version_name: this.state.version_name,
          description: this.state.description,
          url: this.state.url,
          likes: 0,
          createdAt: "Wed Aug 17 2021 11:21:26"
          }
        },
        new_entry: "true"
      }
    });
    this.props.close();
  }

  render() {
    return (
      <div className="uploadModalBackground">
        <div className="uploadModalContainer">
          <div className="modalTopRow">
            <div className="orangeText20">
              upload new version
            </div>
            <button className="modalCloseButton" onClick={this.props.close}>
              X
            </button>
          </div>
          <div >
            <form>
              <input className="forms" onChange={(e) => { this.setState({ name: e.target.value }) }}></input>
            </form>
            <div className="orangeText10">
              version name
            </div>
          </div>
          <div>
            <form>
              <input className="forms" onChange={(e) => { this.setState({ description: e.target.value }) }}></input>
            </form>
            <div className="orangeText10">
              description
            </div>
          </div>
          <div>
            <form>
              <input className="forms" onChange={(e) => { this.setState({ url: e.target.value }) }}></input>
            </form>
            <div className="orangeText10">
              url
            </div>
          </div>
          <div>
            <button className="modalSubmitButton" onClick={this.handleSubmit}>submit version</button>
          </div>
        </div>
      </div >
    )
  }
}

export default UploadModal;