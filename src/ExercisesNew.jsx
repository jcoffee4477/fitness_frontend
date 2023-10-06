import { useSearchParams } from "react-router-dom";

export function ExercisesNew(props) {
  const [searchParams, setSearchParams] = useSearchParams();

console.log(searchParams.get("routine_id"))
  const handleSubmit = (event) => {
       event.preventDefault();
         const params = new FormData(event.target);
         props.onCreateExercise(params, () => event.target.reset());
       };

       const redirectToExecises = (exercise) => {
        window.location.href= "/exercises"
      }

return (
<div>
  <h1>New Exercise</h1>
  <form onSubmit={handleSubmit}>
    <div>
      Name: <input name="name" type="text" />
    </div>
    <div>
      Reps: <input name="reps" type="text" />
    </div>
    <div>
      Sets: <input name="sets" type="text" />
    </div>
    <div>
      Routine ID: <input name="routine_id" type="text" value={searchParams.get("routine_id")} />
    </div>
    <div>
      User ID: <input name="user_id" type="text" />
    </div>
    <div>
      Description: <input name="description" type ="text" />
    </div>
    <button type="submit" onClick={redirectToExecises}>Create New Exercise</button>
  </form>
</div>
);
}