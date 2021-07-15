import React from 'react';
import './HornedBeast.css';
import Button from 'react-bootstrap/Button'; 

class HornedBeast extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      startingValue: 0,
      favorite: false,
    }
  }

  addItUp = () => {
    this.setState({
      startingValue: this.state.startingValue + 1,
    })
  }

  takeAway = () => {
    this.setState({
      startingValue: this.state.startingValue - 1,
    })
  }

  render(){

    return(
      <>
      <h2>{this.props.title}</h2>

      <img 
      src={this.props.imageUrl} 
      alt={this.props.alt}
      title={this.props.title}
      />
      <p>{this.state.startingValue ? this.state.startingValue : '0'} Favorites</p>

      <p>{this.state.favorite ? '❤️' : ''}</p>
      
      <p>{this.props.description}</p>
      <Button variant="outline-success" onClick={this.addItUp}>Favorite</Button>
      <Button variant="outline-danger" onClick={this.takeAway}>Not your favorite</Button>
      </>
    )
  }
}

export default HornedBeast;
