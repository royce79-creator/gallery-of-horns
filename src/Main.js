import React from 'react';
import HornedBeast from './HornedBeast.js';
import CardColumns from 'react-bootstrap/CardColumns';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastsToRender: this.props.data,
    }
  }

  handleChange = (event) => {
    let gallery = this.props.data;
    let numHorns = parseInt(event.target.value);
    console.log(numHorns);
// filter over data, using condition numHorns === beast.horns
if (numHorns) {
  gallery = gallery.filter(beast => beast.horns === numHorns)
}
// assign the created array to state specifically beastToRender property.
  this.setState({
    beastsToRender: gallery
  })
  }

  render() {
    let beastArray = this.state.beastsToRender.map((beast, index) => (
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
      <main>
        <Container>
          <Form>
            <Form.Group controlId="Horns">
              <Form.Label>
                <Form.Control as="select" onChange={this.handleChange}>
                <option value="">All</option>
                  <option value="1">One Horn</option>
                  <option value="2">Two Horns</option>
                  <option value="3">Tri Horns</option>
                  <option value="100">A whole lot of Horns</option>
                </Form.Control>
              </Form.Label>
            </Form.Group>
          </Form>
        </Container>
        <CardColumns>
          {beastArray}
        </CardColumns>
      </main>
    )
  }
}

export default Main;
