import useSWR from "swr"
import CommentService from "../services/CommentService"

export const usePhotoCommentedByUser = (userId) => {
    const { data, error, isLoading, isValidating, mutate } = useSWR(`/comment/commentsOfUser/${userId}`, () => CommentService.getPhotosCommentedByUser(userId))

    return {
        postCommentedList: data?.data ?? [],
        error,
        isLoading,
        isValidating,
        mutate
    }
}