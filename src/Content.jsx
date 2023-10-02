import { RoutineIndex } from "./RoutineIndex"
import  axios from "axios"
import { useState, useEffect } from "react"
import { Signup } from "./Signup"
import { Login } from "./Login"
import { LogoutLink} from "./LogoutLink"
import { RoutinesNew } from "./RoutinesNew"
import { Modal } from "./Modal"
import { RoutinesShow } from "./RoutinesShow.jsx"
import { ExercisesShow } from "./ExercisesShow.jsx"
import { ExercisesIndex } from "./ExercisesIndex.jsx"



export function Content() {

const [routines, setRoutines] = useState([]);
const [isRoutinesShowVisible, setIsRoutinesShowVisible] = useState(false)
const [currentRoutine, setCurrentRoutine] = useState({})
const [exercises, setExercises] = useState([])

const handleExercisesIndex = () => {
  axios.get("http://localhost:3000/exercises.json").then((response) => {
    setExercises(response.data)
  })
}



const handleRoutineIndex = () => {
  console.log("handle")
  axios.get("http://localhost:3000/routines.json").then((response) => {
    console.log(response.data)
    setRoutines(response.data)
  })
}



const handleCreateRoutine = (params, successCallbackl) => {
  console.log("handle", params);
  axios.post("http://localhost:3000/routines.json", params).then((response) => {
    setRoutines([...routines, response.data]);
    successCallbackl();
  })
}
const handleShowRoutine = (routine) => {
  setIsRoutinesShowVisible(true)
  setCurrentRoutine(routine)
}



const handleClose = () => {
  setIsRoutinesShowVisible(false)
}

const handleUpdateRoutine = (id, params, successCallback) => {
  console.log("handle update", params);
  axios.patch(`http://localhost:3000/routines/${id}.json`, params).then((response) => {
    setRoutines(
      routines.map((routine) => {
        if (routine.id === response.data.id) {
          return response.data
        } else {
          return routine
        }
      })
    )
    successCallback()
      handleClose()
  })
}

useEffect(handleRoutineIndex, [])
useEffect(handleExercisesIndex, [])

  return (
    <div>
      <h1>Welcome to React!</h1>
      <Signup />
      <Login />
      <LogoutLink />
      

      <RoutinesNew onCreateRoutine={handleCreateRoutine}/>
      <RoutineIndex routines={routines} onShowRoutine={handleShowRoutine} />
      <Modal show={isRoutinesShowVisible} onClose={handleClose}>
        <RoutinesShow routine={currentRoutine} onUpdateRoutine={handleUpdateRoutine}/>
      </Modal>
      <ExercisesIndex exercises={exercises} />
    </div>
  )
}