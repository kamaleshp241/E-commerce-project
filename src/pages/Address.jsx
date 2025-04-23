import { useState } from "react";

const Address = () => {
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Address submitted:", address);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded">
      <h2 className="text-2xl font-bold mb-4">Delivery Address</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows={4}
          className="w-full border p-2 rounded mb-4"
          placeholder="Enter your full delivery address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <button className="bg-purple-600 text-white px-4 py-2 rounded">
          Confirm Address & Proceed
        </button>
      </form>
    </div>
  );
};

export default Address;
