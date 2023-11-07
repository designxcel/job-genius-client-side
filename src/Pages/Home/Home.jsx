import Advertise from "../Advertise/Advertise";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import App from "../Shared/Slider/Slider";
import Testimonial from "../Shared/Slider/Testimonial";
import NewTabs from "../Tabs/NewTabs";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <App></App>
            <NewTabs></NewTabs>
            <Testimonial></Testimonial>
            <Advertise></Advertise>
            <Footer></Footer>
        </div>
    );
};

export default Home;