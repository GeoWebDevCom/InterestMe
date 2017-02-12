import React from 'react';
import Modal from 'react-modal';
import PinEditContainer from './pin_edit_container'
import {hashHistory} from 'react-router';

export default class Pin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editFormOpen: false,
      receivedPin: false,
      hasBeenDeleted: false
    };
    this.pinModal = this.pinModal.bind(this);
    this.handleEditButton = this.handleEditButton.bind(this);
    this.editPinModal = this.editPinModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.editButton = this.editButton.bind(this);
    this.childHandler = this.childHandler.bind(this);
    this.handleBoardNameClick = this.handleBoardNameClick.bind(this);
    this.redirectToProfile = this.redirectToProfile.bind(this);
    this.pinAuthor = this.pinAuthor.bind(this);
  }

  componentWillReceiveProps(nextProps){

  }

  componentDidMount() {

    this.props.getPin(this.props.pinId).then(() => {
      this.setState({receivedPin: true})
    })
  }

  handleEditButton() {
    if (this.state.editFormOpen){
      this.setState({editFormOpen: false})
    } else {
      this.setState({editFormOpen: true})
    }
  }

  editButton(){
    return (
        <button id="pin-edit-icon" onClick={this.handleEditButton}>
          edit
        </button>
    )
  }

  closeModal() {
    this.setState({
      editFormOpen: false});
  }

  childHandler() {
    this.closeModal();
    console.log("ASdfasdf");
    this.props.handleSelfClose()
  }

  editPinModal() {
    return(
      <Modal
        isOpen={this.state.editFormOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        contentLabel="Modal"
        className="ReactModal__Content__Pin"
      >
        <PinEditContainer handleChildCancelButton={this.childHandler} {...{pinId: this.props.pinId, boardId: this.props.pin.pins.pins.board_id}}/>
      </Modal>
    )
  }

  handleBoardNameClick(e){
    this.props.handleSelfClose()
    debugger
    e.preventDefault()
    hashHistory.push(`/boards/${this.props.pin.pins.pins.board_id}`)
    document.body.style.overflow = "auto"
  }

  pinModal(){
    //add favorites!?
    return(
      <div className="modal-container">
        <div className="pin-show-modal-content-container">
          <div className="pin-show-header-container">
            <div className="pin-show-title-board-name-container">
              <div className="pin-show-title-container">
                <b id="pin-title">{this.props.pin.pins.pins.title}</b>
              </div>
              <div className="pin-show-pin-info-save-button-container">
                <div className="pin-show-board-name-edit-button-container">
                  <div className="important-text">
                    <button className="pin-show-board-name" onClick={this.handleBoardNameClick}>
                      {this.props.pin.pins.pins.board_name}
                    </button>
                  </div>
                  <div className="pin-show-edit-button-container">
                    {this.props.pin.pins.pins.owner ?
                      <i
                        className="fa fa-cog fa-2x edit-modal-cog"
                        aria-hidden="true"
                        onClick={this.handleEditButton}>
                      </i>
                      :
                      null
                    }
                  </div>
                </div>
                <div className="pin-show-save-button-container">

                </div>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img className= "pin-modal-image" src={this.props.pin.pins.pins.image_url}></img>
          </div>
          <div className="pin-show-description-user-container">
            <div className="pin-show-user-name-picture-container">
              <div className="pin-show-profile-picture-container">
                <img className="pin-show-profile-picture"
                  src={this.props.pin.pins.pins.authorProfilePicture}
                  onClick={this.redirectToProfile}
                  />
              </div>
              <div className="pin-show-author-name-container">
                <button className="pin-author-button" onClick={this.redirectToProfile}>
                  {this.props.pin.pins.pins.owner ? "you" : this.props.pin.pins.pins.author }
                </button>
              </div>
            </div>
            <div className="pin-show-description-container">
              {this.props.pin.pins.pins.body}
            </div>
            <div>
              {this.state.editFormOpen ? this.editPinModal() : null}
            </div>
          </div>
        </div>
      </div>
    )
  }

  redirectToProfile(e){
    e.preventDefault()
    this.props.handleSelfClose()
    hashHistory.push(`/user/${this.props.pin.pins.pins.author_id}`)
  }

  pinAuthor(){
    return (
      <div className="link-set">
        <button className="pin-author-button" onClick={this.redirectToProfile}>
          {this.props.pin.pins.pins.owner ? "you" : this.props.pin.pins.pins.author }
        </button>
        {this.props.pin.pins.pins.owner ? <button id="pin-edit-icon" onClick={this.handleEditButton}>
            edit
          </button> : null }
      </div>
    )
  }

  render() {

    return(
      <div>
        {this.state.receivedPin ? this.pinModal() : null}
      </div>
    )
  }
}
