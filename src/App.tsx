import "./App.css";
import AppFooter from "./components/layout/AppFooter";
import AppHeader from "./components/layout/AppHeader";
import Router from "./Router";

function App() {
  return (
    <>
      <AppHeader />
      <main className="min-h-screen">
        <Router />
      </main>
      <AppFooter />
    </>
  );
}

export default App;
