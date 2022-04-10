import { Route, Routes } from "react-router-dom";
import { Header } from "./components/index";
import { Homepage } from "./pages/index.js";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
