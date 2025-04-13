const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1]; // Corrected split method
        jwt.verify(token, process.env.ACCESS_TOKEN_STRING, (err, decoded) => {
            if (err) {
                res.status(401);
                throw new Error("User is not authorized"); // Fixed typo
            }
            req.user = decoded.user;
            next(); // Moved next() here after successful verification
        });
    } else {
        res.status(401);
        throw new Error("User is not authorized or token is missing");
    }
});

module.exports = validateToken;