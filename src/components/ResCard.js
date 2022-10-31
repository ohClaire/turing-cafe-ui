import React from 'react';
import './ResCard.css';

export default function ResCard({ id, name, date, time, numGuests }) {
  return (
    <div className="card" id={id}>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of Guests: {numGuests}</p>
      <button className="card-btn">Cancel</button>
    </div>
  );
}
