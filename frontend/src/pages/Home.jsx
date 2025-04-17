import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to the Contact Manager</h1>
            <p>Your one-stop solution for managing contacts.</p>
            <div className="links">
                <Link to="/login" className="button">Login</Link>
                <Link to="/register" className="button">Register</Link>
            </div>
        </div>
    );
};

export default Home;