import useSWR from "swr";
import PhotoService from "../services/PhotoService";

export const useAllPhotoOfUser = (userId) => {
    const { data, error, isLoading, isValidating, mutate } = useSWR(`/photo/photosOfUser/${userId}`, () => PhotoService.getPhotosByUserId(userId));

    return {
        photoList: data?.data ?? [],
        error,
        isLoading,
        isValidating,
        mutate
    }
}

