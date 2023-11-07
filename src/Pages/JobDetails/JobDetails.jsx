import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const JobDetails = () => {
    const detailsOfJob = useLoaderData()
   
    const {_id, job_title, job_type, post_date, deadline, salary, applicants, Company_name, job_details, vacancy} = detailsOfJob

    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-52 items-center flex justify-center">
                <h2 className=" text-white text-5xl font-bold">Vacancy for: {job_title}</h2>
            </div>
            <div className="max-w-7xl mx-auto p-10 text-gray-700 flex">
                    <div className="flex-1 space-y-5">
                        <h2 className="text-xl font-bold">Name of the Company: {Company_name}</h2>
                        <h2><span className="font-bold">Salary: </span>{salary}</h2>
                        <p><span className="font-bold">Details:</span> {job_details}</p>
                    </div>
                    <div className="w-96 border-2 p-5 space-y-2 rounded-lg">
                        <h2 className="bg-white shadow-md py-3 w-full rounded-lg text-center">Vacancy for: {vacancy}</h2>
                        <h2 className="bg-white shadow-md py-3 w-full rounded-lg text-center">Position: {job_title}</h2>
                        <h2 className="bg-white shadow-md py-3 w-full rounded-lg text-center">Job Nature: {job_type}</h2>
                        <h2 className="bg-white shadow-md py-3 w-full rounded-lg text-center">Salary: {salary}</h2>
                        <h2 className="bg-white shadow-md py-3 w-full rounded-lg text-center">Job Posted: {post_date}</h2>
                        <h2 className="bg-white shadow-md py-3 w-full rounded-lg text-center">Last Date: {deadline}</h2>
                        <Link>
                            <h2 className="mt-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md py-3 w-full rounded-lg text-center">Apply Now</h2>
                        </Link>
                    </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default JobDetails;