import Advertise from "../Advertise/Advertise";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import App from "../Shared/Slider/Slider";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <App></App>
            <Advertise></Advertise>
            <Footer></Footer>
        </div>
    );
};

export default Home;