export function RoutineIndex(props) {
  console.log(props)
  return (
    <div>
      <h1>All routines</h1>
      
      {props.routines.map((routine) => (
        <div key={routine.id}>
          <p>Workout: {routine.workout}</p>
          <p>Exercise: {routine.name}</p>
          <p>Reps: {routine.reps}</p>
          <p></p>          
          
          <button onClick={() => props.onShowRoutine(routine)}>Update Routine</button>
          </div>
      ))}
      
      
    </div>
  );
}