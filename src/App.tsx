import { Outlet } from "react-router-dom";
import Header from "@components/common/Header";
import Footer from "@components/common/Footer";

const App = () => {
  // 중첩 라우팅을 위한 outlet
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-6 sm:px-12 lg:px-18 xl:px-22">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
