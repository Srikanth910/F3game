import React from "react";
import ReactDOM from "react-dom";
// import Modal from "react-modal";
import Fullscreen from "react-full-screen";
import Modal from 'react-bootstrap/Modal';

const root = document.getElementById("root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

 export class Gameview extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      isFull: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.root = React.createRef();
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  goFull = () => {
    this.setState({ isFull: true });
  };

  render() {
    return (
      <div>
        <button onClick={this.goFull}>Fullscreen ON</button>
        <Fullscreen
          enabled={this.state.isFull}
          onChange={isFull => this.setState({ isFull })}
        >
          <div ref={this.root}>
            <button onClick={this.openModal}>Open Modal</button>
            {this.root.current && (
              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                parentSelector={() => this.root.current}
              >
                <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
                <button onClick={this.closeModal}>close</button>
                <div>I am a modal</div>
              </Modal>
            )}
          </div>
        </Fullscreen>
      </div>
    );
  }
}

