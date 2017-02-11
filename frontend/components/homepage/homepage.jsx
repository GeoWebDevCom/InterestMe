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


  closeModal() {
    this.setState({modalIsOpen: false});
    document.body.style.overflow = "auto";
  }

  componentDidMount(){
    this.props.getHome()
  }

  componentWillMount(){
    this.props.getHome().then( () => {
      this.findImageHeight()
    } )
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
            <button
              className="board-tile-pic-hide"
              name={tile.id}
              onClick={(e) => this.handleTileClick(e)}
              >
              <img className="pin-image-hide" src={tile.image_url}/>
            </button>
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
              className='homepage-board'
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
        </div>
        {this.masonryLayout()}
        {this.pinShow()}
      </div>
    )
  }
}
