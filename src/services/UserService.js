import axiosInstance from "./axiosInstance"

const getAllUsers = async () => {
    const { data } = await axiosInstance.get('/user/list')

    return data
}

const getUserById = async (id) => {
    const { data } = await axiosInstance.get(`/user/${id}`)

    return data
}

const UserService = { getAllUsers, getUserById }

export default UserService