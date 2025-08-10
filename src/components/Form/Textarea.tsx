interface TextareaProps {
  name: string;
  placeholder: string;
}

export function Textarea({ name, placeholder }: TextareaProps) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className="border border-neutral-500 w-100 px-3 py-1 rounded-lg placeholder-neutral-500"
    ></textarea>
  );
}
