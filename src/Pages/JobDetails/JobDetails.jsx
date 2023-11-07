import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const JobDetails = () => {
    const detailsOfJob = useLoaderData()
   
    const {_id, job_title, job_type, post_date, deadline, salary, applicants, Company_name, job_details} = detailsOfJob

    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-52 items-center flex justify-center">
                <h2 className=" text-white text-5xl font-bold">Vacancy for: {job_title}</h2>
            </div>
            <div className="max-w-7xl mx-auto p-10 text-gray-700">
                    <h2 className="text-xl font-bold">Name of the Company: {Company_name}</h2>
                    <h2>Salary: {salary}</h2>
                    <p>Details: {job_details}</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default JobDetails;