import { Link, useLocation, useNavigate } from "react-router-dom";
import BGlogin from "../../assets/Background/loginBG.png";
import icon from "../../assets/Logo/logoIcon.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import Navbar from "../Shared/Navbar/Navbar";
import { Helmet } from "react-helmet-async";

const Signup = () => {
    const {createNewUser} = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const handleSignUp = e =>{
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password, photo)

        form.reset();
        if(password.length < 6){
            
            Swal.fire({
                title: 'Warning!',
                text: 'Password should be at least 6 characters',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            return;
        }

        else if(!/[A-Z]/.test(password)){
            
            Swal.fire({
                title: 'Warning!',
                text: 'Password should have at least one uppercase letter',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            return;
        }

        else if(!/[!@#$%^&*()]/.test(password)){
            
            Swal.fire({
                title: 'Warning!',
                text: 'Password should have at least one special character',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            return;
        }

        createNewUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            navigate(location?.state? location?.state : '/login')
            Swal.fire({
                title: 'Congratulations!',
                text: 'Your account has created successfully.',
                imageUrl: 'https://i.ibb.co/GWCwq8z/logoIcon.png',
                imageWidth: 400,
                imageHeight: 100,
                imageAlt: 'Custom image',
              })
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <Helmet>
                <title>Job Genius | Signup</title>
            </Helmet>
            <Navbar></Navbar>
            <div style={{backgroundImage: `url(${BGlogin})`}} className="flex justify-center items-center h-[100vh]">
            <div className="">
                <div className="h-auto bg-gradient-to-t from-blue-200 to-transparent p-10 w-96 rounded-lg">
                    <div className="text-center">
                        <img src={icon} alt="" />
                        <h1 className="text-xl text-gray-800 font-bold">Sign Up!</h1>
                    </div>
                <form onSubmit={handleSignUp}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-10">
                        <button className="btn btn-primary">Signup</button>
                    </div>
                    <label className="label mt-5">
                        <p className="text-blue-700 font-semibold">Already have an account? <Link className="text-red-600 font-bold underline" to="/login">Login</Link></p>
                    </label>
                </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Signup;