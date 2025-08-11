import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between">
      <>Title</>
      <div className="flex gap-4">
        <div>Search</div>
        <Link to="/components">Components</Link>
        <div>About</div>
      </div>
    </div>
  );
};

export default Header;
