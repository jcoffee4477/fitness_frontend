export function RoutineIndex(props) {
  console.log(props)
  return (
    <div>
      <h1>All routines</h1>
      
      {props.routines.map((routine) => (
        <div key={routine.id}>
          <h2>{routine.id}</h2>
          <p>Name: {routine.name}</p>
  <p>Reps: {routine.reps}</p>
          <button onClick={() => props.onShowRoutine(routine)}>more info</button>
          </div>
      ))}
      
      
    </div>
  );
}