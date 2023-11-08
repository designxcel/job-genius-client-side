import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import JobDetails from "../JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import AddJob from "../AddJob/AddJob";
import MyJobs from "../MyJobs/MyJobs";
import UpdateMyJob from "../MyJobs/UpdateMyJob";
import AppliedJobs from "../AppliedJobs/AppliedJobs";


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
            },
            {
                path: '/myjobs',
                element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
            },
            {
                path: '/updatemyjob/:id',
                element: <UpdateMyJob></UpdateMyJob>,
                loader: ({params}) => fetch(`http://localhost:5000/myjobs/${params.id}`)
            },
            {
                path: '/appliedJobs',
                element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>
            }
        ]
    }
]);

export default Routes;