import axios from "axios";
import { createContext, useState } from "react";


export const AuthContext = createContext();

function AuthDataProvider({ children }) {
    const api = import.meta.env.VITE_BACKEND_URL;
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, serError] = useState(null);
    const [success, setSuccess] = useState(null)

    const registerUser = async ({ name, email, password }) => {
        try {
            setLoading(true)
            const user = await axios.post(`${api}/auth/register`, { name, email, password });
            console.log("user", user);

        } catch (error) {
            console.log("error", error.message);
        }
        finally {
            setLoading(false)
        }
    }

    const loginUser = async () => {

    }


    return <AuthData.Provider value={{ registerUser, loginUser }}>
        {children}
    </AuthData.Provider>
}

export default AuthDataProvider