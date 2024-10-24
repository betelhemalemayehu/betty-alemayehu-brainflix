import { useState } from "react";
import "./App.scss";
import videoDetails from "./data/video-details.json";
import videos from "./data/videos.json";
import NavBar from "./components/NavBar/NavBar";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import NowPlayingCopy from "./components/NowPlayingCopy/NowPlayingCopy";
import CommentForm from "./components/CommentForm/CommentForm";
import NextVideos from "./components/NextVideos/NextVideos";

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);
  const [nextVideo, setNextVideo] = useState(videos);

  return (
    <div className="app">
      <NavBar />
      <VideoPlayer currentVideo={currentVideo} />
      <NowPlayingCopy currentVideo={currentVideo} />
      <CommentForm currentVideo={currentVideo} />
      <NextVideos videos={nextVideo} />
    </div>
  );
}

export default App;
