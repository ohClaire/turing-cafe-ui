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

      // if (!response.ok) {
      //   throw new Error(
      //     'There was a problem getting your reservations. Try again later!'
      //   );
      // }

      const resys = await response.json();
      this.setState({ allResy: resys });
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form"></div>
        {this.state.error && <h1>{this.state.error}</h1>}
        <ResyContainer allResy={this.state.allResy} />
      </div>
    );
  }
}

export default App;
