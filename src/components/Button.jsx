export default function Button({
  text,
  type = "button",
  onClick,
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="
        w-full
        px-4 py-3
        rounded-lg
        text-sm text-white
        bg-[#4A4A4A]
        hover:bg-[#3D3D3D]
        active:bg-[#333333]
        disabled:cursor-not-allowed
        disabled:bg-[#CCCCCC]
      "
    >
      {text}
    </button>
  );
}