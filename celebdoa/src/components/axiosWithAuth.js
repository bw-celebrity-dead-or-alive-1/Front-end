import axios from 'axios';

export const axiosWithAuth = props => {
    const token = localStorage.getItem("token");

    let login = "https://celebridead.herokuapp.com/users/login";
    let register = "https://celebridead.herokuapp.com/users/register";

    return axios.create({
        // 0 for register, 1 for login
        baseURL: props.method == 0 ? register : login,
        headers: {
            Authorization: token
        }
    });
}