interface InputProps {
  name: string;
  placeholder: string;
}

export function Input({ name, placeholder }: InputProps) {
  return (
    <input
      type="text"
      name={name}
      className="border border-neutral-500 w-full px-3 py-1 rounded-lg placeholder-neutral-500"
      placeholder={placeholder}
    />
  );
}
