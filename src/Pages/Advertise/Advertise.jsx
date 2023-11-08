import { useState } from "react";
import { useEffect } from "react";
import AdvertiseBoard from "./AdvertiseBoard";


const Advertise = () => {
    const [newArticles, setNewArticles] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/articles')
        .then(res => res.json())
        .then(data=> setNewArticles(data))
    },[])
    return (
        <div className="h-auto bg-gray-100 p-10">
            <div className="max-w-7xl mx-auto">
            <h2 className="text-gray-700 mt-10 text-center font-bold text-3xl">Recent News Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {
                    newArticles.map(article =><AdvertiseBoard key={article._id} article={article}></AdvertiseBoard>)
                }
            </div>
        </div>
        </div>
    );
};

export default Advertise;