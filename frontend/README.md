# Project Title: Contact Manager

## Description
This is a React-based Contact Manager application that allows users to manage their contacts. Users can register, log in, and add, view, update, or delete their contacts. The application communicates with a backend server to handle user authentication and contact management.

## Features
- User registration and login
- Add, view, update, and delete contacts
- Responsive design with a user-friendly interface

## Technologies Used
- React
- JavaScript
- CSS
- Axios (for API calls)
- Node.js (for backend)

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/Rajasekharpaul/Contact-manager.git
   ```
2. Navigate to the frontend directory:
   ```
   cd frontend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to view the application.

## API Endpoints
- **POST** `/api/users/register` - Register a new user
- **POST** `/api/users/login` - Log in an existing user
- **GET** `/api/users/current` - Get current user information
- **GET** `/api/contacts` - Get all contacts for the logged-in user
- **POST** `/api/contacts` - Create a new contact
- **GET** `/api/contacts/:id` - Get a contact by ID
- **PUT** `/api/contacts/:id` - Update a contact by ID
- **DELETE** `/api/contacts/:id` - Delete a contact by ID

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.