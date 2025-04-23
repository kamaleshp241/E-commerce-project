import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim() === "") return;
    navigate("/"); // Navigate to the Dashboard page
  };
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Electro</Link>
      <div className="flex-1 flex justify-center">
        {/* Search Box */}
        <div className="flex items-center bg-white rounded-md overflow-hidden w-1/2">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 w-full text-black outline-none"
          />
          <button 
           onClick={handleSearch}
          className="bg-cyan-500  text-white px-4 py-3 hover:bg-cyan-600 rounded-r-lg">
            🔍
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 font-bold">
        <Link to="/cart">🛒Cart</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
