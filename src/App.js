import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components/index";
import { Homepage, VideoListingpage } from "./pages/index.js";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/videos" element={<VideoListingpage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
