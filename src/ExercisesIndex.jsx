export function ExercisesIndex(props) {
return (
<div>
  <h1>All Exercises</h1>
  {props.exercises.map((exercise) => (
        <div key={exercise.id}>
          <h2>{exercise.name}</h2>
          <p>Sets:{exercise.reps}</p>
          <p>Reps:{exercise.sets}</p>
          <button onClick={() => props.onShowExercise(exercise)} >Update Exercise</button>
          
          
          
         </div>
       ))}
</div>
);
}