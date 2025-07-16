import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MapPage from "./pages/MapPage";
import Chatbot from "./pages/Chatbot";
import Directory from "./pages/Directory";
import TourPage from "./pages/TourPage";
import Login from "./pages/Login";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import VisitorProfile from "./pages/VisitorProfile";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/chat" element={<Chatbot />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/tour" element={<TourPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<VolunteerDashboard />} />
        <Route path="/profile" element={<VisitorProfile />} />
      </Routes>
    </Router>
  );
}
