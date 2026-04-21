export type CustomInputProps = {
  placeholder: string;
  type: "text" | "password" | "email";
  disabled: boolean;
};

export const CustomInput = ({ placeholder, type = "text", disabled = false }: CustomInputProps) => {
  const isDisabled = String(disabled) === 'true' || disabled === true;

  return (
    <div className="w-full max-w-sm relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M21.18 1.63a2 2 0 0 0-2.82 0l-9.5 9.5a2 2 0 0 0-.5.98l-.77 2.86a2 2 0 0 0 2.44 2.44l2.86-.77a2 2 0 0 0 .98-.5l9.5-9.5a2 2 0 0 0 0-2.82z"/><line x1="15" y1="5" x2="19" y2="9"/></svg>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        disabled={isDisabled}
        className="block w-full rounded-xl border-0 py-3 pl-10 pr-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 bg-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-50/50 disabled:text-gray-400 disabled:ring-gray-200 transition-all outline-none hover:ring-gray-300"
      />
    </div>
  );
};
