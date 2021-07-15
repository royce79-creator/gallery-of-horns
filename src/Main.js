import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';

class Main extends React.Component {
  render() {
    let beastArray = data.map((beast, index) => (
      <HornedBeast
        key={index}
        title={beast.title}
        imageUrl={beast.image_url}
        description={beast.description}
        alt={beast.title}
      />
    ))
    return (
      <>
        {beastArray}
      </>
    )
  }
}

export default Main;
