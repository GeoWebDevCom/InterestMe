import React from 'react';
import Masonry from 'react-masonry-component'
import Modal from 'react-modal';
import BoardEditContainer from './board_edit_container'
import PinContainer from '../pins/pins_container'
import PinNewContainer from '../pins/pin_new_container'
import Dropzone from 'react-dropzone'

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
    }
    document.body.style.overflow = "auto"
    this.handleTileClick = this.handleTileClick.bind(this);
    this.pinTileRender = this.pinTileRender.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleOpenNewPin = this.handleOpenNewPin.bind(this);
    this.handleSelfClose = this.handleSelfClose.bind(this);
    this.handleBoardEditSubmit = this.handleBoardEditSubmit.bind(this);
    this.handleEditButtonOpen = this.handleEditButtonOpen.bind(this);
    this.openNewPinForm = this.openNewPinForm.bind(this);
    this.setImageHeight = this.setImageHeight.bind(this);
    this.revealImages = this.revealImages.bind(this);
  }

  handleChildCancelButton(){
    this.closeModal()
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
    this.props.getPins(this.props.boardId);
    this.props.getBoard(this.props.boardId)
    .then( () => {this.setImageHeight()})
    .then( () => {this.revealImages()})
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

  boardText(){
    return this.props.board.owner ? "you" : this.props.board.author
  }

  handleOpenNewPin(){
    this.setState({newPinFormOpen: true})
  }

  handleBoardEditSubmit(){
    this.props.getBoard(this.props.boardId)
  }

  handleEditButtonOpen(){
    if (this.state.editFormOpen) {
      this.setState({editFormOpen: false})
    } else {
      this.setState({editFormOpen: true})
    }
  }

  closeModal() {
    this.setState({modalIsOpen: false, newPinFormOpen: false});
    document.body.style.overflow = "auto";
  }

  handleSelfClose(){
    this.props.getPins(this.props.board.id)
    this.setState({modalIsOpen: false, newPinFormOpen: false})
    document.body.style.overflow = "auto";
  }

  boardTitle(){
    return(
      <div className="board-overhead-bar">
        {this.props.board.owner ? <button onClick={this.handleOpenNewPin}>new pin</button> : null}
        <a id="board-name">
          {this.props.board.name}
        </a>
        <div className="author-edit-flexbox">
          <a id="board-author">a board by {this.props.board ? this.boardText() : null} </a>
          <div className="owner-edit-buttons">
            {this.props.board.owner? <button onClick={this.handleEditButtonOpen}>edit</button> : null }
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

  setImageHeight(){
    let allImages = document.images
    for (let i=0; i < allImages.length; i++){
      allImages[i].setAttribute("style", `height:${allImages[i].naturalHeight}`)
    }
  }

  revealImages(){
    [
      "pin-tile-hide",
      "board-tile-pic-hide",
      "pin-image-hide"
    ].forEach( (className) => {
      let classes = document.getElementsByClassName(`${className}`);
      while (classes.length){
        classes[0].className = classes[0].className.replace("-hide","")
      }
    })
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
           <BoardEditContainer updateBoard={this.handleBoardEditSubmit} {...this.props}/>
         : null}
      </div>
    )
  }
}
