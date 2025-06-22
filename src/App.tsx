
import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const App=()=> {

  return (
    <>
    <Header/>
     <main>
      <Outlet/>
     </main>
     <Footer/>
    </>
  )
}

export default App
