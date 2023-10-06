export function RoutineIndex(props) {
  console.log(props)

  const redirectToExercisesNew = (routine) => {
    console.log("hello")
    window.location.href = "/exercises/new?routine_id=" + routine.id
  }

  const redirectToRoutinesNew =(routine) => {
    window.location.href= "/routines/new?"
  }

  const handleButton = (exerciseId) => {
    props.onRemoveRoutineIdFromExercise(exerciseId)
  }

  return (
    <div>
      <h1>All routines</h1>
      
      
      {props.routines.map((routine) => (
        <div key={routine.id}>
          <p>Routine: {routine.id}</p>
          <p>Name: {routine.name}</p>
          <p>Description: {routine.description}</p>
          <img className="routine" src={routine.image_url} style ={{height:300, width:300}}/>

          
          {routine.exercises.map((exercise)=>(
            <div key={exercise.id}>
              <button onClick={() => handleButton(exercise.id)}>Remove exercise from routine</button>  
              <p>Exercise: {exercise.name}</p>
             <p>Exercise id: {exercise.id}</p>
              <p>Reps: {exercise.reps}</p>
              <p>Sets: {exercise.sets}</p>
              <p>How to: {exercise.description}</p>
              </div>
        ))}  
                
          <p>
            <button onClick={() => props.onShowRoutine(routine)}>Update Routine</button>

            <button onClick={() => redirectToExercisesNew(routine)}>Add Exercise</button>

            
       
            
          
            <button onClick={() => redirectToRoutinesNew(routine)} >Add New Routine</button>
            </p>
          </div>
        
      ))}
      
      
      
    </div>
  );
}


