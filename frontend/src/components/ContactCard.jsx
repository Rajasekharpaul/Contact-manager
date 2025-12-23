import React from 'react';
import { FaPhone, FaEnvelope, FaTrash, FaEdit } from 'react-icons/fa';
import Button from './Button';

const ContactCard = ({ contact, onDelete, onEdit }) => {
    return (
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)' }}>{contact.name}</h3>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button onClick={() => onEdit(contact)} style={{ color: 'var(--accent-secondary)', fontSize: '1.1rem' }}>
                        <FaEdit />
                    </button>
                    <button onClick={() => onDelete(contact._id)} style={{ color: 'var(--danger)', fontSize: '1.1rem' }}>
                        <FaTrash />
                    </button>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                    <FaEnvelope style={{ color: 'var(--accent-primary)' }} />
                    <span>{contact.email}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                    <FaPhone style={{ color: 'var(--accent-primary)' }} />
                    <span>{contact.phone}</span>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
