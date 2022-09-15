import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HeaderMenu from "./components/HeaderMenu";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Listen from "./pages/Listen";
import News from "./pages/News";
import Watch from "./pages/Watch";
import AudioPlay from "./components/AudioPlay";

function App() {
  return (
    <div className="App pages-container">
      <Router>
        <HeaderMenu />
        <Navbar />
        <AudioPlay />
        <Routes>
          <Route path="/spinRadio" element={<Listen />} />
          <Route path="news" element={<News />} />
          <Route path="watch" element={<Watch />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
