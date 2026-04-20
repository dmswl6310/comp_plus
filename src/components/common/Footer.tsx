import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center sm:flex-row sm:justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-900 font-semibold tracking-tight">
          Uikki<span className="text-blue-600">✦</span>Uikki
        </div>
        <p className="text-sm text-gray-500 text-center sm:text-left">
          &copy; {new Date().getFullYear()} 황은지가 디자인하고 개발했습니다.
        </p>
        <div className="flex gap-4">
          <Link to="/" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">홈</Link>
          <Link to="/components" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">컴포넌트 목록</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
