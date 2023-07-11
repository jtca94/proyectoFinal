import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        if (!payload) {
            throw new Error("Unauthorized");
        }
        req.body.payload = payload;
        next();
    }
    catch (error) {
        return res.status(401).json({ok: false, message: "Unauthorized"});
    }
};