import axiosInstance from "./axiosInstance"

const getPhotosByUserId = async (userId) => {
    const { data } = await axiosInstance.get(`/photo/photosOfUser/${userId}`)

    return data
}


const PhotoService = { getPhotosByUserId }

export default PhotoService