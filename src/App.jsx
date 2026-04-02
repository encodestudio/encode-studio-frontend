import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import EncodeCampus from "./pages/products/EncodeCampus";
import EncodeVerify from "./pages/products/EncodeVerify";

import WhatsAppButton from "./components/common/WhatsAppButton";

import WaitlistDashboard from "./pages/WaitlistDashboard";
import AdminLogin from "./pages/AdminLogin";

import { Toaster } from "react-hot-toast";

function App() {
  const location = useLocation();

  // 👇 Pages where navbar should NOT appear
  const hideLayout =
    location.pathname.includes("/dashboard") ||
    location.pathname.includes("/admin-login");

  return (
    <>

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "#111827",
            color: "#fff",
          },
        }}
      />
      {/* Navbar */}
      {!hideLayout && <Navbar />}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/encode-campus" element={<EncodeCampus />} />
        <Route path="/products/encode-verify" element={<EncodeVerify />} />

        {/* Admin */}
        <Route path="/dashboard" element={<WaitlistDashboard />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>

      {/* Footer */}
      {!hideLayout && <Footer />}

      {/* WhatsApp */}
      {!hideLayout && <WhatsAppButton />}
    </>
  );
}

export default App;