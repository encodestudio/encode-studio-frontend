import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const API_BASE = import.meta.env.VITE_API_BASE_URL;

            const res = await fetch(`${API_BASE}/api/admin-login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const text = await res.text();
            console.log("RAW RESPONSE:", text);

            let data = {};
            try {
                data = JSON.parse(text);
            } catch (err) {
                console.error("JSON ERROR:", err);
                toast.error("Invalid server response");
                return;
            }

            if (res.ok) {
                localStorage.setItem("token", data.token);
                toast.success("Login successful 🚀");
                navigate("/dashboard");
            } else {
                toast.error(data.message || "Invalid credentials ❌");
            }

        } catch (error) {
            console.error("Login error:", error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div style={container}>
            <h2>Admin Login</h2>

            <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={input}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={input}
            />

            <button onClick={handleLogin} style={button}>
                Login
            </button>
        </div>
    );
}

const container = {
    maxWidth: "400px",
    margin: "100px auto",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
};

const input = {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
};

const button = {
    padding: "10px",
    borderRadius: "8px",
    background: "#2563eb",
    color: "white",
    border: "none",
    cursor: "pointer",
};