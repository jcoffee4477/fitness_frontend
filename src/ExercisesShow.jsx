export function ExercisesShow(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateExercise(props.exercise.id, params, () => event.target.reset())
  }

  const handleClick = () => {
    props.onDestroyExercise(props.exercise)
  }
  const handleButton = () => {
    props.onRemoveRoutineIdFromExercise(props.exercise.routine_id)
  }
  const redirectToRoutines = () => {
    window.location.href = "/routines"
  }

  

  return (
    <div>
      <h1>Exercises</h1>
      <p>Name: {props.exercise.name}</p>
     <p>Reps: {props.exercise.reps}</p>
     <p>Sets: {props.exercise.sets}</p>
     <p>Routine ID: {props.exercise.routine_id}</p>
     <p>Description: {props.exercise.description}</p>
     <p>Resistance: {props.exercise.resistance}</p>
     <p>Image: {props.exercise.image_url}</p>
     <p>User: {props.exercise.user_id}</p>

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
      <div>
        Description: <input defaultValue={props.exercise.description} name="description" type="text"/>
      </div>
      <p>Resistance: <input defaultValue={props.exercise.resistance} name="resistance" type="text"/></p>
      <p>Image: <input defaultValue={props.exercise.image_url} name="image_url" type="text"/></p>
      <p>User: <input defaultValue={props.exercise.user_id} name="user_id" type="text"/></p>
      <button onClick={redirectToRoutines} type="submit">Add To Routine</button>
      <button type="submit">Update Exercise</button>
      
     </form>
     <button onClick={handleClick}>Destroy Exercise</button>
    </div>
    
  );
}