import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import DisplayAllJobs from "./DisplayAllJobs";


const AllJobs = () => {
    const allTypeJobs = useLoaderData()
    const {_id, job_title, job_type, post_date, deadline, salary, applicants, Company_name, job_details} = allTypeJobs
    return (
        <div>
            <Navbar></Navbar>
            <div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-52 items-center flex justify-center">
                <h2 className=" text-white text-5xl font-bold">ALL JOBS</h2>
            </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-7xl mx-auto text-gray-600 mt-10 mb-20">
                    {
                        allTypeJobs.map(job => <DisplayAllJobs key={job._id} job={job}></DisplayAllJobs>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllJobs;