import React, { useState } from "react";

import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import models from "../../modelData/models";
import PhotoCard from "../PhotoCard";
import "./styles.css";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos({ advancedView }) {
  const { userId } = useParams();
  const userPhotos = models.photoOfUserModel(userId);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleNextPhoto = () => {
    if (currentPhotoIndex === userPhotos.length - 1) {
      return;
    }

    setCurrentPhotoIndex(currentPhotoIndex + 1);
  };

  const handlePrevPhoto = () => {
    if (currentPhotoIndex === 0) {
      return;
    }

    setCurrentPhotoIndex(currentPhotoIndex - 1);
  };

  if (advancedView) {
    return (
      <div className="grid grid-cols-[40px,1fr,40px] gap-x-2 px-2 min-h-full">
        <button
          className="text-3xl disabled:cursor-not-allowed disabled:opacity-50"
          disabled={currentPhotoIndex === 0}
          onClick={handlePrevPhoto}
        >
          <FaAnglesLeft />
        </button>
        <div className="mx-auto max-w-[600px]">
          <PhotoCard photo={userPhotos[currentPhotoIndex]} userId={userId} />
        </div>
        <button
          className="text-3xl disabled:cursor-not-allowed disabled:opacity-50"
          disabled={currentPhotoIndex === userPhotos.length - 1}
          onClick={handleNextPhoto}
        >
          <FaAnglesRight />
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-screen gap-3 mx-auto max-w-[600px]">
      {userPhotos?.map((item) => (
        <PhotoCard photo={item} userId={userId} key={item._id} />
      ))}
    </div>
  );
}

export default UserPhotos;
