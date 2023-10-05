export function ExercisesShow(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateExercise(props.exercise.id, params, () => event.target.reset())
  }

  return (
    <div>
      <h1>Exercises</h1>
      <p>Name: {props.exercise.name}</p>
     <p>Reps: {props.exercise.reps}</p>
     <p>Sets: {props.exercise.sets}</p>
     <p>Routine ID: {props.exercise.routine_id}</p>

     <form onSubmit={handleSubmit}>
      <div>
        Name: <input defaultVaule={props.exercise.name} name="name" type="text"/>
      </div>
      <div>
        Reps: <input defaultValue={props.exercise.reps} name="reps" type="text"/>
      </div>
      <div>
        Sets: <input defaultValue={props.exercise.sets} name="sets" type="text"/>
      </div>
      <div>
        Routine ID: <input defaultValue={props.exercise.routine_id} name="routine_id" type="text"/>
      </div>
      <button type="submit">Add To Routine</button>
     </form>
    </div>
    
  );
}