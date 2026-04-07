import { useState } from "react";
import toast from "react-hot-toast";

export default function WaitlistForm({ productName }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";
            const res = await fetch(`${API_BASE}/api/waitlist`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    product: productName,
                }),
            });

            const data = await res.json();

            // ❌ ERROR CASE
            if (!res.ok) {
                toast.error(data.message);
                return;
            }

            // ✅ SUCCESS
            toast.success("🎉 You're on the waitlist!");

            // ✅ Reset form
            setName("");
            setEmail("");
            setPhone("");

        } catch (err) {
            console.error(err);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={container}>
            <h2 style={{ marginBottom: "10px" }}>
                Join the Early Access
            </h2>

            <p style={{ color: "#666", marginBottom: "20px" }}>
                Be the first to try {productName} when it launches.
            </p>

            <form onSubmit={handleSubmit} style={form}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={input}
                />

                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={input}
                />

                <input
                    type="tel"
                    placeholder="Mobile Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    style={input}
                />

                <button
                    type="submit"
                    disabled={loading}
                    style={button}
                >
                    {loading ? "Joining..." : "Join Waitlist"}
                </button>
            </form>
        </div>
    );
}

/* ---------- STYLES ---------- */

const container = {
    textAlign: "center",
    padding: "40px",
    borderRadius: "16px",
    border: "1px solid #eee",
    background: "#f9fafb",
    maxWidth: "500px",
    margin: "auto",
};

const form = {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
};

const input = {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
};

const button = {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#1976d2",
    color: "#fff",
    cursor: "pointer",
    fontWeight: 500,
};