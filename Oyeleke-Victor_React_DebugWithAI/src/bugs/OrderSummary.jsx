import { useState, useEffect } from 'react';

function OrderSummary({ order }) {
  const [showDetails, setShowDetails] = useState(false);

  if (!order) {
    return <p>Loading order...</p>;
  }

  const total = order.items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div>
      <h3>Order #{order.id} - Total: ${total}</h3>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide' : 'Show'} details
      </button>
      {showDetails && (
        <ul>{order.items.map(i => <li key={i.name}>{i.name} x{i.qty}</li>)}</ul>
      )}
    </div>
  );
}

export default function OrderPage() {
  const [order, setOrder] = useState(null);
  useEffect(() => {
    setTimeout(() => setOrder({ id: 42, items: [
      { name: 'Pen', price: 2, qty: 3 }, { name: 'Book', price: 8, qty: 1 },
    ] }), 1000);
  }, []);
  return <OrderSummary order={order} />;
}