import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-xl shadow hover:shadow-lg transition w-[250px] h-[300px] flex flex-col items-left justify-between p-2">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[200px] object-cover rounded-t-md"
      />
      <h2 className="font-bold text-sm text-center">{product.name}</h2>
      {/* Code and Price in the same line */}
      
      <div className="flex justify-between items-center text-sm">
        <p className="text-gray-600 font-bold">Code: {product.code}</p>
        <p className="text-gray-600 font-bold">Price: {product.price}</p>
      </div>
      
      <Link to={`/product/${product.id}`}>
        <button className="bg-blue-600 text-white px-2 py-1 rounded text-xs w-full font-bold">
          Buy
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
