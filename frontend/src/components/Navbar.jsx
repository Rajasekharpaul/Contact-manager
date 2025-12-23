import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { FaAddressBook, FaSignOutAlt, FaUser } from 'react-icons/fa';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="glass-panel" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem',
            margin: '1rem 2rem',
            position: 'sticky',
            top: '1rem',
            zIndex: 100
        }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
                <span className="title-gradient"><FaAddressBook /> ContactManager</span>
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                {user ? (
                    <>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <FaUser style={{ color: 'var(--accent-primary)' }} />
                            <span>{user.username}</span>
                        </div>
                        <button onClick={handleLogout} style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', transition: 'color 0.3s' }}>
                            <FaSignOutAlt />
                        </button>
                    </>
                ) : (
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <Link to="/login" style={{ color: 'var(--text-primary)' }}>Login</Link>
                        <Link to="/register" style={{ color: 'var(--accent-secondary)' }}>Register</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
