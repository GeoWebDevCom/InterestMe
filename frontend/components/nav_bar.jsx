import React from 'react';
import SessionContainer from './session/session_container'
import {hashHistory} from 'react-router';
import PinNewFormContainer from './pins/pin_new_container'
export default class NavBar extends React.Component {
  constructor(){
    super()
    this.handleLogoImageClick = this.handleLogoImageClick.bind(this);
  }

  handleLogoImageClick(e){
    e.preventDefault();
    hashHistory.push(`/home`)
  }

  render() {
    return(
      <div>
        <div className="navigation-bar">
          <img className="interest-me-logo"
            onClick={this.handleLogoImageClick}
            src="http://res.cloudinary.com/andoo/image/upload/v1484187051/Logomakr_2W78HQ_k95ah7.png"
            alt="Interest Me!">
          </img>
          <div className="flex-searchbar">
          </div>
          <div className="session-button-container">
            <SessionContainer/>
          </div>
        </div>
      </div>
    )
  }
}
