import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// User side components
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Address from "./pages/Address";

// Admin side components
import AdminLogin from "./admin/AdminLogin";
import ProtectedAdminRoute from "./admin/ProtectedAdminRoute";
import AdminNavbar from "./admin/AdminNavbar";
import AdminDashboard from "./admin/AdminDashboard";
import ManageProducts from "./admin/ManageProducts";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        {/* 🔵 User Side */}
        <Route
          path="/*"
          element={
            <>
              <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              <Routes>
                <Route path="/" element={<Dashboard searchQuery={searchQuery} />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/address" element={<Address />} />
              </Routes>
            </>
          }
        />

        {/* 🔴 Admin Side */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/*"
          element={
            <ProtectedAdminRoute>
              <>
                <AdminNavbar />
                <Routes>
                  <Route path="dashboard" element={<AdminDashboard />} />
                  <Route path="products" element={<ManageProducts />} />
                </Routes>
              </>
            </ProtectedAdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
