import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyJobsDisplay from "./MyJobsDisplay";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Swal from "sweetalert2";


const MyJobs = () => {
    const {user} = useContext(AuthContext)
    const [myPostedJobs, setPostedJobs] = useState([])

    const url = `http://localhost:5000/myjobs?email=${user?.email}`;
        useEffect(() => {
            fetch(url)
            .then(res => res.json())
            .then(data => setPostedJobs(data))
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
                    fetch(`http://localhost:5000/myjobs/${id}`, {
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
                              const remainingJobs = myPostedJobs.filter(job => job._id !== id);
                              setPostedJobs(remainingJobs)
    
                        }
                    })
                  
                }
              });
        }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-center text-xl font-bold">My jobs: {myPostedJobs.length}</h2>
            <div className="space-y-4 p-14">
                {
                    myPostedJobs.map(postJob =><MyJobsDisplay 
                        key={postJob._id} 
                        postJob={postJob}
                        handleDelete={handleDelete}
                        ></MyJobsDisplay>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyJobs;