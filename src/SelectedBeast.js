import React from 'react'
import Modal from 'react-bootstrap/Modal'
import './SelectedBeast.css'

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal {...this.props} centered onHide={this.props.getCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.beast.image_url} alt={this.props.beast.title}/>
          <h3>{this.props.beast.description}</h3>
        </Modal.Body>
      </Modal>
    );
  }
}



export default SelectedBeast;
