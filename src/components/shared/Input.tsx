export default function Input({
  className,
  type = "text",
  placeholder,
}: {
  className?: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-72 h-12 bg ${className} bg-transparent outline-2 outline-rose-900 text-rose-800 outline rounded-sm pl-2 placeholder:text-rose-800 text-xl`}
    />
  );
}
