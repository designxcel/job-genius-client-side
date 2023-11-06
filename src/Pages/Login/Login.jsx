import { Link, useLocation, useNavigate } from "react-router-dom";
import BGlogin from "../../assets/Background/loginBG.png"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase.config";


const Login = () => {
    const {createSignIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const confirmedUser = result.user;
            navigate(location?.state? location?.state : '/')
            setUserName(confirmedUser);
        })
        .catch((error) => {
            console.error(error);
        });
    };

    const handleLogin = e =>{
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password)

        createSignIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            navigate(location?.state? location?.state : '/')
            Swal.fire({
                title: 'Logged in!',
                text: 'Successfully logged in.',
                imageUrl: 'https://i.ibb.co/GWCwq8z/logoIcon.png',
                imageWidth: 400,
                imageHeight: 100,
                imageAlt: 'Custom image',
              })
            

        })
        .catch(error => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You have put wrong credentials!"
              });
        })
    }
    
    return (
        <div style={{backgroundImage: `url(${BGlogin})`}} className="flex justify-center items-center h-[100vh]">
            <div className="">
                
                <div className="h-auto bg-gradient-to-t from-blue-200 to-transparent p-10 w-96 rounded-lg">
                    <div className="text-center mb-5">
                        <h1 className="text-5xl text-gray-800 font-bold">Login now!</h1>
                    </div>
                <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                        {/* <div>
                            <FaGoogle></FaGoogle>
                        </div> */}
                        <button onClick={handleGoogleLogin} className="text-white py-3 btn-block bg-cyan-500 rounded-xl">Sign in By Google</button>
                    </div>
                    <p className="text-center text-blue-600 font-bold">OR</p>
                    <div className="form-control">
                    {/* <label className="label ">
                        <span className="label-text text-gray-600">Email</span>
                    </label> */}
                    <input type="email" name="email" placeholder="email" className="bg-white input input-bordered" required />
                    </div>
                    <div className="form-control">
                    {/* <label className="label">
                        <span className="label-text text-gray-600">Password</span>
                    </label> */}
                    <input type="password" name="password" placeholder="password" className=" bg-white input input-bordered" required />
                    
                    </div>
                    <div className="form-control mt-10">
                        <button className="py-3 rounded-xl text-white bg-cyan-500">Login</button>
                    </div>
                    <label className="label mt-5">
                        <p className="text-blue-700 font-semibold">Do not register yet? <Link className="text-red-600 font-bold underline" to="/signup">Register</Link></p>
                    </label>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Login;