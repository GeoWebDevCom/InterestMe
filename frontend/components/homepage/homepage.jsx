import React from 'react';
import Masonry from 'react-masonry-component'
import Modal from 'react-modal';
import PinContainer from '../pins/pins_container'
import ReactHeight from 'react-height'

export default class Homepage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      pinsReceieved: false,
      modalIsOpen: false,
      focusedPinId: null
    }
    document.body.style.overflow = "auto";
    this.handleTileClick = this.handleTileClick.bind(this);
    this.pinTileRender = this.pinTileRender.bind(this);
    this.masonryLayout = this.masonryLayout.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSelfClose = this.handleSelfClose.bind(this);
    this.findImageHeight = this.findImageHeight.bind(this);
  }

  componentWillReceiveProps(){
    if (this.props.pins.pins.length >= document.images.length){
      this.findImageHeight()
    }
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    document.body.style.overflow = "auto";
  }

  componentWillMount(){
    this.props.getHome()
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
              <button
                className="board-tile-pic-hide"
                name={tile.id}
                onClick={(e) => this.handleTileClick(e)}
                >
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
    //multiple divs to fix weird bug
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

  findImageHeight(){
    let counter = 0;
    this.imageHeight = setTimeout( () => {
      switch(counter){
        case 0:
        let allImages = document.images
        for (let i=0; i < allImages.length; i++){
          allImages[i].setAttribute("style", `height:${allImages[i].naturalHeight}`)
        }
        case 3:
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
    }, 800)
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    document.body.style.overflow = "auto";
  }

  handleSelfClose(){
    this.setState({modalIsOpen: false})
    document.body.style.overflow = "auto";
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
        <PinContainer
          handleSelfClose={this.handleSelfClose}
          pinId={this.state.focusedPinId}
          />
      </Modal>
    )
  }

  render(){
    return(
      <div>
        <div className="homepage-welcome">
          Discover something interesting
        </div>
        {
          this.props.pins.pins.length >= document.images.length ?
          this.findImageHeight() : null
        }
        {this.masonryLayout()}
        {this.pinShow()}
      </div>
    )
  }
}
