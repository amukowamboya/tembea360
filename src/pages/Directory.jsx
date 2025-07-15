const listings = [
    { name: "Maasai Art Center", location: "Kajiado", type: "Art & Culture" },
    { name: "Kibera Street Kitchen", location: "Nairobi", type: "Food" },
    { name: "Elgon Trek Guides", location: "Bungoma", type: "Tour Service" },
  ];
  
  export default function Directory() {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Youth-Owned Directory</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {listings.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-4">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p>{item.type} – {item.location}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  