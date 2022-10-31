import React, { Component } from 'react';
import { getAllResy } from '../apiCalls';
import ResyForm from '../components/ResyForm';
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
      this.setState({ error: err.message });
    }
  };

  addResy = (request) => {
    if (!this.state.allResy.includes(request)) {
      this.setState({ allResy: [...this.state.allResy, request] });
    }
  };

  render = () => {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <ResyForm addResy={this.addResy} />
        {this.state.error && (
          <h1 className="error-message">{this.state.error}</h1>
        )}
        <ResyContainer allResy={this.state.allResy} />
      </div>
    );
  };
}

export default App;
