import React from 'react';
import {hashHistory} from 'react-router';
import Modal from 'react-modal';
import PinContainer from '../pins/pins_container';
import UserProfileFormContainer from './user_profile_form_container';

export default class UserProfile extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      doneLoading: false,
      selectPinTab: false,
      selectBoardTab: true,
      modalIsOpen: false,
      focusedPinId: null,
      editFormOpen: false,
      followerModalOpen: false,
      followedModalOpen: false,
      isFollowing: false
    }

    this.showPins = this.showPins.bind(this);
    this.showBoards = this.showBoards.bind(this);
    this.userInfo = this.userInfo.bind(this);
    this.handleBoardClick = this.handleBoardClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleTileClick = this.handleTileClick.bind(this);
    this.handlePinTabClick = this.handlePinTabClick.bind(this);
    this.handleBoardTabClick = this.handleBoardTabClick.bind(this);
    this.handleEditForm = this.handleEditForm.bind(this);
    this.closeEditModal = this.closeEditModal.bind(this);
    this.handleFollowerClick = this.handleFollowerClick.bind(this);
    this.followed = this.followed.bind(this);
    this.handleFollowedClick = this.handleFollowedClick.bind(this);
    this.handleProfileRedirect = this.handleProfileRedirect.bind(this);
    this.handleFollowActionClick = this.handleFollowActionClick.bind(this);
    this.followButton = this.followButton.bind(this);
    this.isProfileOwner = this.isProfileOwner.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.userId !== nextProps.userId) {
      this.props.getProfilePage(nextProps.userId)
    }
  }

  closeModal() {
    this.setState({modalIsOpen: false, editFormOpen: false, followerModalOpen: false, followedModalOpen: false});
    this.props.getProfilePage(this.props.userId)
    document.body.style.overflow = "auto";
  }

  componentWillMount(){
    this.props.getProfilePage(this.props.userId)
    .then( () => {
      this.setState({doneLoading: true, isFollowing: this.props.user.isFollowing})
    })
  }

  handleSelfClose(){
    this.setState({modalIsOpen: false})
  }

  handleTileClick(e) {
    e.preventDefault();
    const idx = e.currentTarget.name
    this.setState({focusedPinId: idx, modalIsOpen: true})
    document.body.style.overflow = "hidden";
  }

  handleBoardClick(e){
    e.preventDefault()
    const boardId = e.currentTarget.name
    hashHistory.push(`/boards/${boardId}`)
  }

  handleBoardTabClick(){
    if (!this.state.selectBoardTab){
      this.setState({selectPinTab: false, selectBoardTab: true})
    }
  }

  handlePinTabClick(){
    if (!this.state.selectPinTab){
      this.setState({selectPinTab: true, selectBoardTab: false})
    }
  }

  handleEditForm(){
    console.log("edit form open");
    this.setState({editFormOpen: true})
  }

  closeEditModal(){
    this.setState({editFormOpen: false})
  }

  handleProfileRedirect(e){
    e.preventDefault()
    this.closeModal()
    const userId = e.currentTarget.name
    hashHistory.push(`/user/${userId}`)
  }


  handleFollowedClick(){
    this.setState({followedModalOpen : true})
  }

  handleFollowerClick(){
    this.setState({followerModalOpen : true})
  }

  handleFollowActionClick(e){
    e.preventDefault()
    if (this.state.isFollowing){
      this.props.deleteFollow({user_following_id: this.props.user.currentUserId,
      user_followed_by_id: parseInt(this.props.user.user.id)})
      this.setState({isFollowing: false})
    } else {
      this.props.createFollow({user_following_id: this.props.userId,
      user_followed_by_id: this.props.user.currentUserId})
      this.setState({isFollowing: true})
    }
  }

  isProfileOwner(){
    return this.props.user.user.id == this.props.user.currentUserId
  }

  followButton(){
    return (
      <button onClick={this.handleFollowActionClick}>
        { this.state.isFollowing ? "unfollow" : "follow" }
      </button>
    )
  }


  showPins(){
    return(
      this.props.user.pins.map( (pin, idx) => {
        return(
          <button name={pin.id} onClick={(e) => this.handleTileClick(e)} className="user-profile-pins" key={idx}>
            <img className="user-profile-pin-img" key={idx} src={pin.image_url}/>
          </button>
        )
      })
    )
  }

  showBoards(){
    return(
      this.props.user.boards.map ((board, idx)=> {
        return (
          <button name={board.id} onClick={(e) => this.handleBoardClick(e)} className="user-profile-board-button" key={idx}>
            {board.name}
          </button>
        )
      })
    )
  }

  followers(){
    return(
      this.props.user.following.map( (user, idx) => {
        return(
        <li key={idx} className="followers-modal">
          <button name={user.id} onClick={this.handleProfileRedirect} className="follow-user-button">
            <img src={user.profile_picture}/>
              <a className="follow-username">
                {user.username}
              </a>
          </button>
        </li>
        )
      })
    )
  }

  followed(){
    return(
      this.props.user.followed.map( (user, idx) => {
        return(
        <li key={idx} className="followers-modal">
          <button name={user.id} onClick={this.handleProfileRedirect} className="follow-user-button">
            <img src={user.profile_picture}/>
            <a className="follow-username">
              {user.username}
            </a>
          </button>
        </li>
        )
      })
    )
  }

  userInfo(){
    return(
      <div className="user-info">
        <div className="username-image">
          {this.isProfileOwner() ?
            null :
            this.followButton()}
          <img src={this.props.user.user.profile_picture}/>
          {this.props.user.user.username}
          <a className="profile-email">{this.props.user.user.email}</a>
          <button className="edit-user-button" onClick={this.handleEditForm}>
            edit user
          </button>
        </div>
      </div>
    )
  }

  render(){
    return(
      <div className="user-profile">
        <div className="user-profile-body">
          {this.state.doneLoading ? this.userInfo() :null}
          <div className="followers">
            <button className="follow-button" onClick={this.handleFollowedClick}>
              followers
            </button>
              <button className="follow-button" onClick={this.handleFollowerClick}>
              followed
            </button>
            <Modal
              isOpen={this.state.followerModalOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              contentLabel="Session form"
              className="followed-follower-modal ReactModal__Content"
              >
                {this.state.doneLoading ? this.followers() : null}
            </Modal>

            <Modal
              isOpen={this.state.followedModalOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              contentLabel="Session form"
              className="followed-follower-modal ReactModal__Content"
              >
                {this.followed()}
            </Modal>
          </div>
        </div>
        <div className="user-profile-buttons-bar">
          <div className="tab-block">
          <button className="profile-tab-button" onClick={this.handleBoardTabClick}>Boards</button>
          <button className="profile-tab-button" onClick={this.handlePinTabClick}>Pins</button>
        </div>
        </div>
        <div>
          <div className="board-pin-underbar">
              {this.state.selectBoardTab && this.state.doneLoading ? this.showBoards() : null }
              {this.state.selectPinTab && this.state.doneLoading ? this.showPins() : null }
            </div>
        </div>

        <Modal
          isOpen={this.state.editFormOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Modal"
          className="user-profile-update-picture-modal"
        >
        {<UserProfileFormContainer {...this.props} handleSelfClose={this.closeModal} userId={this.props.userId}/>}
        </Modal>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Modal"
          className="ReactModal__Content"
        >
          {<PinContainer pinId={this.state.focusedPinId} handleSelfClose={this.closeModal}/> }
        </Modal>
      </div>
    )
  }
}
