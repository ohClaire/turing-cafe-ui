import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Name" aria-label="Name"></input>
        <input
          type="text"
          placeholder="Date (mm/dd)"
          aria-label="Date (month/day)"
        ></input>
        <input type="text" placeholder="Time" aria-label="Time"></input>
        <input
          type="text"
          placeholder="Number of Guests"
          aria-label="Number of Guests"
        ></input>
        <button>Make Reservation</button>
      </form>
    );
  }
}
