import { createContext, useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check if user is logged in on mount
    useEffect(() => {
        const checkUser = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const res = await axiosClient.get('/users/current');
                    setUser(res.data);
                } catch (error) {
                    console.error("Auth check failed:", error);
                    localStorage.removeItem('token');
                }
            }
            setLoading(false);
        };
        checkUser();
    }, []);

    // Register user
    const register = async (userData) => {
        try {
            const res = await axiosClient.post('/users/register', userData);
            toast.success("Registration successful! Please login.");
            return true;
        } catch (error) {
            toast.error(error.response?.data?.message || "Registration failed");
            return false;
        }
    };

    // Login user
    const login = async (userData) => {
        try {
            const res = await axiosClient.post('/users/login', userData);
            localStorage.setItem('token', res.data.accessToken);
            // Fetch user details immediately after login or decode token if needed
            // Assuming /users/current gets the user info
            const userRes = await axiosClient.get('/users/current');
            setUser(userRes.data);
            toast.success("Login successful!");
            return true;
        } catch (error) {
            toast.error(error.response?.data?.message || "Login failed");
            return false;
        }
    };

    // Logout user
    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        toast.info("Logged out successfully");
    };

    return (
        <AuthContext.Provider value={{ user, register, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
