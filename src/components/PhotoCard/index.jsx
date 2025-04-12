import React from "react";
import formatDate from "../../utils/formatDate";
import { Link } from "react-router-dom";
import models from "../../modelData/models";
import { FaUser } from "react-icons/fa";

const PhotoCard = ({ photo, userId }) => {
  const userDetail = models.userModel(userId);
  return (
    <div className="p-6" key={photo._id}>
      <div className="mb-6">
        <img
          src={require(`../../images/${photo.file_name}`)}
          alt={photo.file_name}
          className="mx-auto aspect-video rounded-xl"
        />
      </div>

      <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-sm text-gray-500">Upload Date</p>
          <p className="font-medium text-gray-700">
            {formatDate(photo.date_time)}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Uploaded by</p>
          <Link
            to={`/users/${userId}`}
            className="font-medium text-gray-700 123"
          >{`${userDetail.first_name} ${userDetail.last_name}`}</Link>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-200">
        <h3 className="mb-4 font-semibold text-gray-800">Comments</h3>

        {!photo?.comments?.length ? (
          <div>No comment</div>
        ) : (
          photo?.comments.map((comment, index) => (
            <div
              key={comment?._id ?? index}
              className="p-4 mb-4 rounded-lg bg-gray-50"
            >
              <div className="flex items-start">
                <div className="flex items-center justify-center w-10 h-10 mr-3 text-indigo-600 bg-indigo-100 rounded-full">
                  <FaUser />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <Link
                      to={`/users/${comment?.user?._id}`}
                      className="font-medium text-gray-800"
                    >{`${comment?.user?.first_name} ${comment?.user?.last_name}`}</Link>
                    <span className="text-xs text-gray-500">
                      {formatDate(comment?.date_time)}
                    </span>
                  </div>
                  <p className="text-gray-700">{comment?.comment}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PhotoCard;
