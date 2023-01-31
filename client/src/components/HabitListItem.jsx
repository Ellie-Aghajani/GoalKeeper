import './HabitListItem.scss';

const HabitListItem = (props) => {
  console.log(props);

  return (
    <div className="habit">
      <h3 className="habit-title"> Habit: {props.name}</h3>
      <h3> Description: {props.description}</h3>
      <h3> Repeat the goal on: {props.frequency}</h3>
      <h3>Completion status: { props.completed ? 'Done✅' : 'Not yet' }</h3>
    </div>
  );
};

export default HabitListItem;