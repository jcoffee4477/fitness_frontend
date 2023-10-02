import { RoutineIndex } from "./RoutineIndex"
import  axios from "axios"
import { useState, useEffect } from "react"
import { Signup } from "./Signup"
import { Login } from "./Login"
import { LogoutLink} from "./LogoutLink"
import { RoutinesNew } from "./RoutinesNew"
import { Modal } from "./Modal"
import { RoutinesShow } from "./RoutinesShow.jsx"



export function Content() {

const [routines, setRoutines] = useState([]);
const [isRoutinesShowVisible, setIsRoutinesShowVisible] = useState(false)
const [currentRoutine, setCurrentRoutine] = useState({})


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

useEffect(handleRoutineIndex, [])

  return (
    <div>
      <h1>Welcome to React!</h1>
      <Signup />
      <Login />
      <LogoutLink />
      <RoutinesNew onCreateRoutine={handleCreateRoutine}/>
      <RoutineIndex routines={routines} onShowRoutine={handleShowRoutine} />
      <Modal show={isRoutinesShowVisible} onClose={handleClose}>
        <RoutinesShow routine={currentRoutine} />
      </Modal>
    </div>
  )
}