export function ExercisesIndex(props) {
  return (
    <div>
      <h1>All Exercises</h1>
      {props.exercises.map((exercise) =>(
        <div key={exercise.id}>
          <h2>{exercise.name}</h2>
          <p>{exercise.description}</p>
          <img classname="exercise" src={exercise.image_url} style={{height:100, width:100}}/>
          <iframe width="400" height="300"
          src={exercise.video_url}>
          </iframe>
        </div>
      ))}
    </div>
  );
}