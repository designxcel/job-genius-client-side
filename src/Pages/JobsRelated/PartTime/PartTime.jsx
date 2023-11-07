

const PartTime = ({partTime}) => {
    const {job_title, job_type, post_date, deadline, salary, applicants, Company_name, job_details} = partTime;

    return (
            <div className="bg-white shadow-md space-y-2 rounded-lg p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                <h2 className="font-bold">Company Name: {Company_name}</h2>
                <h2>Job Title: {job_title}</h2>
                <p>Salary: {salary}</p>
                <p>Job Type: {job_type}</p>
                <button className="py-3 px-5 text-white text-xl rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">Details</button>
            </div>
    );
};

export default PartTime;