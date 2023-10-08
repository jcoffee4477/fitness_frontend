import { Link } from "react-router-dom"
import {LogoutLink} from "./LogoutLink"
import { useState, useEffect } from "react"
import axios from "axios"



export function Header() {

  let authenticationLinks;
  if (localStorage.jwt === undefined) {
   authenticationLinks = ( 
    <>
    <Link to="login">Login</Link> | <Link to="/signup">Sign Up</Link> 
    </> )
  } else {
    authenticationLinks = ( 
      <>
     <Link to="/routines">My Routines</Link>  | <Link to="/routines/new">Create New Routine</Link> | <Link to="/exercises">View All Exercises</Link> | <Link to="/exercises/new">Create New Exercise</Link> | <LogoutLink></LogoutLink> |
    </>
    )
  }
  

  const [user, setUser] = useState({});
  /*const getUserData = () => {
    axios.get("http://localhost:3000/users/current.json").then(response => {
      setUser(response.data)
    })
  }*/

  //useEffect(getUserData, []);

  return (
    <header>
      <nav>
         {authenticationLinks}
        
      </nav>
    </header>
  )
}