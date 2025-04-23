import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      <div className="flex flex-col gap-4">
        <Link to="/admin/products" className="bg-blue-600 text-white p-3 rounded">Manage Products</Link>
        <Link to="/admin/orders" className="bg-green-600 text-white p-3 rounded">Manage Orders</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
