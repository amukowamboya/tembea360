import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen p-6 flex flex-col items-center justify-center text-center space-y-6">
      <h1 className="text-5xl font-extrabold text-blue-800 drop-shadow">Tembea360</h1>
      <p className="text-xl text-gray-700 max-w-xl">
        Your AI-powered cultural concierge — discover Kenya’s hidden gems through youth-led experiences and immersive smart tours.
      </p>

      {/* Logo image (optional). Put /logo.png in public folder */}
      <img src="/logo.png" alt="Tembea360 Logo" className="w-32 h-32 rounded-full border-4 border-white shadow-lg" />

      {/* Navigation Buttons */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mt-8 w-full max-w-2xl">
        <Link to="/map" className="bg-blue-600 text-white py-4 px-6 rounded-2xl shadow hover:bg-blue-700 text-lg">
          🌍 Explore Map
        </Link>
        <Link to="/chat" className="bg-green-600 text-white py-4 px-6 rounded-2xl shadow hover:bg-green-700 text-lg">
          🤖 AI Concierge
        </Link>
        <Link to="/directory" className="bg-purple-600 text-white py-4 px-6 rounded-2xl shadow hover:bg-purple-700 text-lg">
          🧭 Youth Directory
        </Link>
      </div>

      {/* Language Selector UI (demo-only) */}
      <div className="mt-6">
        <label className="block text-sm text-gray-600 mb-1">Language:</label>
        <select className="p-2 rounded border shadow">
          <option>English</option>
          <option>Swahili</option>
          <option>French</option>
        </select>
      </div>
    </div>
  );
}
