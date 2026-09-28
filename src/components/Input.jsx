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
        px-6 py-3
        rounded-xl
        body-sm
        text-white
        placeholder:text-primary-100
        outline-none
        transition

        ${isFilled ? "bg-primary-600" : "bg-primary-500"}

        focus:bg-primary-300
        focus:ring-2
        focus:ring-primary-700

        disabled:cursor-not-allowed
        disabled:bg-primary-200
        disabled:text-primary-100
      `}
    />
  );
}

export default Input;