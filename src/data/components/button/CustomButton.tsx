export const CustomButton = ({ label }: { label: string }) => {
  return (
    <button className="rounded bg-blue-500 px-4 py-2 text-white">
      {label}
    </button>
  );
};
