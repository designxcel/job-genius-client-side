

const AdvertiseBoard = ({article}) => {
    const { _id, author, author_img, title, img, description } = article;
    return (
        <div className="card bg-white shadow-md">
            <figure><img className="h-60 w-full p-5" src={img} alt="article" /></figure>
            <div className="card-body">
                <h2 className="card-title text-gray-700 font-semibold">{title}</h2>
                <p>{description.slice(0,100)}</p>
                <div className="card-actions justify-end">
                <button className=" bg-yellow-400 py-3 px-4 text-center rounded-lg text-white">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseBoard;