/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const TaskCard = ({ task }) => {
  const { _id, title, description, deadline, priority } = task;

  return (
    <div className="card lg:card-side bg-base-100 my-2 shadow-xl">
      <div className="card-body">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-lg overflow-hidden whitespace-nowrap overflow-ellipsis w-[270px]">
          {description}
        </p>
        <p className="text-base  font-semibold"> Date: {deadline}</p>
        <p className="text-base font-semibold">Priority Level: {priority}</p>

        <div className="mt-4 inline-block">
          <Link to={`/dashboard/updateTask/${_id}`}>
            <button className="py-1 px-4 mr-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
              Update
            </button>
          </Link>
          <button className=" py-1 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;