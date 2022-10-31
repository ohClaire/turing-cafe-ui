import React, { Component } from 'react';
import { getAllResy } from '../apiCalls';
import ResyContainer from '../components/ResyContainer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allResy: [],
    };
  }

  componentDidMount = async () => {
    try {
      const response = await getAllResy();
      const resys = await response.json();
      this.setState({ allResy: resys });
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form"></div>
        {/* <div className="resy-container"></div> */}
        <ResyContainer allResy={this.state.allResy} />
      </div>
    );
  }
}

export default App;
