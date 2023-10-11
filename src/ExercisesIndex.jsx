import { useState } from "react"

export function ExercisesIndex(props) {

const [searchFilter, setSearchFilter] = useState("")

return (
  <div>
    <p>Search Exercise: <input type="text" value={searchFilter} onChange={event => setSearchFilter(event.target.value)} list="name"/></p>
      <datalist id="name">
        {props.exercises.map(exercise =>(
        <option>{exercise.name}</option>
    ))}
      </datalist>


    <h1>All Exercises</h1>
    {props.exercises.filter(exercise => exercise.name.toLowerCase().includes(searchFilter)).map((exercise) => (
      <div key={exercise.id}>
        <h2>{exercise.name}</h2>
        <p>Routine ID:{exercise.routine_id}</p>
        <p>Exercise ID: {exercise.id}</p>
        <p>Description:{exercise.description}</p>
        <img className="image_url" src={exercise.image_url} style ={{height:200, width:200}}/>
        <br />
        <button onClick={() => props.onShowExercise(exercise)} >Add To Routine/Update Exercise</button>
       <hr />
     </div>
       ))}
  </div>
);
}