import Advertise from "../Advertise/Advertise";
import ExtraSection from "../ExtraSection/ExtraSection";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import App from "../Shared/Slider/Slider";
import Testimonial from "../Shared/Slider/Testimonial";
import NewTabs from "../Tabs/NewTabs";
import bannerImg from "../../assets/Extra/banner1.jpg"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="relative">
                <img src={bannerImg} alt="" />
                <div className="absolute top-3/4 left-16">
                    <Link to="/all-jobs">
                        <button className="bg-yellow-500 py-3 px-4 rounded-lg text-white font-bold text-xl">Find Job</button>
                    </Link>
                </div>
            </div>
            <NewTabs></NewTabs>
            <Testimonial></Testimonial>
            <Advertise></Advertise>
            <ExtraSection></ExtraSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;