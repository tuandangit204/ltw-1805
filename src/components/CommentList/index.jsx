import { CircularProgress } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { usePhotoCommentedByUser } from "../../hooks/comment";
import { useGlobalContext } from "../../App";

const CommentList = () => {
  const { userId } = useParams();
  const { postCommentedList, isLoading } = usePhotoCommentedByUser(userId);
  const navigate = useNavigate();
  const { setAdvancedView } = useGlobalContext();

  const handleClickComment = (photo) => {
    setAdvancedView(true);
    navigate(`/photos/${photo.user_id}?id=${photo._id}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-100px)] grid place-content-center">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="flex flex-col p-5 gap-y-3">
      {postCommentedList?.map((photo) => (
        <button
          onClick={() => handleClickComment(photo)}
          key={photo._id}
          className="grid grid-cols-[76px,1fr] h-[76px] p-2 rounded shadow-md items-center"
        >
          <img
            src={require(`../../images/${photo.file_name}`)}
            alt={photo.file_name}
            className="object-cover size-[60px]"
          />
          <span className="break-all line-clamp-2 text-start">
            {photo.comments?.[0]?.comment}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CommentList;
