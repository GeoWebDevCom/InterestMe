import React from 'react';
import {Router} from 'react-router';
import Dropzone from 'react-dropzone'
import request from 'superagent';
import BoardNewContainer from '../boards/board_new_container';
import Dropdown from 'react-dropdown'

const CLOUDINARY_PRESET = 'punlriir'
const CLOUDINARY_UPLOAD ='http://api.cloudinary.com/v1_1/andoo/upload'

export default class PinNewForm extends React.Component {
  constructor(){
    super()
    this.state = {
      imageUrl: null,
      body: "",
      title: "",
      pinEditing: true,
      doneLoading: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.previewImage = this.previewImage.bind(this);
  }

  handleDrop(img){
    let imgUploaded = img[0]
    let upload = request.post(CLOUDINARY_UPLOAD)
    .field('upload_preset', CLOUDINARY_PRESET)
    .field('file', img);
    upload.end((errors, results) => {
      if (errors === null) {
        this.setState({imageUrl: results.body.secure_url})
      } else {
        console.log("error uploading!");
      }
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.newPin({
      title: this.state.title,
      body: this.state.body,
      board_id: parseInt(this.props.boardId),
      image_url: this.state.imageUrl})
    this.setState( {imageUrl: false})
    this.props.selfClose()
  }

  update(text) {
    return e => this.setState({
      [text]: e.currentTarget.value
    });
  }

  previewImage() {
    return (
    <div className="original-filename">
      {this.state.imageUrl ? null :
        <div className="upload-mini-text">
          image preview
        </div>}
      { this.state.imageUrl ?
          <img className="pin-new-image-preview" src={this.state.imageUrl}/>
          : null}
      </div>
    )
  }

  componentWillMount(){
    let id = this.props.currentUser.currentUserId
    if (this.props.currentUser.currentUserId){
      id = this.props.currentUser.currentUserId
    } else if ( this.props.currentUser.currentUserId){
      id = this.props.currentUser.currentUserId
    } else {
      id = this.props.x.currentUserId
    }
    this.props.getProfilePage(parseInt(id))
    .then( () => {
      this.setState({doneLoading: true})
    })
  }

  dropZoneDropBox(){
    return (
      <Dropzone
        multiple={false}
        accept="image/*"
        onDrop={this.handleDrop}
        className="pin-new-image-preview"
      >
        {this.state.imageUrl ? this.previewImage() : "click or drag to add image"}
      </Dropzone>
    )
  }

  inputForm(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="new-pin-form">
          <a>Title</a>
            <br/><input onChange={this.update('title')}/><br/>
          <a>Body</a>
            <br/>
            <textarea className="new-pin-textarea"
              type="textarea"
              onChange={this.update('body')}
            />
          <br/>
          <div>
            {this.boardChoiceDropdown()}
          </div>
          <button type="Submit" value="Submit">Post</button>
        </div>
      </form>
    )
  }

  onSelect(){
    console.log("choices")
  }

  boardChoiceDropdown(){
    let newArr = []
    const options = this.selectBoardForNewPin()
    // for (let i = 0; i < options.length; )
    const defaultOption = options[0]
    debugger
    return (
      <Dropdown onChange={this.onSelect} options={options} value={defaultOption} placeholder="Select an option">
      </Dropdown>
    )
  }

  newBoardForm(){
    return (
      <BoardNewContainer/>
    )
  }

  selectBoardForNewPin(){
    let boards = this.props.x.boards
    return(
      boards.map((board, idx) => {
        return(
          <div>
            {board.name}
          </div>
        )
      })
    )
  }

  render() {
    // {this.state.doneLoading ? this.selectBoardForNewPin() : null}
    return (
      <div className="pin-new-content-in-box">
        <div className="pin-new-image-drop">
          {this.state.doneLoading ? this.dropZoneDropBox() : null}
        </div>
        <div className="pin-board-new-user-input">
           {this.state.doneLoading ? this.inputForm() : null}
        </div>
      </div>
    )
  }
}
