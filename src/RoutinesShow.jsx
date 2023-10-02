export function RoutinesShow(props) {
return (
<div>
  <h1>Routine information</h1>
  <p>Name: {props.routine.exercise.name}</p>
  <p>Description: {props.routine.exercise.description}</p>
 <></>
 <p>Image_url: {props.routine.exercise.image_url}</p>
 <p>Video: {props.routine.exercise.video_url}</p>
</div>
);
}