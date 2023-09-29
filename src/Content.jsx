import { ExercisesIndex } from "./ExercisesIndex"
import  axios from "axios"
import { useState, useEffect } from "react"



export function Content() {

const [exercises, setExercises] = useState([]);

const handleExercisesIndex = () => {
  console.log("handle")
  axios.get("http://localhost:3000/exercises.json").then((response) => {
    console.log(response.data)
    setExercises(response.data)
  })
}

useEffect(handleExercisesIndex, [])

  return (
    <div>
      <h1>Welcome to React!</h1>
      <ExercisesIndex exercises={exercises} />
    </div>
  )
}