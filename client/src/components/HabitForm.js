import React, { useState } from 'react';

const HabitForm = ({ addHabit }) => {
  const [newHabit, setNewHabit] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addHabit(newHabit);
    setNewHabit('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newHabit}
        onChange={(event) => setNewHabit(event.target.value)}
      />
      <button type="submit">Add Habit</button>
    </form>
  );
};

export default HabitForm;
