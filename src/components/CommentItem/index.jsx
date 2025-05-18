import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useUserById } from "../../hooks/user";
import formatDate from "../../utils/formatDate";

const CommentItem = ({ comment }) => {
  const { userDetail } = useUserById(comment?.user_id);

  return (
    <div key={comment?._id} className="p-4 mb-4 rounded-lg bg-gray-50">
      <div className="flex items-start">
        <div className="flex items-center justify-center w-10 h-10 mr-3 text-indigo-600 bg-indigo-100 rounded-full">
          <FaUser />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <Link
              to={`/users/${userDetail?._id}`}
              className="font-medium text-gray-800"
            >{`${userDetail?.first_name} ${userDetail?.last_name}`}</Link>
            <span className="text-xs text-gray-500">
              {formatDate(comment?.date_time)}
            </span>
          </div>
          <p className="text-gray-700">{comment?.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
