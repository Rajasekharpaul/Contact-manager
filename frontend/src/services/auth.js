import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users/'; // Updated to point to backend server

// Register user
const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}register`, userData);
    return response.data;
};

// Login user
const loginUser = async (userData) => {
    const response = await axios.post(`${API_URL}login`, userData);
    if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

// Logout user
const logoutUser = () => {
    localStorage.removeItem('user');
};

// Get current user
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

export { registerUser, loginUser, logoutUser, getCurrentUser };