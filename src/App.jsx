import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MapPage from "./pages/MapPage";
import Chatbot from "./pages/Chatbot";
import Directory from "./pages/Directory";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/chat" element={<Chatbot />} />
          <Route path="/directory" element={<Directory />} />
        </Routes>
      </div>
    </Router>
  );
}
