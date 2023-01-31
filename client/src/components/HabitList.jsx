import HabitListItem from "./HabitListItem";

const HabitList = (props) => {
  const mappedHabits = props.habits.map((habit) => {
    return <HabitListItem key={habit.id} {...habit} />;
  });

  return (
    <div>
      <h2>List of habits</h2>
      { mappedHabits }
    </div>
  );
};

export default HabitList;