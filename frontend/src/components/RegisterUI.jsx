import { useState } from "react";
import { Link } from "react-router-dom";
const RegisterUI = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            alert("all fieds is required");
            return
        }

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full ">
                <h2 className="text-2xl font-semibold text-center mb-4">
                    Register
                </h2>
                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full mb-3 px-2 py-3 shadow-md rounded border"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full mb-3 px-2 py-3 shadow-md rounded border"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full mb-4 px-2 py-3 shadow-md rounded border"
                    />
                    {/* {
                        success && <div className="px-4 py-3 bg-green-300 rounded-2xl">
                            <p className="text-green-500 text-sm mb-2">{success}</p>
                        </div>
                    }
                    {error && (
                        <div className="px-4 py-3 bg-red-300 rounded-2xl">
                            <p className="text-red-500 text-sm mb-2">{error}</p>
                        </div>
                    )} */}

                    <button type="submit"

                        className="w-full mt-5 cursor-pointer bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:opacity-50"
                    >
                        {/* {loading ? "Registering..." : "Register"} */}
                        Register

                    </button>
                </form>
                <h1 className="font-semibold mt-2 capitalize">already have a account ? <Link to={`/login`} className="underline text-bg-500">login now</Link></h1>

            </div>
        </div>
    );
};

export default RegisterUI;
