import { Check } from "lucide-react";
import { Input } from "../Input";
import { useOrders } from "../../../contexts/useOrderContext";

interface FormProps {
  id: string;
  address?: string;
  title?: string;
  description?: string;
  date?: string;
}

export function Form({ id }: FormProps) {
  const { fetchOrders } = useOrders();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const address = formData.get("address");

    const data = {
      address: address,
    };

    const response = await fetch(`http://localhost:2626/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: { username: "clara", "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    window.alert("Pedido atualizado com sucesso!");
    await fetchOrders();
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex items-center gap-2">
        <Input name="address" placeholder="Endereço do pedido" />
        <button
          className="rounded-md bg-[#3c0753] p-1 hover:bg-[#720455] transition-all cursor-pointer"
          type="submit"
        >
          <Check color="#fff" />
        </button>
      </div>
    </form>
  );
}
