import React from 'react';
import Modal from 'react-modal';
import {hashHistory} from 'react-router';
import Dropzone from 'react-dropzone'
import request from 'superagent';
const CLOUDINARY_PRESET = 'hzwjhd4e'
const CLOUDINARY_UPLOAD ='https://api.cloudinary.com/v1_1/andoo/upload'

export default class UserProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      imageUrl: "",
      email: ""
    }
    //
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.previewImage = this.previewImage.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  // cloudinary(e){
  //   e.preventDefault();
  //   const that = this
  //   cloudinary.openUploadWidget(
  //     {
  //       cloud_name:'andoo',
  //       upload_preset: 'punlriir',
  //       theme: 'minimal'
  //     },
  //     (errors, results) => {
  //       if (errors === null) {
  //         that.setState({imageUrl: results[0]})
  //       }
  //     }
  //   )
  // }

  handleDrop(img){
    let imgUploaded = img[0]
    let upload = request.post(CLOUDINARY_UPLOAD)
    .field('upload_preset', CLOUDINARY_PRESET)
    .field('file', img);
    upload.end((errors, results) => {
      if (errors === null) {
        this.setState({imageUrl: results.body.secure_url,
        id: this.props.currentUserId})
      } else {
        console.log("error uploading!");
      }
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    this.props.editProfilePage({
      profile_picture: this.state.imageUrl,
      id: this.props.user.currentUserId
    })
    this.props.handleSelfClose()
    this.setState({imageUrl: null})
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
          Image preview
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
              <button type="Submit" value="Submit">Update</button>
          </form>
        </div>
      )
    }
}
