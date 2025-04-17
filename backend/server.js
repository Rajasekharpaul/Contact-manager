const express = require("express");
const cors = require("cors"); // Import CORS
const errorHandler = require("./middleware/errorHandler");
const connectdb = require("./config/dbConnection");
require("dotenv").config();

connectdb();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
