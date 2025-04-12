import React from "react";

import { FaIdCard, FaInfoCircle, FaUser } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
  const { userId } = useParams();
  const userDetail = models.userModel(userId);
  const userPhotos = models.photoOfUserModel(userId);

  return (
    <div className="p-8">
      <div className="flex items-center mb-6">
        <div className="flex items-center justify-center text-4xl text-indigo-600 bg-indigo-100 rounded-full size-20">
          <FaUser className="text-2xl text-sky-800" />
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-semibold text-gray-800">{`${userDetail.first_name} ${userDetail.last_name}`}</h2>
          <p className="text-gray-600">{`${userDetail.occupation}`}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 mr-4 text-gray-600 bg-gray-100 rounded-full">
            <FaIdCard className="" />
          </div>
          <div>
            <p className="text-sm text-gray-500">User ID</p>
            <p className="text-gray-700">{userId}</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 mr-4 text-gray-600 bg-gray-100 rounded-full">
            <MdLocationOn />
          </div>
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-gray-700">{userDetail.location}</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex items-center justify-center w-10 h-10 mr-4 text-gray-600 bg-gray-100 rounded-full">
            <FaInfoCircle />
          </div>
          <div>
            <p className="text-sm text-gray-500">Description</p>
            <p className="italic text-gray-700">{userDetail.description}</p>
          </div>
        </div>
      </div>

      <Link
        to={`/photos/${userId}`}
        className="grid w-full py-2 !mt-5 !text-white rounded-lg place-items-center bg-sky-600 !no-underline"
      >
        View all photos
      </Link>
    </div>
  );
}

export default UserDetail;
