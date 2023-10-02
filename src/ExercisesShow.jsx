export function ExercisesShow(props) {
  return (
    <div>
      <h1>Exercises</h1>
      <p>Name: {props.exercise.name}</p>
      <p>Description: {props.exercise.description}</p>
     <p>Image: {props.exercise.image_url}</p>
     <p>Video: {props.exercise.video_url}</p>
    </div>
  );
}