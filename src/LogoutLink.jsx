import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/Login";
  };

  return (
    <a className="nav-link" href="#" onClick={handleClick}>
      Logout
    </a>
  );
}