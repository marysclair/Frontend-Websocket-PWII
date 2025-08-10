import { PackagePlus, X } from "lucide-react";
import { Button } from "./Button";
import { Form } from "../Form/CreateForm/Form";
import { useState } from "react";

export function Modal() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      {isModalVisible && (
        <div className="fixed h-full w-full flex items-center justify-center">
          <div className="absolute h-full w-full bg-black/90"></div>
          <div className="bg-white p-4 relative z-10 rounded-sm text-[#030637] ">
            <button
              className="absolute top-4 right-4 cursor-pointer hover:rotate-90 transition-all"
              onClick={() => setIsModalVisible(!isModalVisible)}
            >
              <X color="#3c0753" />
            </button>
            <div className="text-xl font-bold mb-6 flex items-center gap-2">
              <PackagePlus />
              Criar pedido
            </div>
            <Form />
          </div>
        </div>
      )}
      <Button onClick={() => setIsModalVisible(!isModalVisible)} />
    </>
  );
}
