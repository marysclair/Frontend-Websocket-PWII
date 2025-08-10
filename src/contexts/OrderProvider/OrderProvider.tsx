import { useEffect, useState } from "react";
import { OrdersContext } from "../OrderContext/OrderContext";
interface Order {
  id: string;
  address: string;
  title: string;
  description: string;
  date: string;
}

export const OrdersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const fetchOrders = async () => {
    const response = await fetch("http://localhost:2626/order/user", {
      method: "GET",
      headers: { username: "clara" },
    });

    if (!response.ok) throw new Error(`Erro na requisição: ${response.status}`);

    const data = await response.json();
    setOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <OrdersContext.Provider value={{ orders, fetchOrders }}>
      {children}
    </OrdersContext.Provider>
  );
};
