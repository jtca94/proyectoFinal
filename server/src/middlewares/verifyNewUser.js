export const verifyNewUser = async (req, res, next) => {
    try {
        const { userName, firstName, lastName, email, password, address } = req.body;
        if (!userName || !firstName || !lastName || !email || !password || !address) {
            throw new Error("Missing fields");
        }
        next();
    } catch (error) {
        return res.status(500).json({ok: false, message: error.message});
    }
}