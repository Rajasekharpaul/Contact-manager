import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL as needed

// Fetch all contacts
export const fetchContacts = async () => {
    const response = await axios.get(`${API_URL}/contacts`);
    return response.data;
};

// Create a new contact
export const createContact = async (contactData) => {
    const response = await axios.post(`${API_URL}/contacts`, contactData);
    return response.data;
};

// Fetch a contact by ID
export const fetchContactById = async (id) => {
    const response = await axios.get(`${API_URL}/contacts/${id}`);
    return response.data;
};

// Update a contact
export const updateContact = async (id, contactData) => {
    const response = await axios.put(`${API_URL}/contacts/${id}`, contactData);
    return response.data;
};

// Delete a contact
export const deleteContact = async (id) => {
    const response = await axios.delete(`${API_URL}/contacts/${id}`);
    return response.data;
};