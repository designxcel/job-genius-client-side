import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useEffect } from 'react';
import DisplayAppliedJobs from './DisplayAppliedJobs';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import Swal from 'sweetalert2';
import app from '../../firebase.config';

const AppliedJobs = () => {
    const {user} = useContext(AuthContext)
    const [appliedJobs, setAppliedJobs] = useState([])

    const url = `http://localhost:5000/resume?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setAppliedJobs(data))
    },[])

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/resume/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data)
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Job has been deleted.",
                            icon: "success"
                          });
                          const remainingResume = appliedJobs.filter(resume => resume._id !== id);
                          setAppliedJobs(remainingResume)

                    }
                })
              
            }
          });
    }

    const handleStatus = id => {
        fetch(`http://localhost:5000/resume/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Accepted'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                const remaining = appliedJobs.filter(resume => resume._id !== id);
                const updated = appliedJobs.find(resume => resume._id === id);
                updated.status = 'Accepted'
                const newResume = [updated, ...remaining];
                setAppliedJobs(newResume);
            }
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-52 items-center flex justify-center">
                <h2 className=" text-white text-5xl font-bold">Applied Jobs </h2>
            </div>
            <div className='space-y-4 max-w-7xl mx-auto mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-10'>
                {
                    appliedJobs.map(appliedJob =><DisplayAppliedJobs 
                        key={appliedJob._id} 
                        appliedJob={appliedJob}
                        handleDelete = {handleDelete}
                        handleStatus = {handleStatus}
                        ></DisplayAppliedJobs>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AppliedJobs;