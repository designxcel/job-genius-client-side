import { Link } from "react-router-dom";
import logoMain from "../../../assets/Logo/logoIcon.png"
import { FaFacebook } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="footer p-10 bg-white text-gray-600">
            <div>
                <Link>
                <img src={logoMain} alt="" />
                </Link>
                
            </div> 
            <nav>
                <header className="footer-title">Services</header> 
                <Link to="/">Home</Link>
                <Link to="/all-jobs">All Jobs</Link>
                <Link to="/blogs">Blogs</Link>
                
            </nav> 
            <nav>
                <header className="footer-title">Company</header> 
                <a className="link link-hover">About us</a> 
                <a className="link link-hover">Contact</a> 
                <a className="link link-hover">Jobs</a> 
                <a className="link link-hover">Press kit</a>
            </nav> 
            <nav>
                {/* <header className="footer-title flex">Social Links</header>  */}
                <h2 className="text-center">Social Links</h2>
                <div className="flex gap-4 text-white">
                <div className="bg-yellow-500 rounded-full p-2">
                    <Link>
                        <FaFacebook></FaFacebook>
                    </Link>
                </div>
                <div className="bg-yellow-500 rounded-full p-2">
                    <Link>
                    <FaDribbble></FaDribbble>
                </Link>
                </div>
                <div className="bg-yellow-500 rounded-full p-2">
                    <Link>
                    <FaGithub></FaGithub>
                    </Link>
                </div>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;