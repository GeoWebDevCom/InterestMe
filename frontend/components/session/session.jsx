import React from 'react';
import Modal from 'react-modal';
import {Router, Link, hashHistory } from 'react-router';
import BoardNewFormContainer from '../boards/board_new_container'


export default class Session extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      modalIsOpen: false,
      loginModal: false,
      signupModal: false,
      showDropdown: false,
      error: false,
      newBoardFormOpen: false
    };
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openLogin = this.openLogin.bind(this);
    this.openSignup = this.openSignup.bind(this);
    this.modalText = this.modalText.bind(this);
    this._handleLogoutClick = this._handleLogoutClick.bind(this);
    this.dropdown = this.dropdown.bind(this);
    this.onSettingsClick = this.onSettingsClick.bind(this);
    this.handleGuestSubmit = this.handleGuestSubmit.bind(this);
    this.handleChildCancelButton = this.handleChildCancelButton.bind(this);
    this.handleNewBoardClick = this.handleNewBoardClick.bind(this);
    this.handleProfileClick = this.handleProfileClick.bind(this);
    this.loginForms = this.loginForms.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    if (this.state.loginModal){
      this.props.processLogin(user).then( ()=> {
        this.setState({modalIsOpen: false})
      }).then(() => {
        hashHistory.push('/home')
      })
    }
    else {
      this.props.processSignUp(user).then( ()=> {
        this.setState({modalIsOpen: false})
        hashHistory.push('/home')
    })
  }
}

  renderErrors(){
    return(
      <ul>
        {
          this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))
        }
      </ul>
    )
  }

  onSettingsClick(){
    if (this.state.showDropdown){
      this.setState({showDropdown: false})
    } else {
      this.setState({showDropdown: true})
    }
  }

  handleGuestSubmit(e){
    e.preventDefault();
    const user = {username: "Guest", password: "password"};
    this.props.processLogin(user).then( () => {
      hashHistory.push('/home')
    })
    this.forceUpdate()
  }

  _handleLogoutClick(e){
    this.props.processLogout().then( ()=> {
      hashHistory.replace('/session')
    })
  }

  componentWillMount() {
    Modal.setAppElement('body');
   }

   componentDidMount() {
      if (this.state.showDropdown) {
        return
      }
   }

   update(text) {
     return e => this.setState({
       [text]: e.currentTarget.value
     });
   }

  openLogin(){
    this.setState({modalIsOpen: true, loginModal:true, signupModal: false});
  }

  openSignup(){
    this.setState({modalIsOpen: true, signupModal:true, loginModal: false});
  }

  closeModal() {
    this.setState({modalIsOpen: false, newBoardFormOpen: false});
    this.props.clearErrors();
  }

  modalText() {
    return this.state.loginModal ? "Log In" : "Sign Up"
  }

  dropdown(){
    return (<li><button className="menu-dropdown active logout" onClick={this._handleLogoutClick}>logout</button></li>)
  }

  handleChildCancelButton(){
    this.setState({newBoardFormOpen: false})
  }

  newBoardForm(){
    return(
      <Modal
        isOpen={this.state.newBoardFormOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        contentLabel="Session form"
        className="ReactModal__Content"
        >
          <BoardNewFormContainer handleCancelButton={this.handleChildCancelButton}/>
      </Modal>
    )
  }

  handleNewBoardClick(){
    this.setState({newBoardFormOpen: true})
  }

  handleProfileClick(){
    let url = this.props.currentUser.currentUser.user_id || this.props.currentUser.currentUser.currentUserId
    hashHistory.push(`/user/${url}`)
  }

  loginButtons(){
    return(
      <div>
        <button onClick={this.openLogin} className='session'>Login</button>
        <button onClick={this.openSignup} className='session' >Sign Up</button>
        <button onClick={this.handleGuestSubmit} className='session' >Guest Login</button>
      </div>
    )
  }

  signedInButtons(){
    return(
      <div>
        <button className="logout-button" onClick={this.handleNewBoardClick}>New board</button>
        <button onClick={this.handleProfileClick}>My Profile</button>
        <button className="logout-button" onClick={this._handleLogoutClick}>Logout</button>
      </div>
    )
  }

  loginForms(){
    return(
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        contentLabel="Session form"
        className="ReactModal__Content"
        >
        <div>
          <b id="session-form-title">{this.state.loginModal ? "Log In" : "Sign Up"}</b>
          <form className="session-login-form" onSubmit={this.handleSubmit}>
            { this.props.errors ? this.renderErrors() : null}
            <br/>
            <label>
              <b className="session-login-label">Username</b>
              <input autoFocus type='text'
                value={this.state.username}
                onChange={this.update('username')}
                />
            </label>
            <br/>
            <br/>
            <label>
              <b className="session-login-label">Password</b>
              <input className="password"
                type='password'
                value={this.state.password}
                onChange={this.update('password')}
                />
            </label>
            <br/>
            <br/>
            <div>
              <button id="submit-button" type="Submit" value="Submit">
                {this.state.loginModal ? "Log In" : "Sign Up"}
              </button>
              <button id="cancel-button" className="session-modal-button" onClick={this.closeModal}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    )
  }

  render() {
    return (
      <div>
        <ul className="session-buttons">
          {this.props.currentUser.currentUser ? this.signedInButtons() : this.loginButtons()}
        </ul>
        {this.state.newBoardFormOpen ? this.newBoardForm() : null}
        {this.loginForms()}
      </div>
    );
  }
}
