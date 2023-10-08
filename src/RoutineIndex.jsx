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

  const redirectToExercises = (routine) => {
    window.location.href = "/exercises"
  }
  

  return (
    <div>
      <h1>All routines</h1>
      
      
      {props.routines.map((routine) => (
        <div key={routine.id}>
         <h4> Routine: {routine.id}</h4>
          <p>Name: {routine.name}</p>
          <p>Description: {routine.description}</p>
          <img className="routine" src={routine.image_url} style ={{height:300, width:300}}/>

          
          {routine.exercises.map((exercise)=>(
            <div key={exercise.id}>
                
              <p>Exercise: {exercise.name}</p>
             
              <p>Reps: {exercise.reps}</p>
              <p>Sets: {exercise.sets}</p>
              <p>How to: {exercise.description}</p>
              <button onClick={() => handleButton(exercise.id)}>Remove Exercise Rrom Routine</button> 
              <br />
              <br />
              </div>
              
        ))}  
                
          <p>
            

            <button onClick={() => redirectToExercisesNew(routine)}>Add Exercises To Routine</button>
            {" "}
            <button onClick={() => redirectToExercises(routine)}>Update Routine Exercises</button>
            <hr />
            </p>
          </div>
        
      ))}
      
      
      
    </div>
  );
}


