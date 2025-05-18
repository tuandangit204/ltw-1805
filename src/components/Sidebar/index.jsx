import { Link, useLocation } from "react-router-dom";
import { useAllUser } from "../../hooks/user";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const { pathname } = useLocation();
  const userId = pathname.split("/").pop();
  const { userList } = useAllUser();

  return (
    <aside className="">
      <Link
        to="/users"
        className="text-xl font-semibold text-gray-800 transition-colors hover:text-blue-600"
      >
        User List
      </Link>

      <div className="flex flex-col gap-2 mt-6">
        {userList.map((item) => (
          <SidebarItem user={item} key={item._id} currentUserId={userId} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
