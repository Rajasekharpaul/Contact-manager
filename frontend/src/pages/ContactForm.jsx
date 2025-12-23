import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ContactContext from '../context/ContactContext';
import Input from '../components/Input';
import Button from '../components/Button';
import { FaArrowLeft } from 'react-icons/fa';

const ContactForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { createContact, updateContact, contacts } = useContext(ContactContext);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        if (id) {
            const contact = contacts.find(c => c._id === id);
            if (contact) {
                setFormData({
                    name: contact.name,
                    email: contact.email,
                    phone: contact.phone
                });
            }
        }
    }, [id, contacts]);

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let success = false;
        if (id) {
            success = await updateContact(id, formData);
        } else {
            success = await createContact(formData);
        }

        if (success) {
            navigate('/');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
            <div className="glass-panel" style={{ width: '100%', maxWidth: '500px', padding: '2rem' }}>
                <button
                    onClick={() => navigate('/')}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}
                >
                    <FaArrowLeft /> Back to Dashboard
                </button>

                <h2 className="title-gradient" style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>
                    {id ? 'Edit Contact' : 'Add New Contact'}
                </h2>

                <form onSubmit={handleSubmit}>
                    <Input
                        label="Name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={onChange}
                        placeholder="Contact Name"
                        required
                    />
                    <Input
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={onChange}
                        placeholder="Email Address"
                        required
                    />
                    <Input
                        label="Phone"
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={onChange}
                        placeholder="Phone Number"
                        required
                    />
                    <Button type="submit" style={{ width: '100%', marginTop: '1rem' }}>
                        {id ? 'Update Contact' : 'Create Contact'}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
