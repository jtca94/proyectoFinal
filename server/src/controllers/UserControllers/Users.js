import { createUser } from "../../models/PostModel/createUser/createUser.js";
const newUser = async (req, res) => {
    try {
        const { userName, firstName, lastName, email, passwordHashed, address } = req.body;
        const user = await createUser(userName, firstName, lastName, email, passwordHashed, address);
        return res.status(200).json({ok: true, message: "User created successfully", user});
    } catch (error) {
        return res.status(500).json({ok: false, message: error.message});
    }
};

export const userControllers = {
    newUser
};