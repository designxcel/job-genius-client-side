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
import AllJobs from "../AllJobs/AllJobs";
import Error from "../Error/Error";
import Blogs from "../Blogs/Blogs";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
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
                loader: ({params})=> fetch(`https://assignment-11-server-side-topaz.vercel.app/jobs/${params.id}`)
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
                loader: ({params}) => fetch(`https://assignment-11-server-side-topaz.vercel.app/myjobs/${params.id}`)
            },
            {
                path: '/appliedJobs',
                element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>
            },
            {
                path: '/all-jobs',
                element: <AllJobs></AllJobs>,
                loader: () => fetch('https://assignment-11-server-side-topaz.vercel.app/jobs')
            },
            {
                path: '/blogs',
                element:<Blogs></Blogs>
            }
        ]
    }
]);

export default Routes;