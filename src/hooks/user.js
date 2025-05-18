import useSWR from 'swr'
import UserService from '../services/UserService'


// swr dùng để cache dữ liệu, tự động re-fetch khi có thay đổi

export const useAllUser = () => {
    const { data, error, isLoading, isValidating, mutate } = useSWR('/api/user/list', UserService.getAllUsers)

    return {
        userList: data?.data ?? [],
        error,
        isLoading,
        isValidating,
        mutate
    }
}

export const useUserById = (userId) => {
    const { data, error, isLoading, isValidating, mutate } = useSWR(`/api/user/${userId}`, () => UserService.getUserById(userId))

    return {
        userDetail: data?.data,
        error,
        isLoading,
        isValidating,
        mutate
    }
}