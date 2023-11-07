import { useContext } from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../Provider/AuthProvider";


const AddJob = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-52 items-center flex justify-center">
                <h2 className=" text-white text-5xl font-bold">Add a JOB</h2>
            </div>
            <form className="space-y-5 max-w-7xl mx-auto py-20">
                    <div className="flex gap-5">
                        <input type="text" name="jobTitle" placeholder="Job Title" className="w-full input input-bordered bg-white border-b-4 border-cyan-400" />
                        <input type="text" name="jobType" placeholder="Job Type" className="w-full input input-bordered bg-white border-b-4 border-cyan-400" />
                    </div>

                    <div className="flex gap-5">
                        <input type="text" name="salary" defaultValue={user?.email} placeholder="User Name" className="w-full input input-bordered bg-white border-b-4 border-cyan-400" />
                        <input type="text" name="jobDesc" placeholder="Salary Range" className="w-full input input-bordered bg-white border-b-4 border-cyan-400" />
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