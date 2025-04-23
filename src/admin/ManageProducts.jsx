import { useState } from "react";

const ManageProducts = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Arduino Uno", price: 550, category: "Boards" },
    { id: 2, name: "IR Sensor", price: 30, category: "Sensors" },
  ]);

  const [formData, setFormData] = useState({ name: "", price: "", category: "" });
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleAddOrUpdateProduct = (e) => {
    e.preventDefault();

    if (isEdit) {
      const updated = products.map(p =>
        p.id === editId ? { ...p, ...formData } : p
      );
      setProducts(updated);
      setIsEdit(false);
      setEditId(null);
    } else {
      const newProduct = {
        id: products.length + 1,
        ...formData,
      };
      setProducts([...products, newProduct]);
    }

    setFormData({ name: "", price: "", category: "" });
  };

  const handleEdit = (product) => {
    setFormData({ name: product.name, price: product.price, category: product.category });
    setIsEdit(true);
    setEditId(product.id);
  };

  const handleDelete = (id) => {
    const filtered = products.filter(product => product.id !== id);
    setProducts(filtered);
    if (id === editId) {
      setIsEdit(false);
      setFormData({ name: "", price: "", category: "" });
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Products</h2>

      {/* 🔁 Add / Edit Product Form */}
      <form onSubmit={handleAddOrUpdateProduct} className="flex flex-col gap-3 mb-6 max-w-md">
        <input
          type="text"
          placeholder="Product Name"
          className="border p-2 rounded"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          className="border p-2 rounded"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Category"
          className="border p-2 rounded"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          required
        />
        <button className={`py-2 rounded text-white ${isEdit ? "bg-yellow-600" : "bg-black"}`}>
          {isEdit ? "Update Product" : "Add Product"}
        </button>
      </form>

      {/* 📦 Product Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="p-2 border">{product.id}</td>
                <td className="p-2 border">{product.name}</td>
                <td className="p-2 border">₹{product.price}</td>
                <td className="p-2 border">{product.category}</td>
                <td className="p-2 border flex gap-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-600 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-4">No products available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
