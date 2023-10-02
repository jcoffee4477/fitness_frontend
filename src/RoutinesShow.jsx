export function RoutinesShow(props) {

const handleSubmit = (event) => {
  event.preventDefault();
  const params = new FormData(event.target);
  props.onUpdateRoutine(props.routine.id, params, () => event.target.reset)
}

return (
<div>
  <h1>Routine information</h1>
  <p>Workout: {props.routine.workout}</p>
  <p>Name: {props.routine.exercise.name}</p>
  <p>Description: {props.routine.exercise.description}</p>
 <></>
 <p>Image_url: {props.routine.exercise.image_url}</p>
 <p>Video: {props.routine.exercise.video_url}</p>

 <form onSubmit={handleSubmit}>
 <div>

          Workout: <input defaultValue={props.routine.workout} name="workout" type="text" />
      </div>
       <div>
        
           Exercise: <input defaultValue={props.routine.exercise.name} name="name" type="text" />
         </div>
         <div>
           Reps: <input defaultValue={props.routine.reps} name="reps" type="text" />
         </div>
         <button type="submit">Update Routine</button>
         
       </form>
</div>
);
}