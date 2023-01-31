import './App.css';
import HabitList from './components/HabitList';
import axios from 'axios';
import {useEffect, useState} from 'react';

const App = () => {
  const [habits, setHabits] = useState([]); 

  useEffect(() => {
    axios.get('/habits')
      .then((response) => {
        setHabits(response.data);
      });
  }, []);

  return (
    <div className="App">
      <h2>Welcome to our website</h2>
      <HabitList habits={habits}/>
    </div>
  );
};

export default App;