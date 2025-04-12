import React from "react";
import { Link, useLocation } from "react-router-dom";
import models from "../../modelData/models";

const Sidebar = () => {
  const users = models.userListModel();
  const { pathname } = useLocation();
  const userId = pathname.split("/").pop();

  return (
    <aside className="">
      <Link
        to="/users"
        className="text-xl font-semibold text-gray-800 transition-colors hover:text-blue-600"
      >
        User List
      </Link>

      <div className="flex flex-col gap-2 mt-6">
        {users.map((item) => (
          <Link
            to={`/users/${item._id}`}
            key={item._id}
            className={`px-3 py-2 text-gray-700 transition-colors rounded-lg hover:bg-blue-100 hover:text-blue-700 ${userId === item._id ? "bg-blue-100 text-blue-700" : ""}`}
          >
            <span className="block font-medium">
              {`${item.first_name} ${item.last_name}`}
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
