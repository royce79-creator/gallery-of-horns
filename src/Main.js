import React from 'react';
import HornedBeast from './HornedBeast.js';
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {
  render() {
    let beastArray = this.props.data.map((beast, index) => (
      <HornedBeast
        key={index}
        title={beast.title}
        imageUrl={beast.image_url}
        description={beast.description}
        alt={beast.title}
        getShowModal={() => this.props.getShowModal(beast)}
      />
    ))
    return (
      <CardColumns>
        {beastArray}
      </CardColumns>
    )
  }
}

export default Main;
