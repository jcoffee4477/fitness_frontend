import { RoutineIndex } from "./RoutineIndex"
import  axios from "axios"
import { useState, useEffect } from "react"
import { Signup } from "./Signup"
import { Login } from "./Login"
import { LogoutLink} from "./LogoutLink"
import { RoutinesNew } from "./RoutinesNew"
import { Modal } from "./Modal"
import { RoutinesShow } from "./RoutinesShow.jsx"
import { ExercisesNew } from "./ExercisesNew.jsx"
import { ExercisesIndex } from "./ExercisesIndex.jsx"
import { Routes, Route } from "react-router-dom"
import { ExerciseModal } from "./ExerciseModal"
import { ExercisesShow } from "./ExercisesShow.jsx"



export function Content() {

const [routines, setRoutines] = useState([]);
const [isRoutinesShowVisible, setIsRoutinesShowVisible] = useState(false)
const [currentRoutine, setCurrentRoutine] = useState({})
const [exercises, setExercises] = useState([])
const [isExercisesShowVisible, setIsExercisesShowVisible] = useState(false)
const [currentExercise, setCurrentExercise] = useState({})

const handleExercisesIndex = () => {
  axios.get("http://localhost:3000/exercises.json").then((response) => {
    setExercises(response.data)
  })
}

const handleShowExercise = (exercise) => {
  setIsExercisesShowVisible(true);
  setCurrentExercise(exercise)
}

const handleUpdateExercise = (id, params, successCallback) => {
  axios.patch(`http://localhost:3000/exercises/${id}.json`, params).then((response) => {
    setExercises(
      exercises.map((exercise) =>{
        if(exercise.id === response.data.id) {
          return response.data;
        } else {
          return exercise
        }
      })
    )
    successCallback()
    handleClose()
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

const handleCreateExercise = (params, successCallback) => {
  axios.post("http://localhost:3000/exercises.json", params).then((response) => {
    setExercises([...exercises, response.data])
    successCallback()
    window.location.href = "/"
  })
}



const handleClose = () => {
  setIsRoutinesShowVisible(false)
  setIsExercisesShowVisible(false)
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
      
      <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="logout" element={<LogoutLink/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/exercises" element={<ExercisesIndex exercises={exercises} onShowExercise={handleShowExercise}/>} />
      <Route path="/exercises/new" element={<ExercisesNew onCreateExercise={handleCreateExercise} />} />
      <Route path="/routines" element ={<RoutineIndex routines={routines} onShowRoutine={handleShowRoutine} />} />
      
      <Route path="/routines/new" element={<RoutinesNew onCreateRoutine={handleCreateRoutine}/>} />
      </Routes>



      <Modal show={isRoutinesShowVisible} onClose={handleClose}>
        <RoutinesShow routine={currentRoutine} onUpdateRoutine={handleUpdateRoutine}/>
      </Modal>

      <ExerciseModal show={isExercisesShowVisible} onClose={handleClose}>
        <ExercisesShow exercise={currentExercise} onUpdateExercise={handleUpdateExercise} />
      </ExerciseModal>
      
    </div>
  )
}