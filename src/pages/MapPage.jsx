import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// 1. Category-grouped data with story popups
const categories = [
  {
    type: "Cultural Sites",
    color: "blue",
    places: [
      {
        name: "Fort Jesus",
        lat: -4.0635,
        lng: 39.6731,
        story: "Historic Portuguese fort, now a UNESCO heritage site preserving Swahili culture."
      },
      {
        name: "Koitalel Mausoleum",
        lat: 0.1666,
        lng: 35.4333,
        story: "Memorial to the Nandi resistance leader who fought British colonization."
      },
    ],
  },
  {
    type: "Youth-Led Tours",
    color: "green",
    places: [
      {
        name: "Elgon Trek Guides",
        lat: 1.1381,
        lng: 34.7507,
        story: "Run by local youth in Bungoma, offering authentic hikes around Mt. Elgon."
      },
      {
        name: "Kilimani City Hikes",
        lat: -1.292,
        lng: 36.8219,
        story: "Urban walks in Nairobi highlighting art, food, and untold city stories."
      },
    ],
  },
  {
    type: "Food & Culture Hubs",
    color: "red",
    places: [
      {
        name: "Kibera Street Kitchen",
        lat: -1.3112,
        lng: 36.7924,
        story: "Youth-run culinary space promoting community, jobs, and local food pride."
      },
      {
        name: "Nakuru Food Park",
        lat: -0.305,
        lng: 36.08,
        story: "Cultural food court offering eco-friendly food stalls and Swahili flavors."
      },
    ],
  },
];

// 2. Colored marker icons (hosted online)
const iconUrls = {
  blue:  "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  green: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  red:   "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
};

function colouredIcon(color) {
  return new L.Icon({
    iconUrl: iconUrls[color] || iconUrls.blue,
    shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
}

// 3. Full Map Page Component
export default function MapPage() {
  useEffect(() => {
    document.title = "Tembea360 Map";
  }, []);

  return (
    <div className="min-h-screen bg-white p-6">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
        🌍 Youth & Culture Map – Kenya
      </h2>

      <div className="h-[500px] max-w-4xl mx-auto rounded-xl overflow-hidden shadow border">
        <MapContainer
          center={[0.4, 37.5]} // focused Kenya view
          zoom={6.5}
          minZoom={5}
          maxBounds={[[5, 33], [-5, 42]]} // bounding box around Kenya
          maxBoundsViscosity={1.0}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='© OpenStreetMap contributors'
          />

          {categories.map((cat) =>
            cat.places.map((place, idx) => (
              <Marker
                key={`${cat.type}-${idx}`}
                position={[place.lat, place.lng]}
                icon={colouredIcon(cat.color)}
              >
                <Popup>
                  <strong>{place.name}</strong><br />
                  <em>{cat.type}</em><br />
                  {place.story}<br /><br />
                  <span className="text-sm text-blue-600 italic">
                    Ask the AI Concierge for more spots like this →
                  </span>
                </Popup>
              </Marker>
            ))
          )}
        </MapContainer>
      </div>

      <p className="text-center mt-4 text-gray-600 text-sm italic">
        * Interactive tour & category filters coming soon *
      </p>
    </div>
  );
}
