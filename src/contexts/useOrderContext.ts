import { useContext } from "react";
import { OrdersContext } from "./OrderContext/OrderContext";

export const useOrders = () => useContext(OrdersContext);
