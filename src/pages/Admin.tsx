import { useEffect, useState } from "react";
import { OrderWrapper } from "../components/OrderWrapper";

interface Order {
  id: string;
  address: string;
  title: string;
  description: string;
  date: string;
}

export function Admin() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    async function fetchAdminData() {
      const response = await fetch("http://localhost:2626/order", {
        method: "GET",
        headers: { username: "admin" },
      });
      if (!response.ok) {
        console.error("Erro na requisição Admin");
        return;
      }
      const json = await response.json();
      setOrders(json);
    }

    fetchAdminData();

    // connects with websocket
    const ws = new WebSocket("ws://localhost:2626");

    ws.onopen = () => {
      ws.send("admin");
    };

    ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);

        if (message.type === "orderUpdated") {
          const updatedOrder = message.data;

          setOrders((prevOrders) =>
            prevOrders.map((order) =>
              order.id === updatedOrder.orderId
                ? { ...order, address: updatedOrder.address }
                : order
            )
          );
        }
      } catch (error) {
        console.error("Erro ao processar mensagem WebSocket:", error);
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <main className="h-screen bg-gradient-to-tl from-[#030637] via-[#3c0753] to-[#720455] py-[4%] px-[8%] relative grid grid-cols-2">
      <img
        src="./public/7-Powerful-Strategies-to-Increase-Repeat-Purchase-3.jpg"
        alt=""
        className="absolute h-full w-[45%] top-0 bottom-0 object-cover"
      />
      <div></div>
      <div>
        <h1 className="text-2xl text-white mb-4">Todos os pedidos</h1>
        <OrderWrapper orders={orders} />
      </div>
    </main>
  );
}
