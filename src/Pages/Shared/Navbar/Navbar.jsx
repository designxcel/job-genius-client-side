import { Link, NavLink } from "react-router-dom";
import logoMain from "../../../assets/Logo/logoIcon.png"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogout= () =>{
        logOut()
        .then()
        .catch(error => {
          console.log(error)
        })
      }

    const menus = <>
        <li className="mr-6"><NavLink to="/">Home</NavLink></li>
        {
            user?.email? <>
            <li className="mr-6"><NavLink to="/addjob">Add a Job</NavLink></li>
            <li className="mr-6"><NavLink to="/myjobs">My Jobs</NavLink></li>
            <li className="mr-6"><NavLink to="/appliedJobs">Applied Jobs</NavLink></li>
            </>
            :
            <li className="mr-6"><NavLink to="/all-jobs">All Jobs</NavLink></li>
            
        }
        <li className="mr-6"><NavLink to="/blogs">Blogs</NavLink></li>
        
        
    </>
    return (
        <div className="navbar p-10 text-gray-600">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                    {menus}
                </ul>
                </div>
               
                <Link to="/">
                    <img className="h-12" src={logoMain} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal px-1">
                    {menus}
                </ul>
            </div>
            <div className="navbar-end">
                <div>
                    {
                        user?.email? <div className="flex gap-5 items-center">
                        <p>{user?.email}</p>
                        <li className="list-none text-blue-600 font-bold bg-yellow-400 py-2 px-4 rounded-lg"><button onClick={handleLogout}>Logout</button></li>
                        <img src={user?.photoURL} alt="" />
                        </div>
                        :
                        <li className="list-none"><Link to="/login">Login</Link></li>
                    }
                </div>

            </div>
        </div>

        
    );
};

export default Navbar;