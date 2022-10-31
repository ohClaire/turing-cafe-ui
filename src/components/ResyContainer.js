import React from 'react';
import ResCard from './ResCard';
import './ResyContainer.css';

export default function ResyContainer({ allResy }) {
  const resyCards = allResy.map((resy) => {
    return (
      <ResCard
        id={resy.id}
        key={resy.id}
        name={resy.name}
        date={resy.date}
        time={resy.time}
        numGuests={resy.number}
      />
    );
  });

  return <div className="resy-container">{resyCards}</div>;
}
