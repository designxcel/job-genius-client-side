import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="font-josefin bg-white max-w-[1440px] mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;