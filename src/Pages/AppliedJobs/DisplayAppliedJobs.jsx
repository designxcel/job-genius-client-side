import { FaTimes } from 'react-icons/fa';
import Swal from 'sweetalert2';

const DisplayAppliedJobs = ({appliedJob, handleDelete, handleStatus}) => {
    const{_id, name, email, url, status} = appliedJob

    
    return (
        <div className="bg-white rounded-lg p-5 shadow-md text-gray-600 flex justify-between items-center">
            <div className='flex items-center gap-8'>
                <div onClick={()=> handleDelete(_id)} className='text-red-800'>
                    <FaTimes></FaTimes>
                </div>
                <div>
                    <h2>Applicants Name: {name}</h2>
                    <h2>Applicants Email: {email}</h2>
                    <h2>Resume URL: {url}</h2>
                </div>
            </div>
            <div>
                {
                    status === 'Accepted' ? 
                        <button onClick={()=>handleStatus(_id)} className="btn btn-secondary">Accepted</button>
                        :
                        <button onClick={()=>handleStatus(_id)} className="btn btn-primary">Received</button>
                }
            </div>
        </div>
    );
};

export default DisplayAppliedJobs;