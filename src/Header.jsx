import { Link } from "react-router-dom"
import {LogoutLink} from "./LogoutLink"
import {useState, useEffect} from "react"
import axios from "axios"




export function Header() {

  const [user, setUser] = useState({})
  const getUserData = () => {
    axios.get("http://localhost:3000/users/current.json").then(response => {      
      setUser(response.data)
    })
  }

  useEffect(getUserData, [])
  

  let authenticationLinks;
  if (localStorage.jwt === undefined) {
   authenticationLinks = ( 
    <>
     <li className="nav-item">
      <a className="nav-link" href="login">Login</a>
     </li>

     <li className="nav-item">
      <a className="nav-link" href="/signup">SignUp</a>
     </li>
    </> 
    )
  } else {
      authenticationLinks = ( 
      <>
      <li className="nav-item">
        <a className="nav-link" href="/routines">My Routines</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="/routines/new">Create New Routine</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/exercises">View All Exercises</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="/exercises/new">Create New Exercise</a>
      </li>

      <li className="nav-item">
        <LogoutLink />
      </li>

      
      
    </>
    )
  }
  
  return (
    
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">User ID:{user.id}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {authenticationLinks}
        </ul>
        <span class="navbar-text">
          
        </span>
      </div>
    </div>
  </nav>
  )
}