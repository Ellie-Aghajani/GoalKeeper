const express = require('express');
const morgan = require('morgan');
// const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// in-memory habits
const habits = [
  {
    id: 'abc',
    name: 'reading',
    description: 'reading 30 pages a day',
    frequency: "Sunday",
    completed : false
  },
  {
    id: 'def',
    name: 'exercise',
    description: 'exercising 30 minutes a day',
    frequency: "Sunday",
    completed : false
  },
];

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cors());
app.use(express.static('../client/build'));

// routes

// GET /habits
app.get('/habits', (req, res) => {
  res.json(habits);
});

// POST /habits
app.post('/habits', (req, res) => {
 
  const id = Math.random().toString(36).substring(2, 5);
  const name = req.body.name;
  const description= req.body.description;
  const frequency = req.body.frequency;
  const completed = false;


  const newHabit = {
    
    id: id,
    name: name,
    description: description,
    frequency: frequency,
    completed : completed
  };

  habits.push(newHabit);

  res.json(newHabit);
});

// PATCH /habits/:id
app.patch('/habits/:id', (req, res) => {
  const id = req.params.id;

  // find the appropriate todo
  const foundHabit = habits.find((habit) => habit.id === id);

  console.log(foundHabit);

  // foundTodo.completed = true;
  foundHabit.completed = !foundHabit.completed;

  res.status(204).send();
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});