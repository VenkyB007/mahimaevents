import React from "react";

const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=500&h=600",
    title: "Garden Wedding Ceremony",
    description: "Romantic outdoor celebration with floral arrangements",
  },
  {
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=500&h=600",
    title: "Kids Birthday Bash",
    description: "Colorful themed party with entertainment and games",
  },
  // Add other items...
];

export default function GalleryPage() {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">Full Portfolio Gallery</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item, index) => (
          <div key={index} className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
