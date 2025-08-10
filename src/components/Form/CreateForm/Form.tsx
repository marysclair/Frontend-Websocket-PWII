import { useOrders } from "../../../contexts/useOrderContext";
import { Input } from "../Input";
import { Textarea } from "../Textarea";

export function Form() {
  const { fetchOrders } = useOrders();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const address = formData.get("address");
    const title = formData.get("title");
    const description = formData.get("description");

    const data = {
      address: address,
      title: title,
      description: description,
    };

    const response = await fetch("http://localhost:2626/order/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { username: "clara", "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    console.log(response);
    window.alert("Pedido criado com sucesso!");
    await fetchOrders();
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Input name="title" placeholder="Título do pedido" />
      <Input name="address" placeholder="Endereço do pedido" />
      <Textarea name="description" placeholder="Descrição do pedido" />
      <button
        className="rounded-full bg-[#3c0753] text-white py-2 hover:bg-[#720455] transition-all cursor-pointer duration-500"
        type="submit"
      >
        enviar
      </button>
    </form>
  );
}
