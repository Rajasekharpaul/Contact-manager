import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { AuthProvider } from './context/AuthContext';

const App = () => {
    return (
        <AuthProvider>
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
        </AuthProvider>
    );
};

export default App;