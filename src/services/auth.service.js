import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (fname, lname, email, password) => {
    return axios.post(API_URL + "signup", {
        fname, 
        lname,
        email,
        password,
    });
};

const login = async (email, password) => {
    const response = await axios
        .post(API_URL + "signin", {
            email,
            password,
        });
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthServices = {
    register,
    login,
    logout,
    getCurrentUser
};

export default AuthServices;