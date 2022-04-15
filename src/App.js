import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components/index";
import { Homepage, VideoListingpage, VideoPage } from "./pages/index.js";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/videos" element={<VideoListingpage />} />
        <Route path="/video/:videoId" element={<VideoPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
