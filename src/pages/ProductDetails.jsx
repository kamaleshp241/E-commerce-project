import { useParams } from "react-router-dom";

const productData = {
  1: { name: "Arduino Uno", price: 550, description: "A microcontroller board based on the ATmega328P.", image: "/assets/arduino.jpg" },
  2: { name: "L298N Motor Driver", price: 120, description: "Dual H-Bridge motor driver module.", image: "/assets/l298n.jpg" },
  3: { name: "IR Sensor", price: 30, description: "Detects infrared radiation for object detection.", image: "/assets/ir.jpg" },
};

const ProductDetails = () => {
  const { id } = useParams();
  const product = productData[id];

  if (!product) return <div className="p-4">Product not found.</div>;

  return (
    <div className="p-4 flex gap-6">
      <img src={product.image} alt={product.name} className="h-64 w-64 object-contain" />
      <div>
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-lg text-green-600 font-semibold">₹{product.price}</p>
        <p className="mt-2">{product.description}</p>
        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
