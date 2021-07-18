import React from 'react';
import './HornedBeast.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startingValue: 0,
      favorite: false,
    }
  }

  addItUp = () => {
    this.setState({
      startingValue: this.state.startingValue + 1, 
      favorite: true,
    })
  }

  takeAway = () => {
    this.setState({
      startingValue: this.state.startingValue - 1,
    })
  }

  render() {

    return (

      <Card>
        <Card.Img
          variant="top"
          src={this.props.imageUrl}
          alt={this.props.alt}
          onClick={this.props.getShowModal}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>

        <p>{this.state.startingValue ? this.state.startingValue : '0'} Favorite</p>
        <p>{this.state.favorite ? '❤️' : ' '}</p>

        <p>{this.props.description}</p>
        <Button variant="outline-success" onClick={this.addItUp}>Favorite</Button>
        <Button variant="outline-danger" onClick={this.takeAway}>Not your favorite</Button>
      </Card>
    )
  }
}

export default HornedBeast;
