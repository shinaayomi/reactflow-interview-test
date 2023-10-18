import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import AppRouters from "./routers";

function App() {
  return (
    <main>
      <Navbar />

      <AppRouters />
    </main>
  );
}

export default App;
