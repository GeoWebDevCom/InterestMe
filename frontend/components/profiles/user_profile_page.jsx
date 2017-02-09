import React from 'react';
import {hashHistory} from 'react-router';
import Modal from 'react-modal';
import PinContainer from '../pins/pins_container';
import UserProfileFormContainer from './user_profile_form_container';
import Masonry from 'react-masonry-component'


export default class UserProfile extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      doneLoading: false,
      selectPinTab: false,
      selectBoardTab: false,
      modalIsOpen: false,
      focusedPinId: null,
      editFormOpen: false,
      followerOPen: false,
      followedOpen: false,
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
    this.setState({modalIsOpen: false, editFormOpen: false, followerOPen: false, followedOpen: false});
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


  handleBoardTabClick(){
      this.setState({selectPinTab: false, selectBoardTab: true, followedOpen: false, followerOPen: false})
  }

  handlePinTabClick(){
      this.setState({selectPinTab: true, selectBoardTab: false, followedOpen: false, followerOPen: false})
      this.findImageHeight()
  }
  handleFollowedClick(){
    this.setState({selectPinTab: false, selectBoardTab: false, followedOpen: true, followerOPen: false})
  }

  handleFollowerClick(){
    this.setState({selectPinTab: false, selectBoardTab: false, followedOpen: false, followerOPen: true})
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

  pinTileRender(){
    return(
      this.props.user.pins.map( (tile, idx) => {
        return(
          <li key={idx} className="pin-tile-hide">
            <button className="board-tile-pic-hide" name={tile.id} onClick={(e) => this.handleTileClick(e)}>
              <img className="pin-image-hide" src={tile.image_url}/>
            </button>
          </li>
        )
      })
    )
  }

  masonryLayout(){
    var masonryOptions = {
      fitWidth: true,
      transitionDuration: 0.3
    };
    return (
      <div className='user-profile-board-pins'>
        <div>
          <div>
            <Masonry
              elementType={'div'}
              disableImagesLoaded={false}
              className='user-profile-boards-container'
              options={masonryOptions}
              >
              {this.pinTileRender()}
            </Masonry>
        </div>
      </div>
    </div>
    )
  }

  findImageHeight(){
    let counter = 0;
    this.imageHeight = setTimeout( () => {
      switch(counter){
        case 0:
        let allImages = document.images
        for (let i=0; i < allImages.length; i++){
          allImages[i].setAttribute("style", `height:${allImages[i].naturalHeight}`)
        }
        case 1:
        [
          "pin-tile-hide",
          "board-tile-pic-hide",
          "pin-image-hide"
        ].forEach( (className) => {
          let classes = document.getElementsByClassName(`${className}`);
          while (classes.length){
            classes[0].className = classes[0].className.replace("-hide","")
          }
          debugger
          clearInterval(this.imageHeight)
          return
        })
        counter += 1
      }
    }, 500)
  }

  boardImage(){

  }

  showBoards(){
    return(
      this.props.user.boards.map ((board, idx)=> {
        return (
          <div className="board-button-set">
            <button name={board.id} onClick={(e) => this.handleBoardClick(e)} className="user-profile-board-button" key={idx}>
              <div className="user-profile-board-images">
                <div className="user-profile-main-image-board-pin-container">
                  <img className="user-profile-main-image-board-pin" src={this.props.user.samplePins[idx][0]}/>
                </div>
                <div className="user-profile-sub-image-board-pin-container">
                  <img className="user-profile-main-board-pin" src={this.props.user.samplePins[idx][1]}/>
                  <img className="user-profile-sub-image-board-pin" src={this.props.user.samplePins[idx][2]}/>
                </div>
              </div>
            </button>
            <span className="board-title">
              {board.name}
            </span>
          </div>
        )
      })
    )
  }

  boardsAndCreateBoard(){
    return(
      <div className="user-profile-board-show">
        <button className="user-profile-board-button">
          Create a new board
        </button>
        {this.showBoards()}
      </div>
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

  pictureUpdateForm(){
    return(
      <Modal
        isOpen={this.state.editFormOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        contentLabel="Modal"
        className="user-profile-update-picture-modal"
      >
        {<UserProfileFormContainer {...this.props} handleSelfClose={this.closeModal} userId={this.props.userId}/>}
      </Modal>
    )
  }

  pinShow(){
    return(
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        contentLabel="Modal"
        className="ReactModal__Content"
      >
        {<PinContainer pinId={this.state.focusedPinId} handleSelfClose={this.closeModal}/> }
      </Modal>
    )
  }

  render(){
    return(
      <div className="user-profile">
        <div className="user-profile-body">
          {this.state.doneLoading ? this.userInfo() :null}
          <div className="followers">
          </div>
        </div>
        <div className="user-profile-buttons-bar">
          <button className="profile-tab-button" onClick={this.handleBoardTabClick}>Boards</button>
          <button className="profile-tab-button" onClick={this.handlePinTabClick}>Pins</button>
          <button className="profile-tab-button" onClick={this.handleFollowedClick}>
            followers
          </button>
          <button className="profile-tab-button" onClick={this.handleFollowerClick}>
            followed
          </button>
        </div>
        <div>
          <div className="board-pin-underbar">
              {this.state.followerOpen && this.state.doneLoading ? this.followers() : null}
              {this.state.followedOpen && this.state.doneLoading ? this.followed() : null}
              {this.state.selectBoardTab && this.state.doneLoading ? this.boardsAndCreateBoard() : null }
              {this.state.selectPinTab && this.state.doneLoading ? this.masonryLayout() : null }
            </div>
        </div>
          {this.state.doneLoading ? this.pictureUpdateForm() : null}
          {this.state.doneLoading ? this.pinShow() : null }
      </div>
    )
  }
}
