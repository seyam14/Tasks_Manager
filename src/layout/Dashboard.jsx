import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaHome, FaTasks } from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";
import { Helmet } from "react-helmet";

const Dashboard = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="flex">
        <Helmet>
        <title>TasksMP|Dashboard</title>
        </Helmet> 
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-green-400">
                <ul className="menu p-4">
         
                    <>
                      <div className=" h-[50px] ml-0 lg:h-[100px] lg:ml-20 mb-12">
                      <img className=" rounded-full " src={user?.photoURL} />
                      </div>
                        <li ><NavLink to='/dashboard/userHome'>
                            <FaHome></FaHome>
                            User Home</NavLink>
                        </li>
                        <li ><NavLink to='/dashboard/newTask'> 
                           <FaTasks/>
                           New Task</NavLink>
                        </li>
                        <li ><NavLink to='/dashboard/previousTask'>
                           <GrTasks/>
                            Previous Task</NavLink>
                        </li> 
                    </> 
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                        <MdContactPhone/>
                            Contact</NavLink>
                    </li>
                    </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;