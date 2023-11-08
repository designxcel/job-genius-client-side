import { Link } from "react-router-dom";
import image from "../../assets/Extra/img1.webp"

const ExtraSection = () => {
    return (
        <div className="p-20 h-auto">
            <div className="flex flex-col md:flex-row max-w-6xl mx-auto text-gray-600 gap-10 items-center">
            <img src={image} alt="" />
            <div>
                <h2 className="text-5xl font-bold">Millions of Jobs. Find the one that suits you.</h2>
                <p className="mt-5 ">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide.</p>

                <div className="mt-5 ">
                    <li>Bring to the table win-win survival</li>
                    <li>Capitalize on low hanging fruit to identify</li>
                    <li>But I must explain to you how all this</li>
                </div>
                <div className="mt-10">
                <Link>
                    <button className="btn btn-secondary">View Details</button>
                </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ExtraSection;