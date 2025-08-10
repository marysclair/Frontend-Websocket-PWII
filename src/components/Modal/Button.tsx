import { Plus } from "lucide-react";

interface ButtonProps {
  onClick: () => void;
}
export function Button({ onClick }: ButtonProps) {
  return (
    <button
      className="absolute right-8 bottom-8 p-2 bg-white rounded-full hover:rotate-90 transition-all cursor-pointer hover:scale-105"
      onClick={onClick}
    >
      <Plus className="size-8" color="#3c0753" />
    </button>
  );
}
