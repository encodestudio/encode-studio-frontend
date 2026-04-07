import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend
} from "recharts";
import toast from "react-hot-toast";
// import { Analytics } from '@vercel/analytics/react';

export default function WaitlistDashboard() {
    const navigate = useNavigate();

    // 🔐 Auth check
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) navigate("/admin-login");
    }, []);

    const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";
    const [data, setData] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [productFilter, setProductFilter] = useState("All");
    const [dateFilter, setDateFilter] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const itemsPerPage = 10;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    // const [debounceddebouncedSearch, setDebounceddebouncedSearch] = useState("");
    const highlightText = (text) => {
        if (!debouncedSearch) return text;

        const regex = new RegExp(`(${debouncedSearch})`, "gi");
        return text.split(regex).map((part, i) =>
            part.toLowerCase() === debouncedSearch.toLowerCase()
                ? <span key={i} style={{ background: "#fde68a" }}>{part}</span>
                : part
        );
    };

    const [loading, setLoading] = useState(true);
    const shimmerStyles = `
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
`;

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 400);

        return () => clearTimeout(timer);
    }, [search]);

    // 📡 Fetch data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");

                const res = await fetch(`${API_BASE}/api/waitlist-data`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const result = await res.json();

                setData(result);
                setFiltered(result);
            } catch (err) {
                console.error("Fetch error:", err);
            }
        };

        fetchData();
    }, []);

    // 🔍 Filtering
    useEffect(() => {
        let temp = [...data];

        if (productFilter !== "All") {
            temp = temp.filter((item) => item.product === productFilter);
        }

        if (debouncedSearch) {
            temp = temp.filter(
                (item) =>
                    item.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
                    item.email.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
                    item.phone?.includes(debouncedSearch) // 🔥 added
            );
        }

        if (dateFilter !== "All") {
            const now = new Date();

            temp = temp.filter((item) => {
                const created = new Date(item.createdAt);
                const diff = (now - created) / (1000 * 60 * 60 * 24);

                if (dateFilter === "Last 7 days") return diff <= 7;
                if (dateFilter === "Last 30 days") return diff <= 30;
            });
        }

        setFiltered(temp);
        setCurrentPage(1); // 🔥 VERY IMPORTANT
    }, [debouncedSearch, productFilter, dateFilter, data]);

    // 📊 Stats
    const total = data.length;
    const campus = data.filter((d) => d.product === "Encode Campus").length;
    const verify = data.filter((d) => d.product === "Encode Verify").length;

    const today = data.filter(
        (d) =>
            new Date(d.createdAt).toDateString() ===
            new Date().toDateString()
    ).length;

    // 📈 Chart Data
    const chartData = Object.values(
        data.reduce((acc, item) => {
            const date = new Date(item.createdAt).toLocaleDateString();

            if (!acc[date]) acc[date] = { date, count: 0 };
            acc[date].count += 1;

            return acc;
        }, {})
    );

    const pieData = [
        { name: "Campus", value: campus },
        { name: "Verify", value: verify },
    ];

    // 📥 CSV Export
    const exportCSV = () => {
        if (!data.length) return;

        const headers = ["Name", "Email", "Product", "Date"];

        const rows = data.map((item) => [
            item.name,
            item.email,
            item.product,
            new Date(item.createdAt).toLocaleString(),
        ]);

        const csv =
            [headers, ...rows].map((e) => e.join(",")).join("\n");

        const blob = new Blob([csv], { type: "text/csv" });
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "waitlist.csv";
        a.click();
    };

    const fetchData = async () => {
        try {
            setLoading(true); // 🔥 start loading

            const token = localStorage.getItem("token");

            const res = await fetch(`${API_BASE}/api/waitlist-data`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const result = await res.json();

            setData(result);
            setFiltered(result);

        } catch (err) {
            console.error("Fetch error:", err);
        } finally {
            setLoading(false); // 🔥 stop loading
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async () => {
        try {
            const res = await fetch(`${API_BASE}/api/waitlist/${selectedId}`, {
                method: "DELETE",
            });

            let data = {};

            try {
                data = await res.json();
            } catch (e) { }

            if (res.ok) {
                toast.success("Entry deleted successfully 🗑️");
                fetchData();
            } else {
                toast.error(data.message || "Failed to delete entry");
            }

        } catch (err) {
            console.error("Delete error:", err);
            toast.error("Network error. Please try again.");
        } finally {
            setShowDeleteModal(false);
            setSelectedId(null);
        }
    };


    return (
        <div style={layout}>
            <Sidebar navigate={navigate} />

            <div style={main}>
                {/* HEADER */}
                <div style={header}>
                    <h1>🚀 Waitlist Dashboard</h1>
                    <button style={exportBtn} onClick={exportCSV}>
                        Export CSV
                    </button>
                </div>

                {/* STATS */}
                <div style={statsGrid}>
                    <Card title="Total Users" value={total} />
                    <Card title="Today Signups" value={today} />
                    <Card title="Encode Campus" value={campus} />
                    <Card title="Encode Verify" value={verify} />
                </div>

                {/* CHARTS */}
                <div style={chartGrid}>
                    <div style={chartBox}>
                        <h3>📈 Growth</h3>
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={chartData}>
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="count" stroke="#2563eb" strokeWidth={3} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <div style={chartBox}>
                        <h3>📊 Product Split</h3>
                        <PieChart width={300} height={300}>
                            <Pie
                                data={pieData}
                                dataKey="value"
                                nameKey="name"
                                outerRadius={100}
                                label={({ name, percent }) =>
                                    `${name} (${(percent * 100).toFixed(0)}%)`
                                }
                            >
                                <Cell fill="#2563eb" />
                                <Cell fill="#10b981" />
                            </Pie>

                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </div>
                </div>

                {/* FILTERS */}
                <div style={filtersPremium}>
                    <input
                        placeholder="🔍 Search name, email, phone..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={inputPremium}
                    />

                    <select
                        value={productFilter}
                        onChange={(e) => setProductFilter(e.target.value)}
                        style={inputPremium}
                    >
                        <option value="All">All Products</option>
                        <option value="Encode Campus">Encode Campus</option>
                        <option value="Encode Verify">Encode Verify</option>
                    </select>

                    <select
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                        style={inputPremium}
                    >
                        <option value="All">All Time</option>
                        <option value="Last 7 days">Last 7 days</option>
                        <option value="Last 30 days">Last 30 days</option>
                    </select>
                </div>

                <button style={refreshBtn} onClick={fetchData}>
                    🔄 Refresh
                </button>

                {/* TABLE */}
                <div style={tableContainer}>
                    <table style={{ width: "100%" }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th style={th}>Name</th>
                                <th style={th}>Email</th>
                                <th style={th}>Phone</th>
                                <th style={th}>Product</th>
                                <th style={th}>Date</th>
                                <th style={th}>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            <style>{shimmerStyles}</style>
                            {loading ? (
                                // 🔥 Loading Skeleton
                                Array.from({ length: 5 }).map((_, i) => (
                                    <tr key={i}>
                                        <td colSpan="7" style={{ padding: "12px" }}>
                                            <div style={skeletonRow}></div>
                                        </td>
                                    </tr>
                                ))
                            ) : currentItems.length === 0 ? (
                                // 🚫 Empty State
                                <tr>
                                    <td colSpan="7" style={{ textAlign: "center", padding: "30px" }}>
                                        No data found 🚫
                                    </td>
                                </tr>
                            ) : (
                                // ✅ Actual Data
                                currentItems.map((item, index) => (
                                    <tr
                                        key={item._id}
                                        style={{
                                            background: index % 2 ? "#f9fafb" : "#fff",
                                        }}
                                    >
                                        <td style={td}>{indexOfFirstItem + index + 1}</td>

                                        <td style={td}>{highlightText(item.name)}</td>

                                        <td style={td}>{highlightText(item.email)}</td>

                                        <td
                                            style={{ ...td, cursor: "pointer", color: "#2563eb" }}
                                            onClick={() => {
                                                navigator.clipboard.writeText(item.phone);
                                                alert("Phone copied!");
                                            }}
                                        >
                                            {item.phone ? `+91 ${item.phone}` : "-"}
                                        </td>

                                        <td style={td}>{item.product}</td>

                                        <td style={td}>
                                            {new Date(item.createdAt).toLocaleString()}
                                        </td>
                                        <td style={td}>
                                            <button
                                                style={deleteBtn}
                                                onClick={() => {
                                                    setSelectedId(item._id);
                                                    setShowDeleteModal(true);
                                                }}
                                            >
                                                🗑️
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
                <div style={paginationPremium}>
                    <button
                        style={pageBtnPremium}
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        ←
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            style={{
                                ...pageBtnPremium,
                                ...(currentPage === page ? activePagePremium : {})
                            }}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        style={pageBtnPremium}
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        →
                    </button>
                </div>
            </div>
            {showDeleteModal && (
                <div style={modalOverlay}>
                    <div style={modalBox}>
                        <h3 style={{ marginBottom: "10px" }}>Delete Entry</h3>
                        <p style={{ marginBottom: "20px", color: "#6b7280" }}>
                            Are you sure you want to delete this entry? This action cannot be undone.
                        </p>

                        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                            <button
                                style={cancelBtn}
                                onClick={() => setShowDeleteModal(false)}
                            >
                                Cancel
                            </button>

                            <button
                                style={confirmDeleteBtn}
                                onClick={handleDelete}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

/* ---------- SIDEBAR ---------- */

function Sidebar({ navigate }) {
    return (
        <div style={sidebar}>
            <h2 style={{ color: "white" }}>Encode Studio</h2>

            <div>
                <p style={menuItem}>📊 Dashboard</p>
            </div>

            <button
                style={logoutBtn}
                onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/admin-login");
                }}
            >
                Logout
            </button>
        </div>
    );
}

/* ---------- CARD ---------- */

function Card({ title, value }) {
    return (
        <div style={card}>
            <p>{title}</p>
            <h2>{value}</h2>
        </div>
    );
}

/* ---------- STYLES ---------- */

const layout = { display: "flex" };
const main = { flex: 1, padding: "30px", background: "#f9fafb" };
const header = { display: "flex", justifyContent: "space-between", marginBottom: "20px" };

const statsGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    marginBottom: "30px",
};

const chartGrid = {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "20px",
    marginBottom: "30px",
};

const chartBox = {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

const filters = { display: "flex", gap: "10px", marginBottom: "20px" };
const input = { padding: "10px", borderRadius: "8px", border: "1px solid #ccc" };

const tableContainer = {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
};

const th = { textAlign: "left", padding: "10px" };
const td = { padding: "10px" };

const sidebar = {
    width: "220px",
    background: "#111827",
    color: "white",
    height: "100vh",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    position: "sticky",
    top: 0,
};

const menuItem = { marginTop: "20px", cursor: "pointer" };

const logoutBtn = {
    background: "#ef4444",
    color: "white",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
};

const exportBtn = {
    background: "#10b981",
    color: "white",
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
};

const card = {
    background: "#111827",
    color: "white",
    padding: "20px",
    borderRadius: "12px",
};

const refreshBtn = {
    background: "#2563eb",
    color: "white",
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    marginRight: "10px",
};

const filtersContainer = {
    display: "flex",
    gap: "12px",
    marginBottom: "20px",
    background: "white",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

const inputModern = {
    flex: 1,
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    outline: "none",
    fontSize: "14px",
    transition: "all 0.2s ease",
};

const paginationContainer = {
    marginTop: "25px",
    display: "flex",
    justifyContent: "center",
    gap: "8px",
};

const pageBtn = {
    padding: "8px 12px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    background: "white",
    cursor: "pointer",
    transition: "all 0.2s ease",
};

const activePageBtn = {
    background: "#2563eb",
    color: "white",
    border: "none",
    fontWeight: "bold",
};

const filtersPremium = {
    display: "flex",
    gap: "12px",
    marginBottom: "25px",
    background: "rgba(255,255,255,0.7)",
    backdropFilter: "blur(10px)",
    padding: "16px",
    borderRadius: "14px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
};

const inputPremium = {
    flex: 1,
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #e5e7eb",
    outline: "none",
    fontSize: "14px",
    transition: "all 0.2s ease",
};
const paginationPremium = {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "6px",
};

const pageBtnPremium = {
    padding: "8px 14px",
    borderRadius: "999px",
    border: "1px solid #e5e7eb",
    background: "white",
    cursor: "pointer",
    transition: "all 0.2s ease",
};

const activePagePremium = {
    background: "#111827",
    color: "white",
    fontWeight: "bold",
};

const skeletonRow = {
    height: "16px",
    width: "100%",
    borderRadius: "6px",
    background: "linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%)",
    backgroundSize: "200% 100%",
    animation: "shimmer 1.2s infinite",
};

const deleteBtn = {
    background: "#ef4444",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "12px",
};

const modalOverlay = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
};

const modalBox = {
    background: "white",
    padding: "24px",
    borderRadius: "12px",
    width: "350px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
};

const cancelBtn = {
    padding: "8px 14px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    background: "white",
    cursor: "pointer",
};

const confirmDeleteBtn = {
    padding: "8px 14px",
    borderRadius: "8px",
    border: "none",
    background: "#ef4444",
    color: "white",
    cursor: "pointer",
};