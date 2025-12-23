import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactContext from '../context/ContactContext';
import AuthContext from '../context/AuthContext';
import ContactCard from '../components/ContactCard';
import Button from '../components/Button';
import { FaPlus } from 'react-icons/fa';

const Dashboard = () => {
    const { contacts, getContacts, deleteContact, loading } = useContext(ContactContext);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            getContacts();
        }
    }, [user]); // Removed getContacts from dependency array to avoid infinite loop if reference changes

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this contact?")) {
            await deleteContact(id);
        }
    };

    const handleEdit = (contact) => {
        navigate(`/contact/edit/${contact._id}`);
    };

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h2 className="title-gradient" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Your Contacts</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Manage your personal and professional network</p>
                </div>
                <Button onClick={() => navigate('/contact/add')}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaPlus /> Add New
                    </div>
                </Button>
            </div>

            {loading ? (
                <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)' }}>Loading contacts...</div>
            ) : contacts.length === 0 ? (
                <div className="glass-panel" style={{ textAlign: 'center', padding: '4rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>No contacts yet</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Start building your network by adding your first contact.</p>
                    <Button onClick={() => navigate('/contact/add')}>Add Contact</Button>
                </div>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {contacts.map(contact => (
                        <ContactCard
                            key={contact._id}
                            contact={contact}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dashboard;
