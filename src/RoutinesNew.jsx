export function RoutinesNew(props) {

const handleSubmit = (event) => {
  event.preventDefault();
  const params = new FormData(event.target);
  props.onCreateRoutine(params, () => event.target.reset())
}

const redirectToRoutines = (routine) => {
  window.location.href= "/routines"
}

return (
<div>
  <h1>New Routine</h1>
  <form onSubmit={handleSubmit}>
    <div>
      Name: <input name="name" type="text" />
    </div>
    <div>
      Description: <input name="description" type="text"/>
    </div>
    <div>
      Image: <input name="image_url" type="text"/>
    </div>
    
    <button type="submit" onClick={redirectToRoutines}>Create Routine</button>
  </form>
</div>
);
}