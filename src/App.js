import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components/index";
import { Homepage } from "./pages/index.js";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
