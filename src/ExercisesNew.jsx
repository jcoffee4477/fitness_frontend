export function ExercisesNew(props) {

  const handleSubmit = (event) => {
       event.preventDefault();
         const params = new FormData(event.target);
         props.onCreateExercise(params, () => event.target.reset());
       };

return (
<div>
  <h1>New Exercise</h1>
  <form onSubmit={handleSubmit}>
    <div>
      Name: <input name="name" type="text" />
    </div>
    <div>
      Reps: <input name="reps" type="text" />
    </div>
    <div>
      Sets: <input name="sets" type="text" />
    </div>
    <div>
      Routine ID: <input name="routine_id" type="text" />
    </div>
    <div>
      User ID: <input name="user_id" type="text" />
    </div>
    <button type="submit">Add Exercise to Routine</button>
  </form>
</div>
);
}