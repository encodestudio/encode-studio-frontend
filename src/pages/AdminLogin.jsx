import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        const res = await fetch("http://localhost:4000/api/admin-login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const text = await res.text();   // 👈 change this
        console.log("RAW RESPONSE:", text);

        try {
            const data = JSON.parse(text);

            if (res.ok) {
                localStorage.setItem("token", data.token);
                navigate("/dashboard");
            } else {
                alert(data.message);
            }
        } catch (err) {
            console.error("JSON ERROR:", err);
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