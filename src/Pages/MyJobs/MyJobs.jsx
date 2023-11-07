import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyJobsDisplay from "./MyJobsDisplay";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const MyJobs = () => {
    const {user} = useContext(AuthContext)
    const [myPostedJobs, setPostedJobs] = useState([])

    const url = `http://localhost:5000/myjobs?email=${user?.email}`;
        useEffect(() => {
            fetch(url)
            .then(res => res.json())
            .then(data => setPostedJobs(data))
        },[])
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-center text-xl font-bold">My jobs: {myPostedJobs.length}</h2>
            <div className="space-y-4 p-14">
                {
                    myPostedJobs.map(postJob =><MyJobsDisplay key={postJob._id} postJob={postJob}></MyJobsDisplay>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyJobs;