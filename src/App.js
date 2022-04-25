import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components/index";
import { Homepage, Signin, Signup, VideoListingpage,VideoPage,Playlistpage, SinglePlaylistPage, WatchLater } from "./pages/index.js";
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
        <Route path="/playlists" element={<Playlistpage />} />
        <Route path='/playlists/:playlistId' element={<SinglePlaylistPage />} />
        <Route path="/watchlater" element={<WatchLater />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
