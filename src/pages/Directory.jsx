import { useState } from "react";

const listings = [
  {
    name: "Maasai Art Center",
    location: "Kajiado",
    type: "Art & Culture",
    description: "Empowering local Maasai youth through art exhibitions, beadwork, and storytelling workshops.",
  },
  {
    name: "Kibera Street Kitchen",
    location: "Nairobi",
    type: "Food Hub",
    description: "A youth-run food stall collective serving local dishes with a mission to fight unemployment.",
  },
  {
    name: "Elgon Trek Guides",
    location: "Bungoma",
    type: "Tour Service",
    description: "Eco-guides from Mt. Elgon offering cultural hikes and wildlife experiences led by local youth.",
  },
  {
    name: "Coast Music Collective",
    location: "Mombasa",
    type: "Art & Culture",
    description: "A platform for young musicians, dancers, and poets from the coastal region.",
  },
  {
    name: "Turkana Textile Co.",
    location: "Lodwar",
    type: "Crafts",
    description: "A youth-owned textile workshop preserving Turkana weaving traditions with a modern twist.",
  },
  {
    name: "Nakuru Food Park",
    location: "Nakuru",
    type: "Food Hub",
    description: "Cultural food court offering eco-friendly food stalls and Swahili flavors, run by local youth.",
  },
  {
    name: "Isiolo Desert Art Lab",
    location: "Isiolo",
    type: "Art & Culture",
    description: "Youth training center promoting desert-based artwork, pottery, and nomadic storytelling.",
  },
  {
    name: "Kisumu Lake Tours",
    location: "Kisumu",
    type: "Tour Service",
    description: "Youth-operated boat safaris and cultural tours on Lake Victoria’s shores.",
  },
  {
    name: "Mathare Makerspace",
    location: "Nairobi",
    type: "Crafts",
    description: "Makerspace teaching robotics, crafts, and upcycling to urban youth.",
  },
  {
    name: "Bomet Cultural Farm",
    location: "Bomet",
    type: "Agritourism",
    description: "Sustainable farm offering agro-tourism and herbal walk experiences led by young farmers.",
  },
];

export default function Directory() {
  const [locationFilter, setLocationFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const filtered = listings.filter(item => {
    const locationMatch = locationFilter === "All" || item.location === locationFilter;
    const typeMatch = typeFilter === "All" || item.type === typeFilter;
    return locationMatch && typeMatch;
  });

  const uniqueLocations = ["All", ...new Set(listings.map(item => item.location))];
  const uniqueTypes = ["All", ...new Set(listings.map(item => item.type))];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
        🧭 Youth-Led Directory
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="p-2 rounded border shadow-sm"
        >
          {uniqueLocations.map(loc => (
            <option key={loc}>{loc}</option>
          ))}
        </select>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="p-2 rounded border shadow-sm"
        >
          {uniqueTypes.map(type => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filtered.map((item, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-5 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
            <p className="text-sm text-gray-600 mb-1">
              📍 {item.location} — {item.type}
            </p>
            <p className="text-gray-700 text-sm">{item.description}</p>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full text-center text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
}
