import test1 from "../../../assets/Testimonial/1.png"
import test2 from "../../../assets/Testimonial/2.png"
import test3 from "../../../assets/Testimonial/3.png"

const Testimonial = () => {
    return (
        <div className="py-20">
            <h2 className="text-center text-3xl font-bold text-gray-700 mb-10">Testimonials From Our Customers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <img className="w-80 shadow-md" src={test1} alt="" />
                <img className="w-80 shadow-md" src={test2} alt="" />
                <img className="w-80 shadow-md" src={test3} alt="" />
            </div>
        </div>
      );
};

export default Testimonial;