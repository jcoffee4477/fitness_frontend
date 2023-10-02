export function RoutinesNew(props) {

const handleSubmit = (event) => {
  event.preventDefault();
  const params = new FormData(event.target);
  props.onCreateRoutine(params, () => event.target.reset())
}

return (
<div>
  <h1>New Routine</h1>
  <form onSubmit={handleSubmit}>
    <div>
      Name: <input name="name" type="text" />
    </div>
    <div>
      Reps: <input name="reps" type="text"/>
    </div>
    <div>
      Workout: <input name="workout" type="text"/>
    </div>
    <div>
      Exercise ID: <input name="exercise_id" type="text"/>
    </div>
    <div>
      User ID: <input name="user_id" type="text"/>
    </div>
    <button type="submit">Create Routine</button>
  </form>
</div>
);
}