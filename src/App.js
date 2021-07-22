import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js';
import data from './data.json';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {}
    }
  }

  getShowModal = (beast) => {
    this.setState({
      showModal: true,
      selectedBeast: beast,
    });
  }

  getCloseModal = () => {
    this.setState({
      showModal: false,
    });
  }

  render() {
    return (
      <>
        <Header />
        <SelectedBeast 
          show={this.state.showModal} 
          getCloseModal={this.getCloseModal}
          beast={this.state.selectedBeast}
        />
        <Main getShowModal={this.getShowModal}
        data={data}
        />
        <Footer />
      </>
        );
  }
}

export default App;
