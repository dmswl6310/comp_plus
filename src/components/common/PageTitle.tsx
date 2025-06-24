const PageTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-center">
      <h1>{title}</h1>
    </div>
  );
};

export default PageTitle;
