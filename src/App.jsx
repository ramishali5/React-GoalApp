import { useState } from "react";

function GoalForm(props) {
  const [formdata, setFormData] = useState({ goal: "", by: "" });

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onAdd(formdata);
    setFormData({ goal: "", by: "" });
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="goal"
        name="goal"
        value={formdata.goal}
        onChange={handleChange}
      />
      <input
        placeholder="by"
        name="by"
        value={formdata.by}
        onChange={handleChange}
      />
      <button type="submit">Add data</button>
    </form>
  );
}

function ListItems(props) {
  return (
    <ul>
      {props.allgoals.map((goal) => (
        <li key={goal.goal}>
          <span>
            I will Complete My {goal.goal} Goal by {goal.by}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  const [allgoals, setAllGoals] = useState([]);
  function addGoal(goal) {
    setAllGoals([...allgoals, goal]);
  }
  return (
    <div>
      <h1>My Goals</h1>
      <GoalForm onAdd={addGoal} />
      <ListItems allgoals={allgoals} />
    </div>
  );
}
