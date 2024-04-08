import { Link,NavLink,Outlet } from "react-router-dom";

function Main() {
    return (
    <div className="Main">

      <NavLink to="Home" className="btn btn-success mx-2">Home</NavLink>
      <NavLink to="About" className="btn btn-success mx-2">About</NavLink>
      <NavLink to="Contact" className="btn btn-success mx-2">Contact</NavLink>
      <Outlet/>
    </div>
    );
  }
  
  export default Main;
  