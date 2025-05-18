import { useEffect, useState } from "react";

import { CircularProgress } from "@mui/material";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { useParams, useSearchParams } from "react-router-dom";
import { useAllPhotoOfUser } from "../../hooks/photo";
import { useUserById } from "../../hooks/user";
import PhotoCard from "../PhotoCard";
import "./styles.css";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos({ advancedView }) {
  const { userId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedPhotoId = searchParams.get("id");
  const { userDetail, isLoading: isUserLoading } = useUserById(userId);
  const { photoList, isLoading: isPhotoLoading } = useAllPhotoOfUser(userId);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    if (advancedView && photoList?.length > 0) {
      const selectedPhoto =
        photoList.find((photo) => photo._id === selectedPhotoId) ??
        photoList?.[0];

      setSelectedPhoto(selectedPhoto);
    }
  }, [JSON.stringify(photoList), advancedView, selectedPhotoId]);

  const handleNextPhoto = () => {
    const currentPhotoIndex = photoList.findIndex(
      (photo) => photo._id === selectedPhotoId
    );

    if (currentPhotoIndex === photoList.length - 1) {
      setSearchParams({
        id: photoList[0]._id,
      });
    } else {
      setSearchParams({
        id: photoList[currentPhotoIndex + 1]._id,
      });
    }
  };

  const handlePrevPhoto = () => {
    const currentPhotoIndex = photoList.findIndex(
      (photo) => photo._id === selectedPhotoId
    );

    if (currentPhotoIndex === 0) {
      setSearchParams({
        id: photoList[photoList.length - 1]._id,
      });
    } else {
      setSearchParams({
        id: photoList[currentPhotoIndex - 1]._id,
      });
    }
  };

  if (isUserLoading || isPhotoLoading || (advancedView && !selectedPhoto)) {
    return (
      <div className="min-h-[calc(100vh-100px)] grid place-content-center">
        <CircularProgress />
      </div>
    );
  }

  if (advancedView) {
    return (
      <div className="grid grid-cols-[40px,1fr,40px] gap-x-2 px-2 min-h-full">
        <button
          className="text-3xl disabled:cursor-not-allowed disabled:opacity-50"
          onClick={handlePrevPhoto}
        >
          <FaAnglesLeft />
        </button>
        <div className="mx-auto max-w-[600px]">
          <PhotoCard photo={selectedPhoto} userDetail={userDetail} />
        </div>
        <button
          className="text-3xl disabled:cursor-not-allowed disabled:opacity-50"
          onClick={handleNextPhoto}
        >
          <FaAnglesRight />
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-screen gap-3 mx-auto max-w-[600px]">
      {photoList?.map((item) => (
        <PhotoCard photo={item} userDetail={userDetail} key={item._id} />
      ))}
    </div>
  );
}

export default UserPhotos;
