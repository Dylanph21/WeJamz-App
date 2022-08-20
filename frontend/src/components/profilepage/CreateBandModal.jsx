import React from 'react';
import axios from 'axios';

class BandModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      band: '',
      bio: '',
      genre: '',
      avatar: ''
    }
  }


  //this component shows the current project and a list of the edits(history)
  //it will also display the information attached to each project and edit


  //put req to db with new audio upload
  //function that will allow user to upload version
  handleCreateBand = () => {
    //TODO:
    //axios post request to database with info for creating band

    axios({
      method: 'post',
      url: 'http://localhost:3005/band/',
      data :
      {
        bandname: this.state.band,
        bio:  this.state.bio,
        category: [this.state.genre],
        avatar: this.state.avatar,
        followedby: [],
        members: [],
        uploads: [],
        timeline: [{
          time: "Fri JUl 12 2021 11:21:26",
          action: "Started the new band",
          involvedName: "BUtterflies"}]
      }})


  }



  render() {
    return (
      <>
        <div className="vCModalBackground">
          <div className="vCModalContainer">
            <div className="modalTopRow">
              <div className="orangeText24">
                Band Information
              </div>
              <button className="modalCloseButton">
                X
              </button>
            </div>
            <div>
              <form>
                <input className="forms" onChange={(e) => { this.setState({ band: e.target.value }) }}></input>
              </form>
              <div className="orangeText10">
                band name
              </div>
            </div>
            <div>
              <form>
                <input className="forms" onChange={(e) => { this.setState({ bio: e.target.value }) }}></input>
              </form>
              <div className="orangeText10">
                bio
              </div>
            </div>
            <div>
              <form>
                <input className="forms" onChange={(e) => { this.setState({ genre: e.target.value }) }}></input>
              </form>
              <div className="orangeText10">
                genre
              </div>
            </div>
            <div>
              <form>
                <input className="forms" onChange={(e) => { this.setState({ avatar: e.target.value }) }}></input>
              </form>
              <div className="orangeText10">
                avatar
              </div>
            </div>
            <div>
              <button className="modalSubmitButton" onClick={this.handleCreateBand}>add new band</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default BandModal;



