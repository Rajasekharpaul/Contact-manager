import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/contacts/new" element={<ContactForm />} />
                    <Route path="/contacts" element={<ContactList />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;