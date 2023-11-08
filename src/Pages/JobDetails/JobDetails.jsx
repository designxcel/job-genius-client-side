import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Modals from "../Modals/Modals";
import { Fragment } from "react";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import logo from "../../assets/Logo/logoIcon.png"
import Swal from "sweetalert2";


const JobDetails = () => {
    const {user} = useContext(AuthContext)
    const detailsOfJob = useLoaderData()
    const [showModal, setShowModal] = useState(false)
   
    const {_id, job_title, job_type, post_date, deadline, salary, applicants, Company_name, job_details, vacancy} = detailsOfJob

    const handleResumeSubmit = e => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = user?.email;
        const url = form.url.value;
        const resumeinfo = {
            name, 
            email, 
            url
        }
        // console.log(name, email, url)
        fetch('http://localhost:5000/resume',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(resumeinfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Congratulations!',
                    text: 'You have successfully placed your resume.',
                    imageUrl: 'https://i.ibb.co/GWCwq8z/logoIcon.png',
                    imageWidth: 400,
                    imageHeight: 100,
                    imageAlt: 'Custom image',
                  })
            } 
        })
    }

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
                        <Fragment>
                            
                                <button onClick={() => setShowModal(true)} className="mt-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md py-3 w-full rounded-lg text-center">Apply Now</button>
                                <Modals isVisible = {showModal} onClose={() => setShowModal(false)}>
                                    <div className="p-5">
                                        <img src={logo} alt="" />
                                        <h2 className="text-center mb-5 text-xl font-semibold">Submit Your Resume Link!</h2>
                                        <form onSubmit={handleResumeSubmit}>
                                            <div className="space-y-5">
                                                <input type="text" name="name" defaultValue={user?.displayName} placeholder="user name" className="w-full input input-bordered bg-white border-b-4 border-cyan-400" />
                                                <input type="email" name="email" defaultValue={user?.email} placeholder="user email" className="w-full input input-bordered bg-white border-b-4 border-cyan-400" />
                                                <input type="text" name="url" placeholder="Resume Url" className="w-full input input-bordered bg-white border-b-4 border-cyan-400" />
                                            </div>
                                            <div className="form-control mt-10">
                                                <button className="btn btn-primary">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </Modals>
                            
                        </Fragment>
                    </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default JobDetails;