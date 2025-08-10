import { OrderCard } from "./OrderCard";
import { Sticker } from "lucide-react";

interface Order {
  id: string;
  address: string;
  title: string;
  description: string;
  date: string;
}

interface OrderWrapperProps {
  orders: Order[];
}

export function OrderWrapper({ orders }: OrderWrapperProps) {
  return (
    <div className="bg-white w-full rounded-md shadow-md flex flex-col p-2 max-h-4/5 overflow-auto">
      {orders.length === 0 ? (
        <div className="flex items-center justify-center gap-2 text-neutral-500">
          Seus pedidos irão aparecer aqui
          <Sticker />
        </div>
      ) : (
        orders.map((order) => {
          return (
            <OrderCard
              key={order.id}
              id={order.id}
              address={order.address}
              date={order.date}
              description={order.description}
              title={order.title}
            />
          );
        })
      )}
    </div>
  );
}
