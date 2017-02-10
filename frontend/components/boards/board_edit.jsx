import React from 'react';
import {hashHistory} from 'react-router';

export default class BoardEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editBoxOpen: true,
      deleteConfirmBox: false,
      name: ''
    };
    this.editButton = this.editButton.bind(this);
    this.editForm = this.editForm.bind(this);
    this.update = this.update.bind(this);
    this.handleCancelButton = this.handleCancelButton.bind(this);
    this.confirmDeleteBox = this.confirmDeleteBox.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
    this.handleDeleteConfirm = this.handleDeleteConfirm.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
    this.handleDeleteCancelButton = this.handleDeleteCancelButton.bind(this);
  }

  handleCancelButton() {
    this.setState({deleteConfirmBox: false, editBoxOpen: false})
    this.props.handleSelfClose()
  }

  handleDeleteCancelButton(){
    this.setState({deleteConfirmBox: false})
  }

  editButton(){
    return (
      <button onClick={this.handleEditButton}>
        edit
      </button>
    )
  }

  update(text) {
    return e => this.setState({
      [text]: e.currentTarget.value
    });
  }

  handleDeleteButton() {
    debugger
    this.setState({deleteConfirmBox: true})
  }

  handleDeleteConfirm() {
    this.props.deleteBoard({id: this.props.board.boards.id});
    hashHistory.replace('/home')
    this.forceUpdate()
  }

  handleUpdateSubmit(e) {
    e.preventDefault();
    this.setState({deleteConfirmBox: false, editBoxOpen: false})
    this.props.editBoard({name: this.state.name,
      id: this.props.board.boards.id})

  }

  editForm() {
    return (
      <div>
        <form className="board-edit-form" onSubmit={this.handleUpdateSubmit}>
          <span className="edit-board-text">Edit name</span>
          <input
            autoFocus type='text' onChange={this.update('name')}
            />
          <div className="board-edit-form-buttons">
            {
              this.state.deleteConfirmBox ?
              null
              :
              <div>
                <button type="Submit" value="Submit">
                  Update
                </button>
                <button onClick={this.handleCancelButton}>
                  Cancel
                </button>
                <button onClick={this.handleDeleteButton}>
                  Delete board
                </button>
              </div>
            }
            {
              this.state.deleteConfirmBox ?
              <div>
                <button onClick={this.handleDeleteConfirm}>Yes</button>
                <button onClick={this.handleDeleteCancelButton}>Cancel</button>
                <div className="board-edit-delete-confirm-text">
                  Are you sure you want to delete this board?
                </div>
              </div>
              :
              null
            }
          </div>
        </form>
      </div>
    );
  }

  confirmDeleteBox() {
    return(
      <div>
        <div>Are you sure you want to delete this board?</div>
        <button onClick={this.handleDeleteConfirm}>Yes</button>
        <button onClick={this.handleCancelButton}>Cancel</button>
      </div>
    )
  }

  render() {
    // {this.state.deleteConfirmBox ? this.confirmDeleteBox() : null}
    return (
      <div className="edit-board-form">
        {this.editForm()}
      </div>
    )
  }
}
