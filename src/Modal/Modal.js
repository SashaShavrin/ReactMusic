import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";
import ReactAudioPlayer from 'react-audio-player'


function Modal({title, info, onClose, show, src, image, bgColor, track}) {
  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  });

  return ReactDOM.createPortal(
    <CSSTransition
      in={show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()} style={{background: bgColor}}>
       <div><img className="modal-img" src={image} alt={title}/></div> 
        <div className="modal-info">
        <button onClick={onClose} className="button-close"></button>
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
          </div>
          <div className="modal-body">{info}</div>
          <p className="modal-track">Track: {track}</p>
          <ReactAudioPlayer
          className="modal-player"
            src={src}
            autoPlay
            controls
          />
        </div>
        </div>
      </div>
    </CSSTransition>,
    
    document.getElementById("root")
  );
};

export default Modal;



