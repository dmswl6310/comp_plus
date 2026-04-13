import { Link, useLocation } from "react-router-dom";
import { Package, Search, Menu } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
            <Package size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Uikki<span className="text-blue-600">✦</span>Uikki
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/components" 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${isActive('/components') ? 'text-blue-600' : 'text-gray-600'}`}
            >
              컴포넌트 목록
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
              <Search size={20} />
            </button>
            <button className="md:hidden flex h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
