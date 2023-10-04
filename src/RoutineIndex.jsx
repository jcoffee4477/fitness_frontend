export function RoutineIndex(props) {
  console.log(props)
  return (
    <div>
      <h1>All routines</h1>
      
      {props.routines.map((routine) => (
        <div key={routine.id}>
          <p>Routine ID: {routine.id}</p>
          <p>Name: {routine.name}</p>
          <p>Description: {routine.description}</p>

          
          {routine.exercises.map((exercise)=>(
            <div key={exercise.id}>
              <p>name: {exercise.name}</p>
              <p>reps: {exercise.reps}</p>
              <p>sets: {exercise.sets}</p>
              </div>
        ))}  
                
          
          <button onClick={() => props.onShowRoutine(routine)}>Update Routine</button>
          
          </div>
        
      ))}
      
      
    </div>
  );
}