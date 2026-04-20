export type CustomInputProps = {
  placeholder: string;
  type: "text" | "password" | "email";
  disabled: boolean;
};

export const CustomInput = ({ placeholder, type = "text", disabled = false }: CustomInputProps) => {
  const isDisabled = String(disabled) === 'true' || disabled === true;

  return (
    <div className="w-full max-w-sm">
      <input
        type={type}
        placeholder={placeholder}
        disabled={isDisabled}
        className="block w-full rounded-lg border-0 py-2.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500 disabled:ring-gray-200 transition-all outline-none"
      />
    </div>
  );
};
