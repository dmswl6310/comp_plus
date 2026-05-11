import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Package, Search, Menu, Sun, Moon } from "lucide-react";
import SearchModal from "./SearchModal";
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-all duration-300">
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
                className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${isActive('/components') ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'}`}
              >
                컴포넌트 목록
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 h-9 px-3 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-gray-100 transition-colors"
                title="검색 (Ctrl+K)"
              >
                <Search size={18} />
                <span className="hidden sm:inline-block text-xs font-semibold bg-gray-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-700">⌘K</span>
              </button>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-gray-100 transition-colors"
                title="테마 변경"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button className="md:hidden flex h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-gray-100 transition-colors">
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
};

export default Header;
