import { Link } from "react-router-dom";
import formatDate from "../../utils/formatDate";
import CommentItem from "../CommentItem";

const PhotoCard = ({ photo, userDetail }) => {
  return (
    <div className="p-6" key={photo?._id}>
      <div className="mb-6">
        <img
          src={require(`../../images/${photo?.file_name}`)}
          alt={photo?.file_name}
          className="mx-auto aspect-video rounded-xl"
        />
      </div>

      <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-sm text-gray-500">Upload Date</p>
          <p className="font-medium text-gray-700">
            {formatDate(photo?.date_time)}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Uploaded by</p>
          <Link
            to={`/users/${userDetail._id}`}
            className="font-medium text-gray-700 123"
          >{`${userDetail.first_name} ${userDetail.last_name}`}</Link>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-200">
        <h3 className="mb-4 font-semibold text-gray-800">Comments</h3>

        {!photo?.comments?.length ? (
          <div>No comment</div>
        ) : (
          photo?.comments.map((comment, index) => <CommentItem comment={comment} />)
        )}
      </div>
    </div>
  );
};

export default PhotoCard;
