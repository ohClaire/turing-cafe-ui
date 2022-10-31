import React, { useState } from 'react';
import './ResyForm.css';

export default function ResyForm({ addResy }) {
  const [resInfo, setResInfo] = useState({
    id: '',
    name: '',
    date: '',
    time: '',
    number: '',
  });

  const handleChange = (e) => {
    setResInfo({ ...resInfo, id: Date.now(), [e.target.name]: e.target.value });
  };

  const clearFields = () => {
    setResInfo({ id: '', name: '', date: '', time: '', number: '' });
  };

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        addResy(resInfo);
        clearFields();
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        aria-label="Name"
        value={resInfo.name}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="date"
        placeholder="Date (mm/dd)"
        aria-label="Date (month/day)"
        value={resInfo.date}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="time"
        placeholder="Time (hh:mm)"
        aria-label="Time (hour:min)"
        value={resInfo.time}
        onChange={handleChange}
      ></input>
      <input
        type="number"
        name="number"
        placeholder="Number of Guests"
        aria-label="Number of Guests"
        value={resInfo.number}
        onChange={handleChange}
      ></input>
      <button type="submit">Make Reservation</button>
    </form>
  );
}
