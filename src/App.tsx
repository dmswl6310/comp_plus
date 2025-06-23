import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const App = () => {
  // 중첩 라우팅을 위한 outlet
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
