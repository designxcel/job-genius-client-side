import Advertise from "../Advertise/Advertise";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import App from "../Shared/Slider/Slider";
import Testimonial from "../Shared/Slider/Testimonial";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <App></App>
            <Testimonial></Testimonial>
            <Advertise></Advertise>
            <Footer></Footer>
        </div>
    );
};

export default Home;