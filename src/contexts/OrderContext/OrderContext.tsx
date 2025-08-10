import { createContext } from "react";

interface Order {
  id: string;
  address: string;
  title: string;
  description: string;
  date: string;
}

interface OrdersContextType {
  orders: Order[];
  fetchOrders: () => Promise<void>;
}

export const OrdersContext = createContext<OrdersContextType>({
  orders: [],
  fetchOrders: async () => {},
});
