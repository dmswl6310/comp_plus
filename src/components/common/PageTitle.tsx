const PageTitle = ({ title, description }: { title: string; description?: string }) => {
  return (
    <div className="flex flex-col gap-2 mb-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
      {description && <p className="text-gray-500">{description}</p>}
    </div>
  );
};

export default PageTitle;
