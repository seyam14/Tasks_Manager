import logo from '../../assets/a5iW9O01.svg';
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext); 
    const handleLogout = () => {
        logout();
      };
    
    const navLinks = <>
    <li>
        <NavLink className="font-bold " to='/'>Home</NavLink>
    </li>   
    <li>
        <NavLink className="font-bold " to='/about'>About</NavLink>
    </li>
    <li>
        <NavLink className="font-bold " to='/contact'>Contact</NavLink>
    </li>
    {
      user && <li>
      <NavLink className="font-bold"  to='/dashboard/userHome'>Dashboard</NavLink>
  </li> 
    }
</>

    return (
        <div className={`navbar bg-base-200  md:px-10 top-0 z-10 `}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {
                  navLinks
              }
            </ul>
          </div>
          <img className="w-17 h-12" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              navLinks
            }
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button className="btn btn-primary"  onClick={handleLogout} >
                Logout
              </button>
              <div className="gap-1 m-2">
                <p>{user?.displayName}</p>
              </div>
              <div className="gap-1 m-2" >
                <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
              </div>
            </>
          ) : (
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    );
  };

export default Navbar;