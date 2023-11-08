import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";


const Blogs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-52 items-center flex justify-center">
                <h2 className=" text-white text-5xl font-bold">BLOGS</h2>
            </div>

            <div className="max-w-7xl mx-auto text-gray-600 space-y-5  mb-20">
            <div className="bg-white shadow-md rounded-lg p-10 space-y-3">
                <h2 className="bg-gray-200 p-5 rounded-lg">Q. 1: What is an access token and refresh token? How do they work and where should we
                    store them on the client-side?</h2>
                
                <p className="bg-gray-200 p-5 rounded-lg">Ans: OAuth grants specify particular flows of formatted data between the various parties, including the authorization server, the client and the resource server. At the end of a grant, one or more tokens are delivered. These tokens are time bound credentials that give access to protected data and functionality.These tokens include an access token, an optional refresh token (if the proper scope is requested), and an optional id token (if using OpenID Connect).At a high level, these each serve different purposes.
                    <li>The access token allows for access to different APIs and protected resources</li>
                    <li>The refresh token lets you mint new access tokens.</li>
                    <li>The id token from OpenID Connect (OIDC) is used by the client to display information about the user.</li>
                    What should you do with all of these tokens? How can they be used by your application to ensure that only the correct users get access to data and functionality?Here’s a diagram of a common grant, the Authorization Code grant, from the start until tokens are obtained.</p>

            </div>

            <div className="bg-white shadow-md rounded-lg p-10 space-y-3">
                <h2 className="bg-gray-200 p-5 rounded-lg">Q. 2: What is express js? What is Nest JS?</h2>
                <li className="bg-gray-200 p-5 rounded-lg">Express Js: What are the implications of being a top-tier dog on the market? Express.js is massive in terms of its community. Finding tutorials, assistance, and useful tricks is a breeze, but its biggest perk is by far the overwhelming amount of plugins ready to spice up Express.js.

You see, Express is what we call a lightweight unopinionated framework.That means, fresh out of the box, it’s as basic as they come, providing very little in terms of functionality. Starting from scratch is going to take more work since a lot of the basic stuff has to be built from the ground up.

In exchange, the developer has more freedom; to go back to our sketch metaphor, you can get more creative when you don’t have to paint within the lines. </li>

                <li className="bg-gray-200 p-5 rounded-lg">
                    Next JS: In many ways NestJS is the opposite of Express. It’s an extremely opinionated framework that adheres to the design paradigm of “convention over configuration.” In other words, we sacrifice flexibility for standardization and speed. NestJS is based on Angular, so as one would expect, it’s meant to be used with TypeScript. (You could still write in Javascript if you prefer.)

TypeScript is a superset of Javascript created by Microsoft, it’s meant to be used as a strictly typed alternative to Javascript that seeks to solve some of the common complaints about the language. When used correctly, it helps write bug-free code without losing the simplicity and readability of common Javascript.

NestJs forces the MVC architecture on the developer, which separates an application into three main logical components: the model, the view, and the controller. It’s one of the most popular architectures on the market, and NestJs offers a plethora of functions for each component.
                </li>
            </div>

            <div className="bg-white shadow-md rounded-lg p-10 space-y-3">
                <h2 className="bg-gray-200 p-5 rounded-lg">Q. 3: Explain about the Project?</h2>
                <p className="bg-gray-200 p-5 rounded-lg">Ans: The project related to Job site. Its a job based website. anyone can easily find his desire job. </p>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;