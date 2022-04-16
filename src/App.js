import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components/index";

import { Homepage, VideoListingpage, VideoPage } from "./pages/index.js";

import { Homepage, Signin, Signup, VideoListingpage } from "./pages/index.js";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/videos" element={<VideoListingpage />} />

        <Route path="/video/:videoId" element={<VideoPage />} />

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
