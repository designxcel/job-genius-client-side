

const MyJobsDisplay = ({postJob}) => {
    const {jobTitle, jobType, salary, postDate, deadline} = postJob;
    return (
        <div className="bg-white rounded-lg p-5 shadow-md w-full">
            <h2>Job Title: {jobTitle}</h2>
            <h2>Job Type: {jobType}</h2>
            <h2>Company Name: {jobType}</h2>
        </div>
    );
};

export default MyJobsDisplay;