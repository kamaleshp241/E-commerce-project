import { useState } from "react";
import ProductCard from "../components/ProductCard";
import CategoryList from "../components/CategoryList";
import Arduino from '../assets/arduino.jpg';
import Motor_driver from '../assets/motor_driver.jpg';
import berrypi from '../assets/berrypi.jpg';
import ultrasonic from '../assets/ultrasonic.jpg';
import Irsensor from '../assets/Irsensor.jpg';
import wifimodule from '../assets/wifimodule.jpg'

const sampleProducts = [
  { id: 1, code: "001", name: "Arduino Uno", price: 550, image: Arduino, category: "Boards" },
  { id: 2, code: "002", name: "L298N Motor Driver", price: 120, image: Motor_driver, category: "Modules" },
  { id: 3, code: "003", name: "IR Sensor", price: 30, image: Irsensor, category: "Sensors" },
  { id: 4, code: "004", name: "Raspberry Pi", price: 3500, image: berrypi, category: "Boards" },
  { id: 5, code: "005", name: "HC-SR04 Ultrasonic Sensor", price: 150, image: ultrasonic, category: "Sensors" },
  { id: 6, code: "006", name: "ESP32 WiFi Module", price: 800, image: wifimodule, category: "Modules" },
];

const sampleCategories = ["All", "Boards", "Modules", "Sensors"];

const Dashboard = ({ searchQuery }) => {
  const [category, setCategory] = useState("All");

  const filteredProducts = sampleProducts.filter(product => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      {/* Category List */}
      <CategoryList
        categories={sampleCategories}
        onSelect={setCategory}
        selectedCategory={category}
      />

      <h2 className="text-xl font-semibold mt-6 mb-2">Products</h2>
      {/* Display filtered products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
