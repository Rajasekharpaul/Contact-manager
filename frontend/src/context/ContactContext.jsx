import { createContext, useState, useContext } from 'react';
import axiosClient from '../api/axiosClient';
import { toast } from 'react-toastify';

const ContactContext = createContext();

export const useContact = () => useContext(ContactContext);

export const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);

    // Get all contacts
    const getContacts = async () => {
        setLoading(true);
        try {
            const res = await axiosClient.get('/contacts');
            if (Array.isArray(res.data)) {
                setContacts(res.data);
            } else {
                setContacts([]);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to fetch contacts");
        } finally {
            setLoading(false);
        }
    };

    // Create contact
    const createContact = async (contactData) => {
        try {
            const res = await axiosClient.post('/contacts', contactData);
            setContacts([...contacts, res.data]);
            toast.success("Contact created!");
            return true;
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to create contact");
            return false;
        }
    };

    // Update contact
    const updateContact = async (id, contactData) => {
        try {
            const res = await axiosClient.put(`/contacts/${id}`, contactData);
            setContacts(contacts.map(c => c._id === id ? res.data : c));
            toast.success("Contact updated!");
            return true;
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to update contact");
            return false;
        }
    };

    // Delete contact
    const deleteContact = async (id) => {
        try {
            await axiosClient.delete(`/contacts/${id}`);
            setContacts(contacts.filter(c => c._id !== id));
            toast.success("Contact deleted!");
            return true;
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to delete contact");
            return false;
        }
    };

    return (
        <ContactContext.Provider value={{ contacts, loading, getContacts, createContact, updateContact, deleteContact }}>
            {children}
        </ContactContext.Provider>
    );
};

export default ContactContext;
