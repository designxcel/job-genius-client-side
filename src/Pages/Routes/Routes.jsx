import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import JobDetails from "../JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import AddJob from "../AddJob/AddJob";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children : [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path:'/jobdetails/:id',
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/addjob',
                element: <AddJob></AddJob>
            }
        ]
    }
]);

export default Routes;