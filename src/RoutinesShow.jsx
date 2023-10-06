export function RoutinesShow(props) {

const handleSubmit = (event) => {
  event.preventDefault();
  const params = new FormData(event.target);
  props.onUpdateRoutine(props.routine.id, params, () => event.target.reset)
  
}

const handleClick = () => {
  props.onDestroyRoutine(props.routine)
}





return (
<div>
  <h1>Routine information</h1>
  <p>Name: {props.routine.name}</p>
  <p>Description: {props.routine.description}</p>
 
 <p>Image_url: {props.routine.image_url}</p>
 <p>Video: {props.routine.video_url}</p>

 <form onSubmit={handleSubmit}>
 <div>

          Name: <input defaultValue={props.routine.name} name="name" type="text" />
       </div>
       <div>
           Description: <input defaultValue={props.routine.description} name="description" type="text" />
         </div>
         <div>
          Image: <input defaultValue={props.routine.image_url} name="image_url" type="text"/>
         </div>

         <button type="submit">Update Routine</button>

         
         
         
       </form>
       <button onClick={handleClick}>Remove Routine</button>
       
</div>
);
}