import React from 'react';
import './HornedBeast.css';

class HornedBeast extends React.Component {
  render(){
    return(
      <>
      <h2>{this.props.title}</h2>
      <img src={this.props.image} alt={this.props.alt}></img>
      <p>{this.props.alt}</p>
      </>
    )
  }
}

export default HornedBeast;
