import axiosInstance from "./axiosInstance"

const getPhotosCommentedByUser = async (userId) => {
    const { data } = await axiosInstance.get(`/comment/commentsOfUser/${userId}`)

    return data
}

const CommentService = { getPhotosCommentedByUser }

export default CommentService