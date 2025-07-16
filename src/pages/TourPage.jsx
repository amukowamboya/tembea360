import { Link } from "react-router-dom";

const tours = [
  {
    id: "fort-jesus",
    name: "Fort Jesus – Mombasa",
    description:
      "A 16th-century Portuguese fort that became a symbol of Swahili, Omani, and British resistance and culture. Now home to youth art exhibitions.",
    region: "Coast",
  },
  {
    id: "mt-elgon",
    name: "Mt. Elgon Eco Trails – Bungoma",
    description:
      "Led by local youth guides, this cultural trail offers hikes, waterfalls, and indigenous storytelling around Mt. Elgon.",
    region: "Western Kenya",
  },
  {
    id: "railway-museum",
    name: "Nairobi Railway Museum",
    description:
      "An urban cultural stop showcasing Kenya's railway history, now hosting youth heritage tours and innovation exhibits.",
    region: "Nairobi",
  },
  {
    id: "kit-mikayi",
    name: "Kit Mikayi Rock – Kisumu",
    description:
      "A sacred Luo rock formation tied to myths of devotion. Youth-run site tours blend oral history with spiritual meaning.",
    region: "Nyanza",
  },
];

export default function TourPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-center text-yellow-600 mb-6">🏛️ Virtual Cultural Tours</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {tours.map((tour) => (
          <div key={tour.id} className="bg-white p-6 rounded-xl shadow border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800">{tour.name}</h3>
            <p className="text-sm text-gray-600 italic mb-2">Region: {tour.region}</p>
            <p className="text-gray-700 mb-4">{tour.description}</p>
            <Link
              to={`/tour/${tour.id}`}
              className="text-blue-600 underline hover:text-blue-800 text-sm"
            >
              🎧 Start Tour
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
