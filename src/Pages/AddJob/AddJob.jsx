import { useContext } from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const AddJob = () => {
    const {user} = useContext(AuthContext)
    const handleAddJob = e => {
        e.preventDefault();
        
        const form = e.target;

        const jobTitle = form.jobTitle.value;
        const jobType = form.jobType.value;
        const email = user?.email;
        const salary = form.salary.value;
        const postDate = form.postDate.value;
        const deadline = form.deadline.value;
        const jobDesc = form.jobDesc.value;
        const name = form.name.value;
        const myJobsPost = {
            jobTitle, jobType, email, salary, postDate, deadline, jobDesc, name
        }

        // console.log(jobTitle, jobType, email, salary, postDate, deadline, jobDesc)
        form.reset()
        fetch('https://assignment-11-server-side-topaz.vercel.app/myjobs',{
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(myJobsPost)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Congratulations!',
                    text: 'You have successfully posted a job.',
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
            <Helmet>
                <title>Job Genius | Add Job</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-52 items-center flex justify-center">
                <h2 className=" text-white text-5xl font-bold">Add a JOB</h2>
            </div>
            <form onSubmit={handleAddJob} className="space-y-5 max-w-7xl mx-auto py-20">
                    <div className="flex gap-5">
                        <input type="text" name="jobTitle" placeholder="Job Title" className="w-full input input-bordered bg-white border-b-4 border-cyan-400" />
                        <input type="text" name="jobType" placeholder="Job Type" className="w-full input input-bordered bg-white border-b-4 border-cyan-400" />
                        <input type="text" name="name" placeholder="Company Name" className="w-full input input-bordered bg-white border-b-4 border-cyan-400" />
                    </div>

                    <div className="flex gap-5">
                        <input type="text" name="email" defaultValue={user?.email} placeholder="User Name" className="w-full input input-bordered bg-white border-b-4 border-cyan-400" />
                        <input type="text" name="salary" placeholder="Salary Range" className="w-full input input-bordered bg-white border-b-4 border-cyan-400" />
                    </div>

                    <div className="flex gap-5">
                        <input type="date" name="postDate" placeholder="Posting Date" className="w-full input input-bordered bg-white border-b-4 border-cyan-400" />
                        <input type="date" name="deadline" placeholder="Deadline" className="w-full input input-bordered bg-white border-b-4 border-cyan-400" />
                    </div>

                    <div className="form-control">
                        <textarea className="textarea textarea-bordered h-24 bg-white border-b-4 border-cyan-400" name="jobDesc" placeholder="Job Description"></textarea>
                    </div>
                    
                    <div className="form-control mt-10">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                    {/* <label className="label mt-5">
                        <p className="text-blue-700 font-semibold">Already have an account? <Link className="text-red-600 font-bold underline" to="/login">Login</Link></p>
                    </label> */}
            </form>

                <Footer></Footer>
            
        </div>
    );
};

export default AddJob;