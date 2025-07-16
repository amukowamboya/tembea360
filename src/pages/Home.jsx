import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col justify-center items-center p-6 text-center space-y-6">
      <h1 className="text-5xl font-extrabold text-blue-800 drop-shadow">
        Tembea360
      </h1>

      <p className="text-xl max-w-xl text-gray-700">
        An AI-Powered, Youth-Led Smart Tourism Platform.
      </p>

      <img
        src="/logo.png"
        alt="Tembea360 Logo"
        className="w-28 h-28 rounded-full border-4 border-white shadow"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-md w-full">
        <Link
          to="/map"
          className="bg-blue-600 text-white py-3 px-6 rounded-xl shadow hover:bg-blue-700 transition"
        >
          🌍 Explore Map
        </Link>
        <Link
          to="/chat"
          className="bg-green-600 text-white py-3 px-6 rounded-xl shadow hover:bg-green-700 transition"
        >
          🤖 AI Concierge
        </Link>
        <Link
          to="/directory"
          className="bg-purple-600 text-white py-3 px-6 rounded-xl shadow hover:bg-purple-700 transition"
        >
          🧭 Youth Directory
        </Link>
        <Link
          to="/tour"
          className="bg-yellow-500 text-white py-3 px-6 rounded-xl shadow hover:bg-yellow-600 transition"
        >
          🏛️ Virtual Tour
        </Link>
      </div>

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
