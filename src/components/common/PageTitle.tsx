const PageTitle = ({title}:{title:string}) => {
  return (
    <div className="flex justify-center items-center">
      <h1 >
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;