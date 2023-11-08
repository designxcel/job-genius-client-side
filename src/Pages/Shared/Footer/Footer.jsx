import { Link } from "react-router-dom";
import logoMain from "../../../assets/Logo/logoIcon.png"

const Footer = () => {
    return (
        <footer className="footer p-10 bg-white">
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
                <header className="footer-title">Legal</header> 
                <a className="link link-hover">Terms of use</a> 
                <a className="link link-hover">Privacy policy</a> 
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;