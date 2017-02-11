import React from 'react';
import Masonry from 'react-masonry-component'
import Modal from 'react-modal';
import BoardEditContainer from './board_edit_container'
import PinContainer from '../pins/pins_container'
import PinNewContainer from '../pins/pin_new_container'
import Dropzone from 'react-dropzone'
import {hashHistory} from 'react-router'

export default class Board extends React.Component {

  constructor(props) {
    super(props)
    this.state= {
      modalIsOpen: false,
      focusedPinId: null,
      pin: null,
      owner:this.props.board.owner,
      newPinFormOpen: false,
      finishedLoading: false,
      imageUrl: null,
      editFormOpen: false
    }
    document.body.style.overflow = "auto"
    this.handleTileClick = this.handleTileClick.bind(this);
    this.pinTileRender = this.pinTileRender.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSelfClose = this.handleSelfClose.bind(this);
    this.handleBoardEditSubmit = this.handleBoardEditSubmit.bind(this);
    this.handleEditButtonOpen = this.handleEditButtonOpen.bind(this);
    this.openNewPinForm = this.openNewPinForm.bind(this);
    this.redirectToAuthorProfile = this.redirectToAuthorProfile.bind(this);
  }

  handleChildCancelButton(){
    this.closeModal()
  }

  componentDidMount(){
    this.findImageHeight()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.boardId !== nextProps.boardId){
      this.props.getBoard(nextProps.boardId)
      this.props.getPins(nextProps.boardId)
    }
    if (this.props.pins.pins.length >= document.images.length){
      this.findImageHeight()
    }
  }

  componentWillMount() {
    this.props.getPins(this.props.boardId)
    this.props.getBoard(this.props.boardId)
  }

  handleTileClick(e) {
    e.preventDefault();
    const idx = e.currentTarget.name
    this.setState({focusedPinId: idx, modalIsOpen: true})
    document.body.style.overflow = "hidden";
  }

  pinTileRender(){
    return(
      this.props.pins.pins.map( (tile, idx) => {
        return(
          <div key={idx} className="pin-tile-container-hide">
            <button className="board-tile-pic-hide" name={tile.id} onClick={(e) => this.handleTileClick(e)}>
              <img className="pin-image-hide" src={tile.image_url}/>
            </button>
            <div className="pin-tile-content">
              <div className="pin-tile-author-container">
                <div className="pin-tile-author-name">
                  {this.props.boards.pinAuthorInfo[idx][0]}
                </div>
                <div className="pin-tile-author-profile-picture-container">
                  <img
                    className="pin-tile-author-profile-picture"
                    src={this.props.boards.pinAuthorInfo[idx][1]}/>
                </div>
              </div>
              <div>

              </div>
            </div>
          </div>
        )
      })
    )
  }

  masonryLayout(){
    var masonryOptions = {
      fitWidth: true
    };
    return (
      <div>
        <div>
          <div>
            <Masonry
              elementType={'div'}
              disableImagesLoaded={false}
              className='board'
              options={masonryOptions}
              >
              {this.pinTileRender()}
            </Masonry>
        </div>
      </div>
    </div>
    )
  }

  boardAuthor(){
    return (
      <button className="board-name-author-link" onClick={this.redirectToAuthorProfile}>
        {this.props.board.owner ? "you" : this.props.board.author}
      </button>
    )
  }

  redirectToAuthorProfile(e){
    e.preventDefault()
    hashHistory.replace(`/user/${this.props.board.owner_id}`)
  }

  handleBoardEditSubmit(){
    this.props.getBoard(this.props.boardId)
  }

  closeModal() {
    this.setState({modalIsOpen: false, newPinFormOpen: false, editFormOpen: false});
    document.body.style.overflow = "auto";
  }

  handleSelfClose(){
    this.props.getPins(this.props.board.id)
    this.setState({modalIsOpen: false, newPinFormOpen: false})
    document.body.style.overflow = "auto";
  }

  boardTitle(){
    return(
      <div className="board-overhead-bar-container">
        <div className="board-overhead-bar">
          <a id="board-name">
            {this.props.board.name}
          </a>
          <div className="author-edit-flexbox">
            <a id="board-author">a board by {this.props.board ? this.boardAuthor() : null} </a>
            <div className="owner-edit-buttons">
              {this.props.board.owner?
                <button className="board-edit-button" onClick={this.handleEditButtonOpen}>
                  <i className="fa fa-cog fa-2x" aria-hidden="true"></i>
                </button>
                 : null }
            </div>
          </div>
        </div>
      </div>
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
        <PinContainer pinId={this.state.focusedPinId} handleSelfClose={this.handleSelfClose}/>
      </Modal>
    )
  }

  openNewPinForm(){
    return(
      <Modal
        isOpen={this.state.newPinFormOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        contentLabel="Session form"
        className="new-pin-modal ReactModal__Content"
        >
          <PinNewContainer
            selfClose={this.handleSelfClose}
            {...this.props}
          />
      </Modal>
    )
  }

  handleEditButtonOpen(){
    this.setState({editFormOpen: true})
  }

  openEditBoardForm(){
    return(
      <Modal
        isOpen={this.state.editFormOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        contentLabel="Session form"
        className="board-edit-modal"
        >
        <BoardEditContainer handleSelfClose={this.closeModal} {...this.props}/>
      </Modal>
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
          "pin-image-hide",
          "pin-tile-container-hide"
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
    }, 1500)
  }


  render() {
    return (
      <div>
        {this.boardTitle()}
        {this.masonryLayout()}
        {this.pinShow()}
        { this.state.newPinFormOpen ?
          this.openNewPinForm()
        : null }
        { this.state.editFormOpen ?
           this.openEditBoardForm()
         : null}
      </div>
    )
  }
}
