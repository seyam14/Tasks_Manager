import { Link } from "react-router-dom";

const Banner = () => {
  return (

    <div className=" bg-gray-300 sm:items-center mt-10 sm:flex-row  md:flex lg:flex items-center lg:justify-between text-center mt-2 mb-2 p-3 ">
      <div className=" max-w-md ">
        <h1 className=" text-5xl font-bold my-2">Streamlined Task Management Platform</h1>
        <p className=" mb-4">Taskify is a sleek task management platform for efficient organization and prioritization of your daily tasks.</p>
        <div className="flex justify-center space-x-4">
        <button className="bg-red-500 text-white rounded-r py-2 px-4 hover:bg-blue-600">
        <Link to="/dashboard/userHome">Let’s Explore</Link>
        </button>
        </div>
      </div>
      <img className="profile-picture w-72 rounded-full sm:ml-12 md:mr-12 lg:mr-16 " src="https://i.ibb.co/7GWhQtV/24529047.jpg" alt="" />
    </div>
  );
};

export default Banner;
