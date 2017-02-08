import React from 'react';
import {Router} from 'react-router';
import Dropzone from 'react-dropzone'
import request from 'superagent';
const CLOUDINARY_PRESET = 'punlriir'
const CLOUDINARY_UPLOAD ='http://api.cloudinary.com/v1_1/andoo/upload'

export default class PinNewForm extends React.Component {
  constructor(){
    super()
    this.state = {
      imageUrl: null,
      body: "",
      title: ""
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
          <img className="image-preview" src={this.state.imageUrl}/>
          : null}
      </div>
    )
  }

  render() {
    return (
      <div>
        <Dropzone
          multiple={false}
          accept="image/*"
          onDrop={this.handleDrop}
          className="image-preview"
        >
          {this.state.imageUrl ? this.previewImage() : "click or drag to add image"}
        </Dropzone>

        <form onSubmit={this.handleSubmit}>
          <div className="new-pin-form">
            <a>Title</a>
              <br/><input onChange={this.update('title')}/><br/>
            <a>Body</a>
              <br/>
              <textarea className="new-pin-textarea"
                type="textarea"
                onChange={this.update('body')}
              /><br/>
            <button type="Submit" value="Submit">Post</button>
          </div>
        </form>
      </div>
    )
  }
}
