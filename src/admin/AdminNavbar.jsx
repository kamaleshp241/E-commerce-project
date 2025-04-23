import { Link, useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin"); // Remove admin session
    navigate("/admin/login"); // Redirect to admin login page
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <div className="flex gap-4">
        <Link to="/admin/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link to="/admin/products" className="hover:underline">
          Manage Products
        </Link>
        <Link to="/admin/orders" className="hover:underline">
          Manage Orders
        </Link>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
