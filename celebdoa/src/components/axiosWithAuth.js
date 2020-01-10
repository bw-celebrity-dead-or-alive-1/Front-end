import axios from 'axios';

export const axiosWithAuth = (method) => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: "https://celebridead.herokuapp.com",
        headers: {
            Authorization: token
        }
    });
}