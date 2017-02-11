import React from 'react';
import {hashHistory} from 'react-router';
import Modal from 'react-modal';
import PinContainer from '../pins/pins_container';
import UserProfileFormContainer from './user_profile_form_container';
import Masonry from 'react-masonry-component'
import NewBoardContainer from '../boards/board_new_container'

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
      followerOpen: false,
      followedOpen: false,
      isFollowing: false,
      pinButtonFocus: false,
      boardButtonFocus: true,
      followerButtonFocus: false,
      followedButtonFocus: false,
      followStateChanged: false,
      showNewBoardForm: false,
      newBoardModalIsOpen: false
    }
    document.body.style.overflow = "auto";
    this.newBoardModal= this.newBoardModal.bind(this);
    this.showPins = this.showPins.bind(this);
    this.showBoards = this.showBoards.bind(this);
    this.userInfo = this.userInfo.bind(this);
    this.handleBoardClick = this.handleBoardClick.bind(this);
    this.handleTileClick = this.handleTileClick.bind(this);
    this.handlePinTabClick = this.handlePinTabClick.bind(this);
    this.handleBoardTabClick = this.handleBoardTabClick.bind(this);
    this.handleEditForm = this.handleEditForm.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleFollowerClick = this.handleFollowerClick.bind(this);
    this.followed = this.followed.bind(this);
    this.handleFollowedClick = this.handleFollowedClick.bind(this);
    this.handleProfileRedirect = this.handleProfileRedirect.bind(this);
    this.handleFollowActionClick = this.handleFollowActionClick.bind(this);
    this.followButton = this.followButton.bind(this);
    this.isProfileOwner = this.isProfileOwner.bind(this);
    this.handleNewBoardClick = this.handleNewBoardClick.bind(this)
  }

  componentWillReceiveProps(nextProps){
    if (this.props.userId !== nextProps.userId) {
      this.props.getProfilePage(nextProps.userId)
    }
    if (this.state.followStateChanged){
      this.props.getProfilePage(nextProps.userId).then( () => {
        this.setState({followStateChanged: false})
      })
    }
  }

  closeModal() {
    this.setState({modalIsOpen: false, editFormOpen: false, followerOpen: false, followedOpen: false});
    this.props.getProfilePage(this.props.userId)
    document.body.style.overflow = "auto";
  }

  componentDidMount(){
    this.props.getProfilePage(this.props.userId)
  }

  componentWillMount(){
    this.props.getProfilePage(this.props.userId)
    .then( () => {
      this.setState({doneLoading: true, isFollowing: this.props.user.isFollowing})
    })
  }

  handleSelfClose(){
    this.setState({modalIsOpen: false, newBoardModalIsOpen: false})
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

  closeModal(){
    this.setState({modalIsOpen: false, editFormOpen: false, newBoardModalIsOpen: false})
  }

  handleProfileRedirect(e){
    e.preventDefault()
    this.closeModal()
    const userId = e.currentTarget.name
    hashHistory.push(`/user/${userId}`)
  }


  handleBoardTabClick(){
    if (this.state.selectBoardTab){
      this.setState({
        selectBoardTab: false,
        boardButtonFocus: false
      })
    } else {
      this.setState({
        selectPinTab: false,
        selectBoardTab: true,
        followedOpen: false,
        followerOpen: false,
        boardButtonFocus: true,
        pinButtonFocus: false,
        followerButtonFocus: false,
        followedButtonFocus: false
      })
    }
  }

  handlePinTabClick(){
    if (this.state.selectPinTab){
      this.setState({
        selectPinTab: false,
        pinButtonFocus: false
      })
    } else {
      this.setState({selectPinTab: true,
        selectBoardTab: false,
        followedOpen: false,
        followerOpen: false,
        boardButtonFocus: false,
        pinButtonFocus: true,
        followerButtonFocus: false,
        followedButtonFocus: false
      })
      this.findImageHeight()
    }
  }

  handleFollowedClick(){
    if (this.state.followedOpen){
      this.setState({
        followedOpen: false,
        followedButtonFocus: false
      })
    } else {
      this.setState({
        selectPinTab: false,
        selectBoardTab: false,
        followedOpen: true,
        followerOpen: false,
        boardButtonFocus: false,
        pinButtonFocus: false,
        followerButtonFocus: false,
        followedButtonFocus: true
      })
    }
  }

  handleFollowerClick(){
    if (this.state.followerOpen){
      this.setState({
        followerOpen: false,
        followerButtonFocus: false
      })
    } else {
      this.setState({
        selectPinTab: false,
        selectBoardTab: false,
        followedOpen: false,
        followerOpen: true,
        boardButtonFocus: false,
        pinButtonFocus: false,
        followerButtonFocus: true,
        followedButtonFocus: false
      })
    }
  }

  handleFollowActionClick(e){
    e.preventDefault()
    if (this.state.isFollowing){
      this.props.deleteFollow({user_following_id: this.props.user.currentUserId,
      user_followed_by_id: parseInt(this.props.user.user.id)})
      .then( () => {
        this.props.getProfilePage(this.props.userId)
      })
      this.setState({isFollowing: false, followStateChanged: true})
    } else {
      this.props.createFollow({user_following_id: this.props.userId,
      user_followed_by_id: this.props.user.currentUserId})
      .then( () => {
        this.props.getProfilePage(this.props.userId)
      })
      this.setState({isFollowing: true, followStateChanged: true})
    }
  }

  isProfileOwner(){
    return this.props.user.user.id === this.props.user.currentUserId
  }

  followButton(){
    return (
      <button className="profile-follow-button" onClick={this.handleFollowActionClick}>
        { this.props.user.isFollowing ? "unfollow" : "follow" }
      </button>
    )
  }


  showPins(){
    return(
      this.props.user.pins.map( (pin, idx) => {
        return(
          <button key={idx} name={pin.id} onClick={(e) => this.handleTileClick(e)} className="user-profile-pins" key={idx}>
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
      fitWidth: true
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
          clearInterval(this.imageHeight)
          return
        })
        counter += 1
      }
    }, 500)
  }

  showBoards(){
    return(
      this.props.user.boards.map ((board, idx)=> {
        return (
          <li key={idx} className="board-button-set">
            <button name={board.id} onClick={(e) => this.handleBoardClick(e)} className="user-profile-board-button" key={idx}>
              <div className="user-profile-board-images">
                <div className="user-profile-first-pic-container">
                  <img src={this.props.user.samplePins[idx][0]}/>
                </div>
                <div className="user-profile-sub-image-board-pin-container">
                  <div className="sub-image-single-pic-container">
                    <img src={this.props.user.samplePins[idx][1]}/>

                  </div>
                  <div className="sub-image-single-pic-container">
                    <img src={this.props.user.samplePins[idx][2]}/>
                  </div>
                </div>
              </div>
            </button>
            <div className="board-title">
              {board.name}
            </div>
          </li>
        )
      })
    )
  }

  handleNewBoardClick(e){
    e.preventDefault()
    this.setState({showNewBoardForm: true, newBoardModalIsOpen: true})
  }

  boardMasonryLayout(){
    var masonryOptions = {
      fitWidth: true
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
              <li className="board-button-set">
                <button className="user-profile-board-button" onClick={this.handleNewBoardClick}>
                  <div className="add-new-board-container">
                    <i className="fa fa-plus fa-1x" aria-hidden="true"></i>
                    <div className="create-new-board-text">
                      Create a new Board
                    </div>
                  </div>
                </button>
                <div className="board-title-invisible">
                  sdfdsag
                </div>
              </li>
              {this.showBoards()}
            </Masonry>
        </div>
      </div>
    </div>
    )
  }

  newBoardModal(){
    return (
      <div>
        {
          this.state.showNewBoardForm ?
          <Modal
            isOpen={this.state.newBoardModalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Modal"
            className="board-new-modal"
            >
            <NewBoardContainer handleSelfClose={this.closeModal}/>
          </Modal>
          : null
        }
      </div>
    )
  }

  followers(){
    return (
      this.props.user.followed.map( (user, idx) => {
        return (
        <div key={idx} className="followers-modal">
          <button name={user.id} onClick={this.handleProfileRedirect} className="follow-user-button">
            <img className="follow-button-image" src={user.profile_picture}/>
              <a className="follow-username">
              </a>
          </button>
          {user.username}
        </div>
        )
      })
    )
  }

  followed(){
    return (
      this.props.user.following.map( (user, idx) => {
        return (
        <div key={idx} className="followers-modal">
          <button name={user.id} onClick={this.handleProfileRedirect} className="follow-user-button">
            <img className="follow-button-image" src={user.profile_picture}/>
            <a className="follow-username">
            </a>
          </button>
          {user.username}
        </div>
        )
      })
    )
  }

  userInfo(){
    return(
      <div className="user-info">
        <div className="username-image">
          <img className="profile-picture" src={this.props.user.user.profile_picture}/>
          <a className="profile-email">{this.props.user.user.email}</a>
          {this.isProfileOwner() ?
            <button className="edit-user-button" onClick={this.handleEditForm}>
              edit user
            </button>
            :
            null
          }
          {this.isProfileOwner() ?
            null :
            this.followButton()}
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
    console.log(this.props);
    return(
      <div className="user-profile">
        <div className="user-profile-body">
          {this.state.doneLoading ? this.userInfo() :null}
          <div className="user-profile-description">
            <div className="user-profile-username">
              {this.state.doneLoading ? this.props.user.user.username : null}
            </div>
            {this.state.doneLoading ? this.props.user.user.description : null}
          </div>
        </div>
        <div className="user-profile-buttons-bar-container">
          <div className="user-profile-buttons-bar">
            <button className={this.state.boardButtonFocus ? "profile-tab-button-active" :"profile-tab-button-inactive"} onClick={this.handleBoardTabClick}>
              Boards
            </button>
            <button className={this.state.pinButtonFocus ? "profile-tab-button-active" :"profile-tab-button-inactive"} onClick={this.handlePinTabClick}>
              Pins
            </button>
            <button className={this.state.followerButtonFocus ? "profile-tab-button-active" :"profile-tab-button-inactive"} onClick={this.handleFollowerClick}>
              Followers
            </button>
            <button className={this.state.followedButtonFocus ? "profile-tab-button-active" :"profile-tab-button-inactive"} onClick={this.handleFollowedClick}>
              Followed
            </button>
          </div>
        </div>
        <div>
          <div className="board-pin-underbar">
              {this.state.followerOpen && this.state.doneLoading ? this.followers() : null}
              {this.state.followedOpen && this.state.doneLoading ? this.followed() : null}
              {this.state.selectBoardTab && this.state.doneLoading ? this.boardMasonryLayout() : null }
              {this.state.selectPinTab && this.state.doneLoading ? this.masonryLayout() : null }
            </div>
        </div>
        {this.newBoardModal()}
          {this.state.doneLoading ? this.pictureUpdateForm() : null}
          {this.state.doneLoading ? this.pinShow() : null }
      </div>
    )
  }
}
