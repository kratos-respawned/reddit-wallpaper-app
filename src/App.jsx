import Navbar from "../src/components/Navbar";
import { Routes, Route } from "react-router-dom";
import "./css/style.css";
import F404 from "./components/404";
import Home from "./components/Home";
import Fetch from "./components/Fetch";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/*" element={<F404 />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/widewalls"
          element={<Fetch data="widescreenwallpaper+wqhd_wallpaper" key={1} />}
        />
        <Route
          path="/walls"
          element={
            <Fetch
              data="wallpaper+wallpapers+wallpaperengine+wallpaperdump"
              key={2}
            />
          }
        />

        <Route
          path="/phonewalls"
          element={<Fetch data="phonewallpaper+phonewallpapers" key={3} />}
        />

        <Route
          path="/anime"
          element={<Fetch data="Animewallpaper+" key={4} />}
        />

        <Route
          path="/meme"
          element={<Fetch data="dankMeme+darkHumor+meme" key={5} />}
        />
      </Routes>
    </div>
  );
}

export default App;
