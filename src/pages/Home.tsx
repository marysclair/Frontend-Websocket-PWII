import { Modal } from "../components/Modal/Modal";
import { OrderWrapper } from "../components/OrderWrapper";
import { OrdersProvider } from "../contexts/OrderProvider/OrderProvider";
import { useOrders } from "../contexts/useOrderContext";

export function Home() {
  return (
    <OrdersProvider>
      <PageContent />
    </OrdersProvider>
  );
}

function PageContent() {
  const { orders } = useOrders();
  console.log(orders);

  return (
    <main className="h-screen bg-gradient-to-tl from-[#030637] via-[#3c0753] to-[#720455] py-[4%] px-[8%] relative grid grid-cols-2">
      <img
        src="./public/7-Powerful-Strategies-to-Increase-Repeat-Purchase-3.jpg"
        alt=""
        className="absolute h-full w-[45%] top-0 bottom-0 object-cover"
      />
      <div></div>
      <div>
        <h1 className="text-2xl text-white mb-4">Meus pedidos</h1>
        <OrderWrapper orders={orders} />
      </div>
      <Modal />
    </main>
  );
}
