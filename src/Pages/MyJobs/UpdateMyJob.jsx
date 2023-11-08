import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const UpdateMyJob = () => {
    const {user} = useContext(AuthContext)
    
    const handleUpdateJob = e =>  {
        e.preventDefault()
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
    }
    return (
        <div>
            <form onSubmit={handleUpdateJob} className="space-y-5 max-w-7xl mx-auto py-20">
                    <div className="flex gap-5">
                        <input type="text" name="jobTitle" defaultValue={jobTitle} placeholder="Job Title" className="w-full input input-bordered bg-white border-b-4 border-cyan-400" />
                        <input type="text" name="jobType" defaultValue={{jobType}} placeholder="Job Type" className="w-full input input-bordered bg-white border-b-4 border-cyan-400" />
                        <input type="text" name="name" defaultValue={name} placeholder="Company Name" className="w-full input input-bordered bg-white border-b-4 border-cyan-400" />
                    </div>

                    <div className="flex gap-5">
                        <input type="text" name="email" defaultValue={user?.email} placeholder="User Name" className="w-full input input-bordered bg-white border-b-4 border-cyan-400" />
                        <input type="text" name="salary" defaultValue={salary} placeholder="Salary Range" className="w-full input input-bordered bg-white border-b-4 border-cyan-400" />
                    </div>

                    <div className="flex gap-5">
                        <input type="date" name="postDate" defaultValue={postDate} placeholder="Posting Date" className="w-full input input-bordered bg-white border-b-4 border-cyan-400" />
                        <input type="date" name="deadline" defaultValue={deadline} placeholder="Deadline" className="w-full input input-bordered bg-white border-b-4 border-cyan-400" />
                    </div>

                    <div className="form-control">
                        <textarea className="textarea textarea-bordered h-24 bg-white border-b-4 border-cyan-400" name="jobDesc" defaultValue={jobDesc} placeholder="Job Description"></textarea>
                    </div>
                    
                    <div className="form-control mt-10">
                        <button className="btn btn-primary">Update</button>
                    </div>
                    
            </form>
        </div>
    );
};

export default UpdateMyJob;