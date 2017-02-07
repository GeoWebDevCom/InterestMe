import React from 'react';
import Modal from 'react-modal';


export default class Signup extends React.Component {
  constructor(){
    super();
    document.body.style.overflow = "hidden";
  }

  render(){
    return(
      <div>
        <img className="splashscreen" src="http://res.cloudinary.com/andoo/image/upload/v1486436876/dandelion-1737324_1920_q66mjt.jpg"/>
        <div className="splashtext">
          Everything you're looking for in one place
        </div>
      </div>
    )
  }
}
