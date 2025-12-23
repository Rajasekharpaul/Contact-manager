import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from './context/AuthContext';
import { ContactProvider } from './context/ContactContext';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ContactForm from './pages/ContactForm';
import AuthContext from './context/AuthContext';
import { useContext } from 'react';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div style={{ textAlign: 'center', marginTop: '5rem', color: 'var(--text-secondary)' }}>Loading...</div>;
  if (!user) return <Navigate to="/login" />;

  return children;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <ContactProvider>
          <div className="app-container">
            <Navbar />
            <div className="content">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
                <Route path="/contact/add" element={
                  <ProtectedRoute>
                    <ContactForm />
                  </ProtectedRoute>
                } />
                <Route path="/contact/edit/:id" element={
                  <ProtectedRoute>
                    <ContactForm />
                  </ProtectedRoute>
                } />
              </Routes>
            </div>
            <ToastContainer theme="dark" position="bottom-right" />
          </div>
        </ContactProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
