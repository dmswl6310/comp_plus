export type CustomButtonProps = {
  label: string;
};

export const CustomButton = ({ label }: CustomButtonProps) => {
  return (
    <button className="rounded bg-blue-500 px-4 py-2 text-white">
      {label}
    </button>
  );
};
