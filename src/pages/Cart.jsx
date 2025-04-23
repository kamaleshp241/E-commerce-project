const Cart = () => {
    // Placeholder: Replace with actual cart state later
    const cartItems = [
      { id: 1, name: "Arduino Uno", price: 550 },
      { id: 2, name: "IR Sensor", price: 30 },
    ];
  
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cartItems.map(item => (
          <div key={item.id} className="border p-2 flex justify-between mb-2">
            <span>{item.name}</span>
            <span>₹{item.price}</span>
          </div>
        ))}
        <div className="mt-4 font-bold">Total: ₹{total}</div>
      </div>
    );
  };
  
  export default Cart;
  