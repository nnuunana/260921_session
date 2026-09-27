function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  disabled = false,
}) {
  const isFilled = value?.length > 0;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`
        w-full
        rounded-lg
        px-4
        py-3
        text-sm
        text-white
        placeholder:text-[#E5E5E5]
        outline-none
        transition

        ${isFilled ? "bg-[#666666]" : "bg-[#858585]"}

        focus:bg-[#A6A6A6]
        focus:ring-2
        focus:ring-[#555555]

        disabled:cursor-not-allowed
        disabled:bg-[#CCCCCC]
      `}
    />
  );
}

export default Input;