
import { FaEdit } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyJobsDisplay = ({postJob, handleDelete}) => {
    const {_id, jobTitle, jobType, salary, postDate, deadline, name} = postJob;
    
    return (
        <div className="bg-white rounded-lg p-5 shadow-md flex justify-between items-center text-gray-600">
            <div>
                <h2>Job Title: {jobTitle}</h2>
                <h2>Job Type: {jobType}</h2>
                <h2>Company Name: {name}</h2>
            </div>
            <div className='space-y-3'>
                <div>
                    <Link to={`/updatemyjob/${_id}`} className='text-blue-700'>
                        <FaEdit></FaEdit>
                    </Link>
                </div>
                <div onClick={()=> handleDelete(_id)}>
                    <Link className='text-red-700'>
                        <FaTimes></FaTimes>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyJobsDisplay;