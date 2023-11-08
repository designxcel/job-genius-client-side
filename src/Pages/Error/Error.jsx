import { Link } from "react-router-dom";
import error from "../../assets/Background/error.png"

const Error = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-[70vh]">
                <img src={error} alt="" />
            </div>
            <Link to="/">
                <button className="btn btn-primary">Back To Hompage</button>
            </Link>
        </div>
    );
};

export default Error;