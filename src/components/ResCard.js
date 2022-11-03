import React from 'react';

import './ResCard.css';

export default function ResCard({
  id,
  name,
  date,
  time,
  numGuests,
  handleRemove,
}) {
  return (
    <div className="card" id={id}>
      <h2 className="name">{name}</h2>
      <p className="date">{date}</p>
      <p className="time">{time} pm</p>
      <p className="number">Number of Guests: {numGuests}</p>
      <button className="card-btn" onClick={() => handleRemove(id)}>
        Cancel
      </button>
    </div>
  );
}
