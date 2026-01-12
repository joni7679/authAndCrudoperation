const jwt = require("jsonwebtoken");
const authMiddlware = async (req, res, next) => {
    try {
        const token = req.cookies?.token;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            });
        }
        const deCode = jwt.verify(token, process.env.SECRET_KEY);
        console.log("key",process.env.SECRET_KEY);
        if (!deCode) {
            return res.status(401).json({
                success: false,
                message: "Invalid Token"
            });
        }
        req.userId = deCode.userId;
        next();
    } catch (error) {
        return res.status(500).json({
            data: false,
            message: error.message
        })
    }
};

module.exports = authMiddlware;