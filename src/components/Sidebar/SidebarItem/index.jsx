import { Link } from "react-router-dom";
import { usePhotoCommentedByUser } from "../../../hooks/comment";
import { useAllPhotoOfUser } from "../../../hooks/photo";

const SidebarItem = ({ user, currentUserId }) => {
  const { postCommentedList } = usePhotoCommentedByUser(user?._id);
  const { photoList } = useAllPhotoOfUser(user?._id);

  return (
    <Link
      to={`/users/${user._id}`}
      key={user._id}
      className={`px-3 py-2 text-gray-700 transition-colors rounded-lg hover:bg-blue-100 hover:text-blue-700 grid grid-cols-[1fr,40px] ${
        currentUserId === user._id ? "bg-blue-100 text-blue-700" : ""
      }`}
    >
      <span className="block font-medium">
        {`${user.first_name} ${user.last_name}`}
      </span>
      <div className="flex items-center justify-between">
        {photoList?.length > 0 ? (
          <span className="grid text-[11px] font-semibold bg-green-400 rounded-full size-[18px] text-white place-content-center">
            {photoList?.length}
          </span>
        ) : (
          <span />
        )}
        {postCommentedList?.length > 0 ? (
          <Link
            to={`/comments/${user?._id}`}
            onClick={(e) => e.stopPropagation()}
            className="grid text-[11px] font-semibold  bg-red-500 rounded-full size-[18px] text-white place-content-center"
          >
            {postCommentedList?.length}
          </Link>
        ) : (
          <span />
        )}
      </div>
    </Link>
  );
};

export default SidebarItem;
